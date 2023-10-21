# How to Contribute

1. Fork this repository.

  a. Click on Fork.
  
  <img width="944" alt="fork1" src="https://github.com/Team-NCrypt/examania/assets/119884665/34fd3995-0845-4bf3-b6df-b9456e5dbf2c">


  b. Click on Create fork.

  <img width="551" alt="fork-2" src="https://github.com/Team-NCrypt/examania/assets/119884665/0bc6736c-a785-47fe-917f-7993c0cfdac6">


  c. Click on Code.
  
<img width="934" alt="fork-3" src="https://github.com/Team-NCrypt/examania/assets/119884665/b45db0de-7699-4dfd-9f1e-562e74902eb6">


  d. Copy the URL. Use this URL in the next step.
  
<img width="819" alt="fork-4" src="https://github.com/Team-NCrypt/examania/assets/119884665/693accff-4726-43cc-91c6-b689e9212cc6">



2. Clone the forked repository, using following command

   ```bash
   git clone https://github.com/<your_username>/examania.git
   ```

3. Navigate to the repository's directory:

   ```bash
   cd C:/path_to_directory/examania
   ```

4. Ensure you are on the branch you want to use as the base branch:

   ```bash
   git checkout main
   ```

5. Create a new branch for each pull request:

   ```bash
   git branch new-branch-name
   ```

6. Switch to Newly created branch.

   ```bash
   git checkout -b new-branch-name
   ```

7. In new terminal type

   ```bash
   cd backend
   npm install
   npm run dev
   ```

   This will start the backend server.

8. Open another new terminal and type

   ```bash
   cd frontend
   npm install
   npm start
   ```

   This will start the frontend server.

9. Make required changes in source code.

10. Stage your changes:

   Check status,you should be able to see modified files in red color.

   ```bash
   git status
   ```

   ```bash
   git add <filename1> <filename2> <filename3>
   ```

   or if you want to stage all changes

   ```bash
   git add .
   ```

   Check status, now you should be able to see staged files in green color.

   ```bash
   git status
   ```

11. Commit your staged changes using:

   ```bash
   git commit -m "Your commit message here"
   ```

   Replace "Your commit message here" with a descriptive message that summarizes the changes you made. Check this [Conventional Commit Messages](#conventional-commit-messages).

12. Ensure you have correct **origin(forked repo)** and **upstream(original repo)**:

   ```bash
   git remote -v
   ```

13. Push the new branch to the remote repository:

   ```bash
   git push origin new-branch-name
   ```

   This command pushes the new branch to the remote repository, making it available for others to see and review.

14. Create a Pull Request(PR):
   On GitHub website navigate to the original repository and locate the "New Pull Request" button.

15. If you want to make any changes after creating a PR in the same branch, Repeat steps 9 to 13.



# Conventional Commit Messages

In our project, we follow the convention of using conventional commit messages for all commits. Conventional commit messages provide a standardized format for commit messages, making it easier to understand and track changes in our codebase.

A conventional commit message consists of a concise and structured format:

```bash
git commit -m "<type>(optional_scope): <your_commit_message>"
```

The message includes a type and a description, separated by a colon. Here's a breakdown of each component:

Type: The type indicates the nature of the commit and should be selected from a predefined set of types that are relevant to the changes made. Some common types include:

- feat: for a new feature implementation.
- fix: for a bug fix.
- docs: for documentation changes.
- chore: for maintenance or general housekeeping tasks.
- test: for adding or modifying tests.
- refactor: for code refactoring without changing functionality.
- style: for code style changes (e.g., formatting, indentation).

Description: The description provides a brief summary of the changes made in the commit. It should be concise but descriptive enough to understand the purpose of the commit.

Examples:-

```bash
git commit -m "feat(backend): Add search feature"
```
