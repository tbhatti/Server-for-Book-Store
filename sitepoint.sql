CREATE DATABASE  IF NOT EXISTS `sitepoint` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sitepoint`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: sitepoint
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Mike','Shenzhen','Science'),(2,'Jun','Suzhou','Programming'),(3,'Jerry','Shanghai','CS'),(4,'Bhatti','Beijing','Dot Net'),(20,'Tony','Lahore','Fiction');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `book_category` varchar(30) NOT NULL,
  `author_name` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `book_dimension` varchar(255) DEFAULT NULL,
  `book_format` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'JavaScript for Dummies','CS','Tanzeem','200',3,'2019-03-16','javascript.jpg','A & K','222','Text'),(8,'Weather Sciences','Science','Mike','200',4,'2019-03-16','weather.jpg','A & K','230','Text'),(9,'Advanced Chemistry','Science','Ivan','129',4,'2019-03-16','Advance.jpg','KnS','200','Text'),(10,'C++ for Dummies','Programming','Jun','321',4,'2019-03-16','C.jpg','Tapas','200','Text'),(11,'Pro C Sharpe','Programming','Jerry','233',4,'2019-03-16','CSharp_.jpg','A & K','200','Text'),(12,'Database for begginers','Database','Sam','324',4,'2019-03-16','DB_.jpg','KnS','320','Text'),(13,'Learn JAVA 2','Programming','Jun','432',4,'2019-03-16','Java2.jpg','A & K','200','Text'),(14,'Organic Chemistry','Science','Zahoor','564',4,'2019-03-16','OC.jpg','Tapas','200','Text'),(15,'Artificial Intelligence','Programming','Jun','654',4,'2019-03-16','AI.jpg','A & K','200','Text'),(16,'Computer Architecture','CS','Mike','432',4,'2019-03-16','CArchitect.jpg','A & K','200','Text'),(17,'Physics Learn','Science','Mike','123',4,'2019-03-16','LPhysics.png','A & K','200','Text'),(18,'Botany','Science','Mike','432',4,'2019-03-16','Botany1.jpg','A & K','200','Text'),(19,'Moon Astrology','Science','Mike','370',4,'2019-03-16','science1.jpg','A & K','200','Text'),(20,'Aspects Astrology','Science','Mike','340',4,'2019-03-16','Science2.jpg','A & K','200','Text'),(21,'Hellenistic Astrology','Science','Mike','435',4,'2019-03-16','Science3.jpg','A & K','200','Text'),(22,'Environment Science','Science','Mike','732',4,'2019-03-16','Science4.jpg','A & K','200','Text'),(23,'Science of Environment','Science','Mike','235',4,'2019-03-16','Science5.jpg','A & K','200','Text'),(24,'Assignments in Bio','Science','Mike','432',4,'2019-03-16','Biology.jpg','A & K','200','Text'),(25,'The Whispers','Fiction','Tony','453',4,'2019-03-16','Fiction1.jpg','A & K','200','Text'),(26,'Book Dust','Fiction','Tony','634',4,'2019-03-16','Fiction2.jpg','A & K','200','Text'),(27,'Complete SQL','Database','Saqib','200',4,'2019-03-16','sql.jpg','A & K','230','Text'),(28,'Python for all','Programming','Jun','200',4,'2019-03-16','Python.jpg','KnS','230','Text'),(29,'Basics Python','Programming','Jun','200',4,'2019-03-16','Python2.jpg','A & K','230','Text'),(30,'Advanced Python','Programming','Jun','200',4,'2019-03-16','Python3.jpg','Tapas','230','Text'),(31,'JAVA Program','Programming','Jun','200',4,'2019-03-16','Java4.jpg','KnS','230','Text'),(32,'JAVA Check','Programming','Jun','200',4,'2019-03-16','Java123.jpg','A & K','230','Text'),(33,'Start JAVA','Programming','Jun','200',4,'2019-03-16','Java5.jpg','Tapas','230','Text'),(41,'Test Book Updated','CS','Jerry','320',4,'2018-12-19','building-trust-after-client-conflicts.jpg','Tapas','200','Text and Images'),(42,'New Test Book Updated','Programming','Jun','333',3,'2018-12-13','login-page.png','KnS','302','Test Text'),(43,'New Test Book Updated','Programming','Jun','333',3,'2018-12-13','images.jpg','KnS','302','Test Text');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Science','Science'),(2,'CS','CS'),(3,'Fiction','Fiction'),(4,'Programming','Programming'),(5,'Database','Database');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_us`
--

DROP TABLE IF EXISTS `contact_us`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_us` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `comments` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_us`
--

LOCK TABLES `contact_us` WRITE;
/*!40000 ALTER TABLE `contact_us` DISABLE KEYS */;
INSERT INTO `contact_us` VALUES (2,'sasa','asdasd','asda',NULL),(3,'dsdasd','asdasd','asdas',NULL),(4,'Tanzrr','dqwd','ms_saddiqui@yahoo.com',NULL);
/*!40000 ALTER TABLE `contact_us` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publishers`
--

DROP TABLE IF EXISTS `publishers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publishers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `publication_city` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publishers`
--

LOCK TABLES `publishers` WRITE;
/*!40000 ALTER TABLE `publishers` DISABLE KEYS */;
INSERT INTO `publishers` VALUES (1,'A & K','Shenzhen'),(2,'KnS','Shanghai'),(3,'Tapas','Beijing');
/*!40000 ALTER TABLE `publishers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoping_carts`
--

DROP TABLE IF EXISTS `shoping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoping_carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` varchar(30) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `book_id` varchar(30) DEFAULT NULL,
  `quantity` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoping_carts`
--

LOCK TABLES `shoping_carts` WRITE;
/*!40000 ALTER TABLE `shoping_carts` DISABLE KEYS */;
INSERT INTO `shoping_carts` VALUES (71,'28','129','9','7'),(72,'28','123','17','1'),(73,'28','370','19','1'),(74,'28','340','20','1'),(75,'28','200','1','1'),(76,'28','634','26','1');
/*!40000 ALTER TABLE `shoping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `user_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('tanzeem_pucit@yahoo.com','testuser12345','Tanzeem','Bhatti',1,'admin'),('bernie@yahoo.com','testuser12345','Bernie','Lai',27,NULL),('sam@yahoo.com','testuser12345','Sam','Peng',28,NULL),('tanzeem_pucit@yahoo.com','testuser12345','','',29,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-10 13:31:12
