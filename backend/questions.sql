-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2023 at 09:01 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`quesID`, `quesText`, `quesType`, `optionA`, `optionB`, `optionC`, `optionD`, `answer`, `marks`, `difficulty`, `concept`, `quesSubject`) VALUES
('0yFKIFFkhEKP1ivbEZ_-1', 'The velocity of a ball is 5 meters per second and suddenly it increases to 20 meters per second .then what will be its acceleration?', 'MCQ', '20 km/s', '30 km/s', '40 km/s', '50 km/s', 'A', '4', 'easy', 'NLM', 'physics'),
('lPnPuesV53HxP_bn-6uH3', 'For the reaction A + B --> C + D, doubling the concentration of both the reactants increases the reaction rate by 8 time and doubling the initial concentration of only B simply doubles the reaction rate. The rate law for the reaction is', 'MCQ', 'r = k [A] [B]^2', ' r = k [A] [B]', ' r = k [A]^1/2 [B]', 'r = k [A]^2 [B].', 'D', '4', 'Easy', 'CHEMICAL KINETICS -rate law', 'chemistry'),
('WG89Mky37tSKrER2Ay91p', 'The rate of a reaction is expressed in different ways as follows : 1/2d[c]/dt=-1/3d[d]/dt=+1/4d[A]dt=-d[B]/dt., The reaction is', 'MCQ', '4 A + B =2 C + 3 D', ' B + 3 D =4 A + 2 C', 'A + B = C + D', ' B + D = A + C', 'B', '4', 'Easy', 'CHEMICAL KINETICS', 'chemistry'),
('xp7IoSNOjrFAR8p6GN00O', 'For the gaseous reaction 2A + B -->C + D, the rate is given by k [A] [B]. The volume of the container containing the reaction mixture is suddenly reduced to one fourth of its original volume. with respect to the original rate, now the rate would be', 'MCQ', '1/16 times', '1/8 times', '16 times', '8 times', 'C', '4', 'Easy', 'CHEMICAL KINETICS -rate law', 'chemistry');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
