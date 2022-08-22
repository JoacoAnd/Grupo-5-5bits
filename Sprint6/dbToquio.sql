-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.17-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para toquio
CREATE DATABASE IF NOT EXISTS `toquio` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `toquio`;

-- Volcando estructura para tabla toquio.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.categorias: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` (`id_categoria`, `categoria`) VALUES
	(1, 'mujeres'),
	(2, 'hombres'),
	(3, 'infantes'),
	(4, 'unisex');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;

-- Volcando estructura para tabla toquio.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL DEFAULT '0',
  `descripcion` text DEFAULT NULL,
  `precio` decimal(20,6) NOT NULL,
  `imagen` varchar(225) NOT NULL DEFAULT '0',
  `fkTalle` int(10) unsigned NOT NULL DEFAULT 0,
  `fkcategoria` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_producto`),
  KEY `FKcategoria` (`fkcategoria`),
  KEY `FKtalle` (`fkTalle`),
  CONSTRAINT `FKcategoria` FOREIGN KEY (`fkcategoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `FKtalle` FOREIGN KEY (`fkTalle`) REFERENCES `talles` (`id_talle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.productos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla toquio.talles
CREATE TABLE IF NOT EXISTS `talles` (
  `id_talle` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `talle` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_talle`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.talles: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` (`id_talle`, `talle`) VALUES
	(1, 'S'),
	(2, 'M'),
	(3, 'L'),
	(4, 'XL'),
	(5, 'XXL');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;

-- Volcando estructura para tabla toquio.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuarios` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userNombre` varchar(255) NOT NULL DEFAULT '0',
  `userApellido` varchar(255) NOT NULL DEFAULT '0',
  `userEmail` varchar(255) NOT NULL DEFAULT '0',
  `userPassword` varchar(255) NOT NULL DEFAULT '0',
  `userAvatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.usuarios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
