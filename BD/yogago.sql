-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: localhost    Database: yoga
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `artigos`
--

DROP TABLE IF EXISTS `artigos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artigos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artigos`
--

LOCK TABLES `artigos` WRITE;
/*!40000 ALTER TABLE `artigos` DISABLE KEYS */;
INSERT INTO `artigos` VALUES (1,'Hatha Yoga','uploads/artigos/iyengaryoga2.png','Hatha Yoga é a yoga clássica, as posturas não exigem uma ordem especifica, nem necessitam de se interligarem entre si. Este tipo de yoga foca-se nas posturas físicas (ásanas) e nos exercícios respiratórios (pranayamas). O grau de dificuldade das posições vai aumentando quanto mais tempo permanecer naquela posição.','2020-06-11 19:55:49','2020-06-11 19:55:49'),(2,'Ashtanga Vinyasa yoga','uploads/artigos/ashtangavinyasayoga2.jpg','Ashtanga Vinyasa Yoga já necessita dum nível maior de vigor físico e mental. É um conjunto de 6 séries de ásanas e têm de ser praticadas sempre na mesma ordem. O praticante só deve passar para a próxima serie após dominar a serie anterior. A evolução para a próxima sequência pode levar anos, é necessário trabalhar a disciplina e a dedicação para conseguir.','2020-06-11 19:55:49','2020-06-11 19:55:49'),(3,'Vinyasa Flow','uploads/artigos/ashtangavinyasayoga2.png','Vinyasa Flow Yoga exige a integração entre a respiração e o movimento, mas de forma livre pois variam muito de acordo com a criação de cada professor. É uma prática que exige esforço físico, mental e sincronizado por relacionar o movimento fluido e continuo com a respiração.','2020-06-11 19:55:49','2020-06-11 19:55:49');
/*!40000 ALTER TABLE `artigos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atividades`
--

DROP TABLE IF EXISTS `atividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `planoId` int DEFAULT NULL,
  `data_start` datetime DEFAULT NULL,
  `data_fin` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atividades`
--

LOCK TABLES `atividades` WRITE;
/*!40000 ALTER TABLE `atividades` DISABLE KEYS */;
INSERT INTO `atividades` VALUES (1,1,2,'2020-06-11 18:37:49','2020-06-15 02:01:14','2020-05-22 23:38:09','2020-06-15 02:01:14'),(2,1,6,'2020-06-11 19:01:12',NULL,'2020-06-11 19:01:12','2020-06-11 19:01:12'),(3,3,1,'2020-06-11 19:55:49',NULL,'2020-06-11 19:55:49','2020-06-11 19:55:49'),(4,3,1,'2020-06-11 19:56:01',NULL,'2020-06-11 19:56:01','2020-06-11 19:56:01'),(5,1,5,'2020-06-11 20:37:50',NULL,'2020-06-11 20:37:50','2020-06-11 20:37:50'),(6,1,1,'2020-06-11 20:46:58','2020-06-15 03:44:24','2020-06-11 20:46:58','2020-06-15 03:44:24'),(7,1,1,'2020-06-13 00:32:30','2020-06-15 03:44:24','2020-06-13 00:32:30','2020-06-15 03:44:24'),(8,6,1,'2020-06-13 02:14:39',NULL,'2020-06-13 02:14:39','2020-06-13 02:14:39'),(9,6,1,'2020-06-13 02:15:06',NULL,'2020-06-13 02:15:06','2020-06-13 02:15:06'),(10,6,3,'2020-06-13 02:15:12',NULL,'2020-06-13 02:15:12','2020-06-13 02:15:12'),(11,6,5,'2020-06-13 02:15:15','2020-06-13 23:19:28','2020-06-13 02:15:15','2020-06-13 23:19:28'),(12,6,5,'2020-06-13 23:17:02','2020-06-13 23:19:28','2020-06-13 23:17:02','2020-06-13 23:19:28'),(13,1,1,'2020-06-14 00:05:51','2020-06-15 03:44:24','2020-06-14 00:05:51','2020-06-15 03:44:24'),(14,1,1,'2020-06-14 02:19:34','2020-06-15 03:44:24','2020-06-14 02:19:34','2020-06-15 03:44:24'),(15,1,NULL,'2020-06-14 18:14:06',NULL,'2020-06-14 18:14:06','2020-06-14 18:14:06'),(16,1,7,'2020-06-14 18:14:31',NULL,'2020-06-14 18:14:31','2020-06-14 18:14:31'),(17,1,1,'2020-06-14 22:37:19','2020-06-15 03:44:24','2020-06-14 22:37:19','2020-06-15 03:44:24'),(18,1,1,'2020-06-14 22:37:32','2020-06-15 03:44:24','2020-06-14 22:37:32','2020-06-15 03:44:24'),(19,1,1,'2020-06-14 22:37:43','2020-06-15 03:44:24','2020-06-14 22:37:43','2020-06-15 03:44:24'),(20,1,1,'2020-06-14 22:37:51','2020-06-15 03:44:24','2020-06-14 22:37:51','2020-06-15 03:44:24'),(21,1,1,'2020-06-15 02:00:18','2020-06-15 03:44:24','2020-06-15 02:00:18','2020-06-15 03:44:24'),(22,1,1,'2020-06-15 02:00:29','2020-06-15 03:44:24','2020-06-15 02:00:29','2020-06-15 03:44:24'),(23,1,2,'2020-06-15 02:00:35','2020-06-15 02:01:14','2020-06-15 02:00:35','2020-06-15 02:01:14'),(24,1,3,'2020-06-15 02:00:42','2020-06-15 02:00:43','2020-06-15 02:00:42','2020-06-15 02:00:43'),(25,1,1,'2020-06-15 02:00:48','2020-06-15 03:44:24','2020-06-15 02:00:48','2020-06-15 03:44:24'),(26,1,3,'2020-06-15 02:01:07',NULL,'2020-06-15 02:01:07','2020-06-15 02:01:07'),(27,1,2,'2020-06-15 02:01:13','2020-06-15 02:01:14','2020-06-15 02:01:13','2020-06-15 02:01:14'),(28,1,3,'2020-06-15 02:01:21',NULL,'2020-06-15 02:01:21','2020-06-15 02:01:21'),(29,1,1,'2020-06-15 03:10:48','2020-06-15 03:44:24','2020-06-15 03:10:48','2020-06-15 03:44:24'),(30,1,1,'2020-06-15 03:10:50','2020-06-15 03:44:24','2020-06-15 03:10:50','2020-06-15 03:44:24'),(31,1,1,'2020-06-15 03:10:56','2020-06-15 03:44:24','2020-06-15 03:10:56','2020-06-15 03:44:24'),(32,1,1,'2020-06-15 03:44:20','2020-06-15 03:44:24','2020-06-15 03:44:20','2020-06-15 03:44:24');
/*!40000 ALTER TABLE `atividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercicios`
--

DROP TABLE IF EXISTS `exercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercicios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `planoId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercicios`
--

LOCK TABLES `exercicios` WRITE;
/*!40000 ALTER TABLE `exercicios` DISABLE KEYS */;
INSERT INTO `exercicios` VALUES (1,'Tadasana','uploads/exercicios/bakasana.jpg','Posicione-se de pé. Junte os dedos grandes dos pés e mantenha um espaço mínimo entre os calcanhares. Junte as mãos no centro do coração. Apoie bem os pés no tapete e sinta a alto da cabeça esticar-se em direcção ao céu. Expire para baixar os braços para junto do corpo.','2020-05-28 03:10:48','2020-06-14 15:56:59',6),(2,'Hastasana','uploads/exercicios/Ustrasana.jpg','Descontraia a parte de cima das costas e o pescoço ao mesmo tempo que inspira e estica os braços em direcção ao céu. Use as pernas para se sentir e elevar a partir dos arcos dos pés.','2020-05-28 03:10:49','2020-06-14 15:58:16',6),(3,'Uttanasana','uploads/exercicios/Setubanhdasarvangasana.jpg','Expire e dobre-se para a frente, deixando que o seu corpo caia em direcção à terra. Se não chegar com as mãos ao chão, dobre ligeiramente as pernas. Relaxe a base do pescoço e coloque algum peso nas almofadas dos pés.','2020-05-28 03:10:50','2020-06-14 15:58:27',6),(4,'Shvanasana','uploads/exercicios/Vrksasana2.jpg','Expire, levando um pé atrás de cada vez, até ficar em posição de prancha. Com os ombros alinhados pelos pulsos, faço nos abdominais e empurre o chão para se elevar, evitando que os ombros subam mais que o resto.','2020-05-28 03:10:51','2020-06-14 15:58:40',6),(5,'Urdhva Mukha Shvanasana','uploads/exercicios/Vrksasana1.jpg','Expire e dobre os dedos grandes dos pés de forma a voltar à postura de Cão Baixo. Rode as coxas inferiores para trás, pressione os polegares e os indicadores para baixo e puxe os trícepe para trás. Descontraia o pescoço e puxe os calcanhares em direcção ao tapete. Mantenha-se nesta posição durante cinco respirações longos e profundas.','2020-05-28 03:10:51','2020-06-14 15:58:50',6),(6,'Navasana','uploads/exercicios/Posturadebrac\'osGomukhasana.jpg','Sente-se de forma a que as plantas dos pés assentem no chão. Aproxime os pés o mais que puder das ancas e levante as pernas esticadas, estendendo os braços pela linha média e fazendo força com a parte interior das coxas. Mude o peso para a parte da frente das ancas, longe do cóccix e mantenha a coluna direita, puxando-a para cima. Garanta que a zona lombar não se curva!','2020-05-28 03:10:51','2020-06-14 15:58:59',4),(7,'Ardha Navasana','uploads/exercicios/3.jpg','Agora, baixe o tronco da posição de Navasana para o de Ardha Navasana. Mantenha as omoplatas fora do chão e as pernas levantadas um pouco acima do tapete. Estenda os braços para a frente e faça força nos abdominais puxando as costelas inferiores para o centro do corpo. Expire e regresse à postura Navasana. Inspire e volte a baixar para o Ardha Navasana. Expire e regresse à Navasana. Repita 5 ou 10 vezes, ou tantas quanto conseguir, sempre com a respiração correta, sem levantar nem encurvar a zona lombar.','2020-05-28 03:10:51','2020-06-14 16:01:23',4),(8,'Postura Garudasana 1','uploads/exercicios/2.jpg','Numa posição sentada, inspire para estender os braços para os lados. Expire e dê a si próprio um abraço, cruzando o cotovelo direito para cima do esquerdo. Depois, junte as costas das mãos ou, se conseguir, as palmas das mãos.','2020-05-28 03:10:51','2020-06-14 16:01:44',4),(9,'Postura Garudasana 2','uploads/exercicios/1.jpg','Inspire e levante os braços.','2020-05-28 03:10:51','2020-06-14 16:01:55',4),(10,'Postura Garudasana 3','uploads/exercicios/2Ardhanavasana.jpg','Expire e mova o corpo para a frente. Inspire e volte para cima, expire e dobre-se para a frente. Repita 5 vezes e mantenha a posição durante 5 respirações.','2020-05-28 03:10:51','2020-06-14 16:02:05',4),(11,'Postura de braços Gomukhasana','uploads/exercicios/navasana.jpg','Estique o braço direito para cima e faça o braço esquerdo aparecer de baixo. Dobre os cotovelos e, se conseguir, faça com que os dedos das mãos se toquem. Tente manter um cotovelo apontado para cima e outro apostado para baixo. Mantenha-se assim durante 5 a 10 respirações.','2020-05-28 03:10:51','2020-06-14 16:02:27',5),(12,'Setu banhda sarvangasana','uploads/exercicios/urdhvamukhashvanasana.jpg','Deite-se com os pés apoiados no chão, à distância das ancas. Procure uma posição neutra para a zona lombar, pressione os dois dedos grandes dos pés e inspire para levantar as ancas. Levante as ancas o mais que puder sem ter de contrair ou fazer muita força nos glúteos. Mantenha sempre a cabeça a olhar para cima. Faça força na zona interior das costas e assegure-se de que os joelhos se mantêm alinhados com os tornozelos, sem fugirem para os lados. Conserve-se nesta posição durante 5 respirações.','2020-05-28 03:10:51','2020-06-14 16:02:37',5),(13,'Ustrasana','uploads/exercicios/shvanasana.jpg','Comece agachado. Pouse as palmas das mãos no chão, à distância dos ombros, levante as ancas e puxe os joelhos a mais acima dos braços que puder.','2020-05-28 03:10:51','2020-06-14 16:02:45',5),(14,'Postura Vrksasana 1','uploads/exercicios/uttanasana.jpg','Ponha-se de pé. Mude o seu peso para o pé esquerdo e levante o pé direito do chão, colocando o calcanhar direito apoiado na coxa interior esquerda.','2020-05-28 03:10:51','2020-06-14 16:02:53',5),(15,'Postura Vrksasana 2','uploads/exercicios/tadasana.jpg','Erga os braços e junte as palmas da mão movimente o joelho esquerdo para fora mas mantenha a anca para a frente. Encontre o seu equilíbrio e mantenha-se durante 10 respirações. A seguir troque de lado e faça o mesmo processo.','2020-05-28 03:10:51','2020-06-14 16:03:01',5),(16,'Bakasana','uploads/exercicios/hastasana.jpg','Respire fundo!','2020-05-28 03:10:51','2020-06-14 16:03:20',3),(17,'Tadasana','uploads/exercicios/IMG_2217.jpg','Posicione-se de pé. Junte os dedos grandes dos pés e mantenha um espaço mínimo entre os calcanhares. Junte as mãos no centro do coração. Apoie bem os pés no tapete e sinta a alto da cabeça esticar-se em direcção ao céu. Expire para baixar os braços para junto do corpo.','2020-05-28 03:10:48','2020-06-14 16:41:50',3),(18,'Hastasana','uploads/exercicios/IMG_2215.jpg','Descontraia a parte de cima das costas e o pescoço ao mesmo tempo que inspira e estica os braços em direcção ao céu. Use as pernas para se sentir e elevar a partir dos arcos dos pés.','2020-05-28 03:10:49','2020-06-14 16:42:12',3),(19,'Uttanasana','uploads/exercicios/IMG_2213.jpg','Expire e dobre-se para a frente, deixando que o seu corpo caia em direcção à terra. Se não chegar com as mãos ao chão, dobre ligeiramente as pernas. Relaxe a base do pescoço e coloque algum peso nas almofadas dos pés.','2020-05-28 03:10:50','2020-06-14 16:42:26',3),(20,'Shvanasana','uploads/exercicios/IMG_2207.jpg','Expire, levando um pé atrás de cada vez, até ficar em posição de prancha. Com os ombros alinhados pelos pulsos, faço nos abdominais e empurre o chão para se elevar, evitando que os ombros subam mais que o resto.','2020-05-28 03:10:51','2020-06-14 16:42:44',3),(21,'Bakasana','uploads/exercicios/IMG_2202.jpg','Respire fundo!','2020-05-28 03:10:51','2020-06-14 16:42:50',7),(22,'Tadasana','uploads/exercicios/IMG_2197.jpg','Posicione-se de pé. Junte os dedos grandes dos pés e mantenha um espaço mínimo entre os calcanhares. Junte as mãos no centro do coração. Apoie bem os pés no tapete e sinta a alto da cabeça esticar-se em direcção ao céu. Expire para baixar os braços para junto do corpo.','2020-05-28 03:10:48','2020-06-14 16:43:18',7),(23,'Hastasana','uploads/exercicios/IMG_2196.jpg','Descontraia a parte de cima das costas e o pescoço ao mesmo tempo que inspira e estica os braços em direcção ao céu. Use as pernas para se sentir e elevar a partir dos arcos dos pés.','2020-05-28 03:10:49','2020-06-14 16:43:26',7),(24,'Uttanasana','uploads/exercicios/IMG_2194.jpg','Expire e dobre-se para a frente, deixando que o seu corpo caia em direcção à terra. Se não chegar com as mãos ao chão, dobre ligeiramente as pernas. Relaxe a base do pescoço e coloque algum peso nas almofadas dos pés.','2020-05-28 03:10:50','2020-06-14 16:43:33',7),(25,'Shvanasana','uploads/exercicios/IMG_2225.jpg','Expire, levando um pé atrás de cada vez, até ficar em posição de prancha. Com os ombros alinhados pelos pulsos, faço nos abdominais e empurre o chão para se elevar, evitando que os ombros subam mais que o resto.','2020-05-28 03:10:51','2020-06-14 17:03:45',7),(26,'Navasana','uploads/exercicios/IMG_2226.jpg','Sente-se de forma a que as plantas dos pés assentem no chão. Aproxime os pés o mais que puder das ancas e levante as pernas esticadas, estendendo os braços pela linha média e fazendo força com a parte interior das coxas. Mude o peso para a parte da frente das ancas, longe do cóccix e mantenha a coluna direita, puxando-a para cima. Garanta que a zona lombar não se curva!','2020-05-28 03:10:51','2020-06-14 17:03:55',2),(27,'Ardha Navasana','uploads/exercicios/IMG_2236.jpg','Agora, baixe o tronco da posição de Navasana para o de Ardha Navasana. Mantenha as omoplatas fora do chão e as pernas levantadas um pouco acima do tapete. Estenda os braços para a frente e faça força nos abdominais puxando as costelas inferiores para o centro do corpo. Expire e regresse à postura Navasana. Inspire e volte a baixar para o Ardha Navasana. Expire e regresse à Navasana. Repita 5 ou 10 vezes, ou tantas quanto conseguir, sempre com a respiração correta, sem levantar nem encurvar a zona lombar.','2020-05-28 03:10:51','2020-06-14 17:04:05',2),(28,'Postura Garudasana 1','uploads/exercicios/IMG_2240.jpg','Numa posição sentada, inspire para estender os braços para os lados. Expire e dê a si próprio um abraço, cruzando o cotovelo direito para cima do esquerdo. Depois, junte as costas das mãos ou, se conseguir, as palmas das mãos.','2020-05-28 03:10:51','2020-06-14 17:04:21',2),(29,'Postura Garudasana 2','uploads/exercicios/IMG_2246.jpg','Inspire e levante os braços.','2020-05-28 03:10:51','2020-06-14 17:04:51',2),(30,'Postura Garudasana 3','uploads/exercicios/IMG_2272.jpg','Expire e mova o corpo para a frente. Inspire e volte para cima, expire e dobre-se para a frente. Repita 5 vezes e mantenha a posição durante 5 respirações.','2020-05-28 03:10:51','2020-06-14 17:05:19',2),(31,'Postura de braços Gomukhasana','uploads/exercicios/IMG_2274.jpg','Estique o braço direito para cima e faça o braço esquerdo aparecer de baixo. Dobre os cotovelos e, se conseguir, faça com que os dedos das mãos se toquem. Tente manter um cotovelo apontado para cima e outro apostado para baixo. Mantenha-se assim durante 5 a 10 respirações.','2020-05-28 03:10:51','2020-06-14 17:05:36',1),(32,'Setu banhda sarvangasana','uploads/exercicios/IMG_2277.jpg','Deite-se com os pés apoiados no chão, à distância das ancas. Procure uma posição neutra para a zona lombar, pressione os dois dedos grandes dos pés e inspire para levantar as ancas. Levante as ancas o mais que puder sem ter de contrair ou fazer muita força nos glúteos. Mantenha sempre a cabeça a olhar para cima. Faça força na zona interior das costas e assegure-se de que os joelhos se mantêm alinhados com os tornozelos, sem fugirem para os lados. Conserve-se nesta posição durante 5 respirações.','2020-05-28 03:10:51','2020-06-14 17:05:54',1),(33,'Ustrasana','uploads/exercicios/IMG_2290.jpg','Comece agachado. Pouse as palmas das mãos no chão, à distância dos ombros, levante as ancas e puxe os joelhos a mais acima dos braços que puder.','2020-05-28 03:10:51','2020-06-14 17:06:13',1),(34,'Postura Vrksasana 1','uploads/exercicios/IMG_2295.jpg','Ponha-se de pé. Mude o seu peso para o pé esquerdo e levante o pé direito do chão, colocando o calcanhar direito apoiado na coxa interior esquerda.','2020-05-28 03:10:51','2020-06-14 17:06:43',1),(35,'Postura Vrksasana 2','uploads/exercicios/tadasana.jpg','Erga os braços e junte as palmas da mão movimente o joelho esquerdo para fora mas mantenha a anca para a frente. Encontre o seu equilíbrio e mantenha-se durante 10 respirações. A seguir troque de lado e faça o mesmo processo.','2020-05-28 03:10:51','2020-06-14 17:09:38',1);
/*!40000 ALTER TABLE `exercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planos`
--

DROP TABLE IF EXISTS `planos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planos`
--

LOCK TABLES `planos` WRITE;
/*!40000 ALTER TABLE `planos` DISABLE KEYS */;
INSERT INTO `planos` VALUES (1,'Iniciante','uploads/planos/iniciante.png','Iniciante • 9 Mins • 23 calorias','2020-05-28 03:57:12','2020-06-14 16:33:23'),(2,'Intermedio','uploads/planos/intermedio.png','Intermedio • 9 Mins • 22 calorias','2020-05-28 03:57:14','2020-06-14 16:33:38'),(3,'Avançado','uploads/planos/avancado.png','Avançado • 10 Mins • 27 calorias','2020-05-28 03:57:15','2020-06-14 16:33:50'),(4,'Noite Calma','uploads/planos/noite.png','Noite Calma • 8 Mins • 19 calorias','2020-05-28 03:57:17','2020-06-14 16:34:02'),(5,'Manhã Feliz','uploads/planos/manha.png','Manhã Feliz • 10 Mins • 21 calorias','2020-06-09 20:38:32','2020-06-14 16:34:16'),(6,'Suadação ao Sol','uploads/planos/saudacao.png','Saudação ao Sol • 9 Mins • 22 calorias','2020-06-09 20:38:32','2020-06-14 16:34:26'),(7,'Queimar Gorduras','uploads/planos/queimar.png','Queimar Gorduras • 8 Mins • 23 calorias','2020-06-09 20:38:32','2020-06-14 16:35:09');
/*!40000 ALTER TABLE `planos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20200522223022-create-users.js'),('20200522224800-create-artigo.js'),('20200522230326-create-plano.js'),('20200522230429-create-exercicio.js'),('20200522231622-create-atividade.js'),('20200522232038-create-exercicio.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Utilizadores`
--

DROP TABLE IF EXISTS `Utilizadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Utilizadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Utilizadores`
--

LOCK TABLES `Utilizadores` WRITE;
/*!40000 ALTER TABLE `Utilizadores` DISABLE KEYS */;
INSERT INTO `Utilizadores` VALUES (1,'Rute','rolarute@gmail.com','12345','2020-06-09 01:36:09','2020-06-15 03:38:42'),(2,'António','antonio@gmail.com','12345','2020-06-10 20:08:05','2020-06-11 01:14:08'),(3,'Rui','rui@gmail.com','2020','2020-06-11 12:05:54','2020-06-11 12:05:54'),(4,'Rui','rui@gmail.com','2020','2020-06-11 12:06:45','2020-06-11 12:06:45'),(5,NULL,NULL,NULL,'2020-06-13 02:07:42','2020-06-13 02:07:42'),(6,'maria','m@souumemail.pt','ola','2020-06-13 02:10:27','2020-06-13 02:10:27'),(7,'maria','m@souumemail.pt','ola','2020-06-13 02:10:59','2020-06-13 02:10:59'),(8,'Rita','rita@gmail.com','ola1','2020-06-13 04:32:19','2020-06-13 04:32:19'),(9,'Sara','sara@email.com','co1','2020-06-13 04:37:48','2020-06-13 04:37:48'),(10,'ana','ana@gmail.com','123','2020-06-13 20:43:07','2020-06-13 20:43:07'),(11,'luis','luis@gmail.com','12345','2020-06-13 20:45:45','2020-06-14 00:41:30'),(12,'luis','luis@gmail.com','12345','2020-06-13 20:48:37','2020-06-14 00:41:30'),(13,'a','a@gmail.com','123','2020-06-14 00:43:34','2020-06-14 00:43:34'),(14,'Filipe','filipe@gmail.com','123','2020-06-14 01:30:23','2020-06-14 01:30:23'),(15,'ola','ola@gmail.com','11111111111','2020-06-14 01:32:35','2020-06-14 01:32:35'),(16,'tiago','tiago@gmail.com','1234','2020-06-15 03:38:15','2020-06-15 03:38:15'),(17,'tiago','tiago@gmail.com','1234','2020-06-15 03:38:15','2020-06-15 03:38:15'),(18,'tiago','tiago@gmail.com','1234','2020-06-15 03:38:15','2020-06-15 03:38:15'),(19,'tiago','tiago@gmail.com','1234','2020-06-15 03:38:16','2020-06-15 03:38:16');
/*!40000 ALTER TABLE `Utilizadores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-15  5:55:09
