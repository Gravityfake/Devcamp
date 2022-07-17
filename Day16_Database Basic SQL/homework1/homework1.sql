-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2022 at 09:52 AM
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
-- Database: `homework1`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `ISBN` varchar(32) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`ISBN`, `name`, `price`, `created_at`) VALUES
('9783598215766', 'His Toy', 289, '2022-07-17 07:40:51'),
('9783598215919', 'The Mars Room', 199, '2022-07-17 07:40:51'),
('9783598215933', 'The Marquis and I', 250, '2022-07-17 07:40:51'),
('9783598215957', 'Blood on the Tongue', 352, '2022-07-17 07:40:51'),
('9783598215995', 'A Higher Loyalty', 157, '2022-07-17 07:40:51');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `firstname`, `lastname`, `age`, `created_at`) VALUES
(1, 'Noah', 'Armstrong', 34, '2022-07-17 07:35:28'),
(2, 'Leslie', 'Ellis', 24, '2022-07-17 07:35:28'),
(3, 'Sandra', 'Hoffman', 35, '2022-07-17 07:35:28'),
(4, 'Cameron', 'Meyer', 19, '2022-07-17 07:35:28'),
(5, 'Cameron', 'Moore', 27, '2022-07-17 07:35:28');

-- --------------------------------------------------------

--
-- Table structure for table `salebook`
--

CREATE TABLE `salebook` (
  `ISBN` varchar(32) NOT NULL,
  `id` varchar(32) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `items` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `salebook`
--

INSERT INTO `salebook` (`ISBN`, `id`, `price`, `items`, `created_at`) VALUES
('9783598215766', '02', 289, 5, '2022-07-17 07:49:49'),
('9783598215919', '04', 199, 3, '2022-07-17 07:50:05'),
('9783598215957', '03', 352, 2, '2022-07-17 07:46:43'),
('9783598215995', '01', 157, 1, '2022-07-17 07:51:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`ISBN`),
  ADD UNIQUE KEY `ISBN` (`ISBN`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lastname` (`lastname`);

--
-- Indexes for table `salebook`
--
ALTER TABLE `salebook`
  ADD PRIMARY KEY (`ISBN`),
  ADD UNIQUE KEY `ISBN` (`ISBN`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
