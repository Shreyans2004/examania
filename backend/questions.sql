-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2023 at 09:08 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `examania_local`
--
USE `examania_local`;
--
-- Dumping data for table `questions`
--
-- FILL THE TABLE WITH QUESTIONS HERE

INSERT INTO `questions` (`quesID`, `quesText`, `quesType`, `optionA`, `optionB`, `optionC`, `optionD`, `answer`, `marks`, `difficulty`, `concept`, `quesSubject`) VALUES
('0yFKIFFkhEKP1ivbEZ_-1', 'The velocity of a ball is 5 meters per second and suddenly it increases to 20 meters per second .then what will be its acceleration?', 'MCQ', '20 km/s', '30 km/s', '40 km/s', '50 km/s', 'A', '4', 'easy', 'NLM','physics') 
;






COMMIT;