-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2023 at 06:31 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `examania_local`
--

-- --------------------------------------------------------

--
-- Table structure for table `exam_details`
--

CREATE TABLE `exam_details` (
  `exam_name` varchar(100) NOT NULL,
  `exam_subject` varchar(100) NOT NULL,
  `ques_type` varchar(50) NOT NULL DEFAULT 'MCQ',
  `no_of_ques` int(8) DEFAULT NULL,
  `pos_mark` int(8) DEFAULT NULL,
  `neg_mark` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exam_details`
--

INSERT INTO `exam_details` (`exam_name`, `exam_subject`, `ques_type`, `no_of_ques`, `pos_mark`, `neg_mark`) VALUES
('BITSAT', 'Aptitude', 'MCQ', 20, 3, -1),
('BITSAT', 'Chemistry', 'MCQ', 30, 3, -1),
('BITSAT', 'English', 'MCQ', 10, 3, -1),
('BITSAT', 'Mathematics', 'MCQ', 40, 3, -1),
('BITSAT', 'Physics', 'MCQ', 30, 3, -1),
('JEE-MAIN', 'Chemistry', 'Integer', 5, 4, -1),
('JEE-MAIN', 'Chemistry', 'MCQ', 20, 4, -1),
('JEE-MAIN', 'Mathematics', 'Integer', 5, 4, -1),
('JEE-MAIN', 'Mathematics', 'MCQ', 20, 4, -1),
('JEE-MAIN', 'Physics', 'Integer', 5, 4, -1),
('JEE-MAIN', 'Physics', 'MCQ', 20, 4, -1),
('NEET', 'Botany', 'MCQ', 50, 4, -1),
('NEET', 'Chemistry', 'MCQ', 50, 4, -1),
('NEET', 'Physics', 'MCQ', 50, 4, -1),
('NEET', 'Zoology', 'MCQ', 50, 4, -1),
('TS-EAMCET', 'Chemistry', 'MCQ', 40, 1, 0),
('TS-EAMCET', 'Mathematics', 'MCQ', 80, 1, 0),
('TS-EAMCET', 'Physics', 'MCQ', 40, 1, 0),
('VITEEE', 'Aptitude', 'MCQ', 10, 1, 0),
('VITEEE', 'Chemistry', 'MCQ', 35, 1, 0),
('VITEEE', 'English', 'MCQ', 5, 1, 0),
('VITEEE', 'Mathematics', 'MCQ', 40, 1, 0),
('VITEEE', 'Physics', 'MCQ', 35, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `exam_types`
--

CREATE TABLE `exam_types` (
  `exam_name` varchar(100) NOT NULL,
  `duration` int(8) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exam_types`
--

INSERT INTO `exam_types` (`exam_name`, `duration`, `description`) VALUES
('BITSAT', 180, 'bitsat description'),
('JEE-MAIN', 180, 'An entrance exam for entry into NITs,IIITs,CGFTIs'),
('NEET', 200, 'neet desrciption'),
('TS-EAMCET', 180, 'An entrance exam for getting to prestiguous institutes in Hyderabad and Telangana'),
('VITEEE', 150, 'VITEEE description');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `quesid` varchar(30) NOT NULL,
  `ques_text` text DEFAULT NULL,
  `ques_type` varchar(100) DEFAULT NULL,
  `ques_subject` varchar(100) DEFAULT NULL,
  `optionA` varchar(250) DEFAULT NULL,
  `optionB` varchar(250) DEFAULT NULL,
  `optionC` varchar(250) DEFAULT NULL,
  `optionD` varchar(250) DEFAULT NULL,
  `answer` varchar(250) DEFAULT NULL,
  `marks` int(8) DEFAULT NULL,
  `difficulty` varchar(100) DEFAULT NULL,
  `concept` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`quesid`, `ques_text`, `ques_type`, `ques_subject`, `optionA`, `optionB`, `optionC`, `optionD`, `answer`, `marks`, `difficulty`, `concept`) VALUES
('0HGO7qg8jtp2ZFGh4_pqf', 'Number of different circles that can be drawn touching 3 lines, no two of which are\nparallel and they are neither coincident nor concurrent, are -', 'MCQ', 'Mathematics', '1', '2', '3', '4', 'D', 4, 'Hard', 'Circle'),
('0yFKIFFkhEKP1ivbEZ_1', 'The velocity of a ball is 5 meters per second and suddenly it \n increases to 20 meters per second .then what will be \n its acceleration?', 'MCQ', 'Physics', '20 km/s', '30 km/s', '40 km/s', '50 km/s', 'A', 4, 'Easy', 'NLM'),
('1hZHE4zHY1hbNkC5wrEmH', 'The heat required to raise the temperature of body by 1 K is called', 'MCQ', 'Chemistry', ' specific heat    ', 'thermal capacity', 'water equivalent ', 'none of these', 'B', 4, 'Medium', 'States of Matter: Gases,Liquids and Solids'),
('2gFX-IKxGGJnK7cg_uCT3', 'The compound  formed on heating chlorobenzene with chloral in the presence concentrated sulphuric   acid  is', 'MCQ', 'Chemistry', 'gammexene   ', 'hexachloroethane        ', 'Freon   ', 'DDT', 'D', 4, 'Medium', 'Haloalkenes and Haloarenes'),
('2u9FwzdksL_Bf8PR-yt7J', 'Which of the following does not show geometrical isomerism', 'MCQ', 'Chemistry', '1, 2 - dichloro - 1 - pentane', '1,3- dichloro - 2 - pentane', '1,2- dichloro - 1 - pentane', '1, 4 - dichloro - 2 - pentane', 'C', 4, 'Medium', 'GOC'),
('5-9D8u8sA5-Es3gpijUj9', 'The variance of observations 112, 116, 120, 125, 132 is :-', 'Integer', 'Mathematics', '', '', '', '', '48.8', 4, 'Medium', 'statistics'),
('5fAZ9BljVchacybqaRxMD', 'If distance between the directrices be thrice the distance between the foci, then\neccentricity of ellipse is -', 'MCQ', 'Mathematics', '1/2', '2/3', '1/sqrt(3)', '4/5', 'C', 4, 'Easy', 'Ellipse'),
('5HKdtcYWY4hlXS2h5-WIu', 'If the mean of numbers 27, 31, 89, 107, 156 is 82, then the mean of numbers  130, 126, 68, 50, 1 will be-', 'MCQ', 'Mathematics', '80', '82', '75', '157', 'C', 4, 'Medium', 'statistics'),
('6TOtExymPdh3Svp-DXaw7', 'The mean of first three terms is 14 and mean of next two terms is 18. The mean  of all the five terms is-', 'MCQ', 'Mathematics', '15.5', '15.0', '15.2', '15.6', 'D', 4, 'Easy', 'statistics'),
('7JynSExia5ogOI3Tpn2X2', 'A red solid is insoluble in water. However it becomes soluble if some KI is added to water. Heating the red solid in a test tube results in liberation of some violet coloured fumes and droplets of a metal appear on the cooler parts of the test tube. The red solid is?', 'MCQ', 'Chemistry', 'Hgl2', 'HgO', 'Pb304', ' (NH4)2Cr207', 'C', 4, '', 'Chemistry in Everyday Life'),
('8D3vtuQTDh1pWOVhp8rSr', 'An ellipse is drawn with major and minor axes of lengths 10 and 8 respectively.\nUsing one focus as centre, a circle is drawn that is tangent to the ellipse, with no part of the\ncircle being outside the ellipse. The radius of the circle is -', 'MCQ', 'Mathematics', '1.732', '2', '2', '5', 'B', 4, 'Hard', 'Ellipse'),
('aidLydJ-KtCmpjB6pqc-P', 'An ellipse is such that the length of the latus rectum is equal to the sum of the\nlengths of its semi principal axes. Then -', 'MCQ', 'Mathematics', 'Ellipse becomes a circle', 'Ellipse becomes a line segment between the two foci', 'Ellipse becomes a parabola', 'none of these', 'A', 4, 'Medium', 'Ellipse'),
('B9q3TJ_47JC7ssnRZQXQL', 'Mean deviation of 5 observations from their mean 3 is 1.2, then coefficient of\nmean deviation is :-', 'Integer', 'Mathematics', '', '', '', '', '0.4', 4, 'Easy', 'statistics'),
('CBfjfwGTB7O3ovkXPhOwL', 'Which one of the following ores is best concentrated by froth-floatation ?   ', 'MCQ', 'Chemistry', 'Magnetite', 'Malachite', 'Galena  ', 'Cassiterite', 'C', 4, '', 'Metallurgy and Environmental Chemistry'),
('Ct4it_kS13QTpnOR22h6Z', 'Benzene and toluene form nearly ideal solutions. At 20°C, the vapour pressure of benzene is 75 torr and that of toluene is 22 torr. The partial vapour pressure of benzene at 20°C for a solution containing 78 g of benzene and 46 g of toluene in torr is', 'Integer', 'Chemistry', '', '', '', '', '25', 4, '', 'Chemistry in Everyday Life'),
('gEaG_zv0NSg6jXnLHkhuy', 'K02(potassium super oxide) is used in oxygen cylinders in space and submarines. This is because it        (2002)', 'MCQ', 'Chemistry', 'absorbs C02 and increases 02 content', 'eliminates moisture', 'absorbs C02', 'produces ozone', 'B', 4, 'Medium', 'S-Block'),
('H4F0GL4kgMQAtuOs2Z9wt', 'The A.M. of first n even natural number is-', 'MCQ', 'Mathematics', 'n(n+1)', '(n+1)/2', 'n/2', 'n+1', 'D', 4, 'Medium', 'statistics'),
('h6EoMa0075q2vMS7_bemA', 'If the coefficient of variation and standard deviation of a distribution are 50%\n\nand 20 respectively, then its mean is-', 'Integer', 'Mathematics', '', '', '', '', '40', 4, 'Medium', 'statistics'),
('H9d0BU2EF78cdARyq3m3N', 'Which of the following is the correct order of decreasing SN2 reactivity ? ', 'MCQ', 'Chemistry', 'RCH2x > R3CX > R2CHX', 'RCH2X>R2CHX>R3CX', 'R3CX >R2CHX > RCH2X', 'R2CHX>R3CX>RCH2X', 'B', 4, '', 'Haloalkenes and Haloarenes'),
('hZLFXh6FgSxfMS94s0P7Z', 'The mean of 50 observations is 36. If its two observations 30 and 42 are  deleted, then the mean of the remaining observations is-', 'MCQ', 'Mathematics', '48', '36', '38', '98', 'B', 4, 'Medium', 'statistics'),
('JfTdS2SLW1WTO4F80xrgu', 'The sum of squares of deviation of variates from their A.M. is always :-', 'MCQ', 'Mathematics', '0', 'minimum', 'max', 'nothing can be said', 'B', 4, 'Easy', 'statistics'),
('jLA-7yE--jFE3lFcUidIL', 'On mixing a certain alkane with chlorine and irradiating it with ultraviolet light, it forms only one monochloroalkane. This alkane could  be?', 'MCQ', 'Chemistry', 'pentane', 'isopentane', 'neopentane   ', 'propane', 'C', 4, '', 'Haloalkenes and Haloarenes'),
('KjVpyWgA-fr8qShnGriO0', 'Ethyl isocyanide on hydrolysis in acidic medium generates ?', 'MCQ', 'Chemistry', 'propanoic acid and ammonium salt .', 'ethanoic acid and ammonium salt', 'methylamine salt and ethanoic acid', 'ethylamine salt and methanoic acid', 'B', 4, '', 'Nitro,Amine and Azo Compounds'),
('KwOZH9A_AjYz_K3CMU9N5', 'Which of the following could act as a propellant for rockets', 'MCQ', 'Chemistry', 'Liquid oxygen + liquid argon', 'Liquid hydrogen + liquid oxygen', ' Liquid nitrogen + liquid oxygen', 'Liquid hydrogen + liquid nitrogen', 'B', 4, 'Medium', 'Chemistry In Everyday Life'),
('L4hb1D9f8HZ5HJZvaeerg', 'Consider the following nuclear reactions M —N +2 He * N —L + 2P+ The number of neutrons in the element L is   ', 'Integer', 'Chemistry', '', '', '', '', '140', 4, '', 'Chemistry in Everyday Life'),
('LCbB9xpGhpiRGQ1bfWbNM', 'The IUPAC name of CH3COCH(CH3)2 is', 'MCQ', 'Chemistry', '2-methyl-3-butanone', '4-methylisopropyl ketone', '3-methyl-2-butanone', 'Isopropylmethyl ketone', 'B', 4, 'Medium', 'GOC'),
('lmp8Nsg8H1GDOuISTlm8c', 'The curve represented by x = 3(cost + sint), y = 4(cost – sint), is -', 'MCQ', 'Mathematics', 'ellipse', 'rectangle', 'hyperbola', 'circle', 'A', 4, 'Easy', 'Conic Sections'),
('lPnPuesV53HxP_bn-6uH3', 'For the reaction A + B --> C + D, doubling the concentration of both the reactants increases the reaction rate by 8 time and doubling the initial concentration of only B simply doubles the reaction rate. The rate law for the reaction is', 'MCQ', 'Chemistry', 'r = k [A] [B]^2', ' r = k [A] [B]', ' r = k [A]^1/2 [B]', 'r = k [A]^2 [B].', 'D', 4, 'Easy', 'CHEMICAL KINETICS -rate law'),
('MjjxrUutaFb0oTT9qb0gR', 'Beryllium and aluminium exhibit many properties which are similar. But the two elements differ in ?', 'MCQ', 'Chemistry', 'exhibiting maximum covalency in compound', 'exhibiting amphoteric nature in their oxides', 'forming covalent halides', 'forming polymeric hydrides', 'A', 4, '', ' Periodic Classification and Properties'),
('mMQ7uaj2SBUWE0XG1v4OO', 'According to the Periodic Law of elements, the variation in properties of elements is related to their?', 'MCQ', 'Chemistry', 'nuclear masses', 'atomic numbers', 'nuclear neutron-proton number ratios', 'atomic masses', 'B', 4, '', ' Periodic Classification and Properties'),
('mMUrhABT8NoiO3GNBwKko', 'Three equal circles each of radius r touch one another. The radius of the circle\ntouching all the three given circles internally is -', 'MCQ', 'Mathematics', '2+1.732 R', '(2+1.732)/1.732 R', '(2-1.732)/1.732 R', '(2-1.732)R', 'B', 4, 'Easy', ''),
('NHyLr8MdxkKWL5h-QuRNt', 'Median is independent of change of :-', 'MCQ', 'Mathematics', 'origin', 'scale', 'origin and scale ', 'nothing can be said', 'D', 4, 'Medium', 'statistics'),
('nNLXCYfRhOpVqK1PPGkys', "A series which have numbers three 4\'s, four 5\'s, five 6\'s, eight 7\'s, seven 8\'s\nand six 9\'s then the mode of numbers is :-", 'Integer', 'Mathematics', '', '', '', '', '7', 4, 'Medium', 'statistics'),
('oPwob-Nf0BFcd3cOinCh3', 'The length of intercept on y-axis, by a circle whose diameter is the line joining the\npoints (–4, 3) and (12, –1) is -', 'MCQ', 'Mathematics', '3*root(2)', '3*root(12)', '4*root(13)', 'None of these', 'C', 4, 'Easy', 'Circle'),
('P3EFCPo3dHzWQprihU_Lg', 'Q is a point on the auxiliary circle of an ellipse. P is the corresponding point on\nellipse. N is the foot of perpendicular from focus S, to the tangent of auxiliary circle at Q.\nThen -', 'MCQ', 'Mathematics', 'SP=SN', 'SP=PQ', 'PN=SP', 'NQ=SP', 'A', 4, 'Hard', 'Ellipse'),
('PMfnDz4IaGFf7nh5KTg0O', 'Na and Mg crystallize in BCC and FCC type crystals respectively. Then the number of atoms of Na and Mg present in the unit cell of their respective crystal is', 'MCQ', 'Chemistry', '4 and 2   ', '9 and 14', '14 and 9       ', '2 and 4', 'C', 4, 'Medium', 'States of Matter: Gases,Liquids and Solids'),
('Q8ciFVxs41JBXmQowjisE', 'RNA is different from DNA because RNA contains     ', 'MCQ', 'Chemistry', 'ribose sugar and thymine', 'ribose sugar and uracil', 'deoxyribose sugar and thymine', 'deoxyribose sugar and uracil', 'B', 4, 'Medium', 'Biomolecules and Polymers'),
('qrobb1LIwVubFQI54mwp3', 'The curve represented by x = 3(cost + sint), y = 4(cost – sint), is -', 'MCQ', 'Mathematics', 'ellipse', 'rectangle', 'hyperbola', 'circle', 'A', 4, 'Hard', 'Ellipse'),
('RRGKoh6YZK7TpqQ_dsTXU', 'P-particle is emitted in radioactivity by?', 'MCQ', 'Chemistry', 'conversion of proton to neutron', 'from outermost orbit', 'conversion of neutron to proton', 'p-particle is not emitted', 'C', 4, '', 'Chemistry in Everyday Life'),
('T3m_L9mZvMYAciKxZ-sZG', 'If the eccentricity of an ellipse be 5/8 and the distance between its foci be 10,\nthen its latus rectum is -', 'MCQ', 'Mathematics', '39/4', '12', '15', '37/2', 'A', 4, 'Medium', 'Ellipse'),
('T6n5aJzv4kdc9-EGSA5jy', 'The solubilities of carbonates decrease down the magnesium group. This is due to a decrease in (2003)', 'MCQ', 'Chemistry', 'hydration energies of cations ', 'inter – ionic attraction', 'absorbs C02', 'lattice energies of solids', 'A', 4, 'Medium', 'S-Block'),
('Tk6EQhHNs3se_Fl9mYUU7', 'The mean of 9 terms is 15. if one new term is added and mean become 16, then the value of new term is :-', 'MCQ', 'Mathematics', '23', '25', '27', '30', 'B', 4, 'Easy', 'statistics'),
('u4dTWsQ13zLFzBHG9vhdk', 'Three equal circles each of radius r touch one another. The radius of the circle\ntouching all the three given circles internally is -', 'MCQ', 'Mathematics', '2+1.732 R', '(2+1.732)/1.732 R', '(2-1.732)/1.732 R', '(2-1.732)R', 'B', 4, 'Hard', 'Circle'),
('UKSCifGGXbz875jjS5LRx', 'Which one of the following is the strongest base in aqueous solution ?', 'MCQ', 'Chemistry', 'Trimethylamine  ', 'Aniline', 'Dimethylamine     ', 'Methylamine', 'C', 4, '', 'Nitro,Amine and Azo Compounds'),
('vApz-HRtyQD0UcWIrZCaY', 'Aluminium is extracted by the electrolysis of ', 'MCQ', 'Chemistry', 'bauxite', 'alumina', 'alumina mixed with molten cryolite', 'molten cryolite', 'C', 4, '', 'Metallurgy and Environmental Chemistry'),
('WG89Mky37tSKrER2Ay91p', 'The rate of a reaction is expressed in different ways as follows : 1/2d[c]/dt=-1/3d[d]/dt=+1/4d[A]dt=-d[B]/dt., The reaction is', 'MCQ', 'Chemistry', '4 A + B =2 C + 3 D', ' B + 3 D =4 A + 2 C', 'A + B = C + D', ' B + D = A + C', 'B', 4, 'Easy', 'CHEMICAL KINETICS'),
('xp7IoSNOjrFAR8p6GN00O', 'For the gaseous reaction 2A + B -->C + D, the rate is given by k [A] [B]. The volume of the container containing the reaction mixture is suddenly reduced to one fourth of its original volume. with respect to the original rate, now the rate would be', 'MCQ', 'Chemistry', '1/16 times', '1/8 times', '16 times', '8 times', 'C', 4, 'Easy', 'CHEMICAL KINETICS -rate law'),
('YpykatMzj0GgYX8dAUUOc', 'The range of observations 2, 3, 5, 9, 8, 7, 6, 5, 7, 4, 3 is :-', 'MCQ', 'Mathematics', '9', '4', '7', '12', 'C', 4, 'Easy', 'statistics'),
('Z7LVYsQ666PxkzWVaq1xe', 'The S.D. of 7 scored 1, 2, 3, 4, 5, 6, 7 is-', 'Integer', 'Mathematics', '', '', '', '', '2', 4, 'Medium', 'statistics'),
;
-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `subject_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subject_name`) VALUES
('Aptitude'),
('Biology'),
('Botany'),
('Chemistry'),
('English'),
('Mathematics'),
('Physics'),
('Zoology');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `testid` varchar(25) NOT NULL,
  `userid` varchar(25) DEFAULT NULL,
  `exam_name` varchar(100) DEFAULT NULL,
  `difficulty` varchar(50) DEFAULT NULL,
  `total_score` int(8) DEFAULT NULL,
  `total_ques` int(8) DEFAULT NULL,
  `attempted_ques` int(8) DEFAULT NULL,
  `correct_ques` int(8) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`testid`, `userid`, `exam_name`, `difficulty`, `total_score`, `total_ques`, `attempted_ques`, `correct_ques`, `start_time`, `end_time`) VALUES
('8_PL308NlDmtuqPJIrXyK', 'NcP79Bn1LuFqzcXqQyDLd', 'JEE-MAIN', 'Easy', 180, 75, 40, 35, '2023-11-13 11:58:23', '2023-11-13 22:30:30'),
('pcRH_v5hagXfmRKw3rTNN', 'NcP79Bn1LuFqzcXqQyDLd', 'JEE-MAIN', 'Easy', NULL, 75, NULL, NULL, '2023-11-13 01:17:52', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `test_results`
--

CREATE TABLE `test_results` (
  `testid` varchar(25) NOT NULL,
  `quesid` varchar(25) NOT NULL,
  `user_answer` varchar(200) DEFAULT NULL,
  `ques_score` int(8) DEFAULT NULL,
  `verdict` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test_results`
--

INSERT INTO `test_results` (`testid`, `quesid`, `user_answer`, `ques_score`, `verdict`) VALUES
('8_PL308NlDmtuqPJIrXyK', 'B9q3TJ_47JC7ssnRZQXQL', 'B', -1, 'Wrong'),
('8_PL308NlDmtuqPJIrXyK', 'WG89Mky37tSKrER2Ay91p', 'A', 4, 'Correct');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` varchar(25) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `pass` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `username`, `pass`) VALUES
('NcP79Bn1LuFqzcXqQyDLd', 'akashpaloju', '$2b$10$JjeUgHPVQZh4TBX5DCWa3u9gFRS46jhkPOqrwlV0wsd2o3n8xUaEC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exam_details`
--
ALTER TABLE `exam_details`
  ADD PRIMARY KEY (`exam_name`,`exam_subject`,`ques_type`) USING BTREE,
  ADD KEY `exam_details_ibfk_2` (`exam_subject`);

--
-- Indexes for table `exam_types`
--
ALTER TABLE `exam_types`
  ADD PRIMARY KEY (`exam_name`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`quesid`),
  ADD KEY `fk_subject` (`ques_subject`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subject_name`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`testid`),
  ADD KEY `userid` (`userid`),
  ADD KEY `exam_name` (`exam_name`);

--
-- Indexes for table `test_results`
--
ALTER TABLE `test_results`
  ADD PRIMARY KEY (`testid`,`quesid`),
  ADD KEY `ques_id` (`quesid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `exam_details`
--
ALTER TABLE `exam_details`
  ADD CONSTRAINT `exam_details_ibfk_1` FOREIGN KEY (`exam_name`) REFERENCES `exam_types` (`exam_name`) ON UPDATE CASCADE,
  ADD CONSTRAINT `exam_details_ibfk_2` FOREIGN KEY (`exam_subject`) REFERENCES `subjects` (`subject_name`) ON UPDATE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `fk_subject` FOREIGN KEY (`ques_subject`) REFERENCES `subjects` (`subject_name`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `tests_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`),
  ADD CONSTRAINT `tests_ibfk_2` FOREIGN KEY (`exam_name`) REFERENCES `exam_types` (`exam_name`);

--
-- Constraints for table `test_results`
--
ALTER TABLE `test_results`
  ADD CONSTRAINT `test_results_ibfk_1` FOREIGN KEY (`quesid`) REFERENCES `questions` (`quesid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
