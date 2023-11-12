-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2023 at 07:34 PM
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
  `userid` varchar(10) DEFAULT NULL,
  `exam_name` varchar(100) DEFAULT NULL,
  `difficulty` varchar(50) DEFAULT NULL,
  `total_score` int(8) DEFAULT NULL,
  `total_ques` int(8) DEFAULT NULL,
  `attempted_ques` int(8) DEFAULT NULL,
  `correct_ques` int(8) DEFAULT NULL,
  `test_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`testid`, `userid`, `exam_name`, `difficulty`, `total_score`, `total_ques`, `attempted_ques`, `correct_ques`, `test_time`) VALUES
('cVv6namXz_qGj103Y5YrV', '10', 'JEE-MAIN', 'Easy', NULL, 75, NULL, NULL, '2023-11-12 15:14:37'),
('NWBOBQ2ESS', '10', 'JEE-MAIN', 'Easy', NULL, 75, NULL, NULL, '2023-11-12 00:10:54'),
('pqDEzF8XfL41SOyjR0K4T', '10', 'JEE-MAIN', 'Easy', NULL, 75, NULL, NULL, '2023-11-12 15:15:15'),

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

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` varchar(10) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `pass` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `username`, `pass`) VALUES
('NcP79Bn1LuFqzcXqQyDLd', 'akashpaloju', '$2b$10$qGYul4FInOdjgB.zc5Q6M.d8XwDeRjGKIgPpAqcUKsLIGRhkEs6Je');

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
  ADD CONSTRAINT `test_results_ibfk_1` FOREIGN KEY (`quesid`) REFERENCES `questions` (`quesID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
