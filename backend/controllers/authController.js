const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {nanoid} =  require('nanoid');

const signup =  async(req, res) => {
  // console.log(req.body.username,req.body.password);
  try {

    const checkQuery = "SELECT * FROM users WHERE username = ?"; //checking if the user already exists
    const [data,fields] = await db.execute(checkQuery, [req.body.username]);

    if (data.length) return res.status(409).json({message : "User already exists!"});
  
    const userId = nanoid();
    const salt = bcrypt.genSaltSync(10);                   //generating salt
    const hash = bcrypt.hashSync(req.body.password, salt); //hashing the password
  
    const q = `INSERT INTO users(userid,username,pass) VALUES ( '${userId}', '${req.body.username}', '${hash}' ) ; `; //inserting new user
    await db.execute(q);
  
    res.json({message : "User has been created"});

  } catch (error) {
    res.status(500).json({message : "User Creation Failed"});
    console.log(error.sqlMessage);
    console.log(error);
  }
};

const login = async(req, res) => {
  
  try {

    const q = `SELECT * FROM users WHERE username = (?) `;           //checking if the user exists
    const [data, fields] = await db.execute(q, [req.body.username]);
    if (data.length === 0) 
      return res.status(404).json({message : "User does not exist!"});
  
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].pass); //check password
    if (!isPasswordCorrect)
      return res.status(400).json({message : "Invalid credentials!"});
  
    const token = jwt.sign({ id: data[0].userid }, "naajwtkey");
    const { pass, ...other } = data[0];    //separating password from other user details
  
    res
      .cookie("access_token", token, {
        httpOnly: true,                    // client cannot access the cookie, only server can
      })
      .status(200)
      .json(other);
    
  } catch (error) {
    res.status(500).json({message : "Login Failed"});
    console.log(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",                                  //for cross site cookies
    secure:true                                       //for https requests only
  }).status(200).json("Logging out")
};

const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(403).json({ message : "Please Log in!" });

  try {
    
    const decoded = jwt.verify(token, "naajwtkey");
    req.userId = decoded.id;
    // console.log(req.userId);
    console.log("You are authenticated!");
    next();                                           //if token is valid, move to next middleware

  } catch (err) {
    return res.status(401).json({ message : "Your are not authorised!" });
  }
};


module.exports = {
  signup,
  login,
  logout,
  verifyUser,
}
