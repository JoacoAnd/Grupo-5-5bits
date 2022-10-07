-- --------------------------------------------------------
-- Host:                         127.16.5.10
-- Versión del servidor:         10.4.24-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
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
DELETE FROM `categorias`;
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
  `precio` decimal(20,2) NOT NULL,
  `imagen` varchar(225) NOT NULL DEFAULT '0',
  `fk_id_categoria` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_producto`),
  KEY `FKcategoria` (`fk_id_categoria`) USING BTREE,
  CONSTRAINT `FKcategoria` FOREIGN KEY (`fk_id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.productos: ~0 rows (aproximadamente)
DELETE FROM `productos`;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `precio`, `imagen`, `fk_id_categoria`) VALUES
	(1, 'Pantalón Hindú', 'Pantalón de la India', 2500.00, 'img-1657741175182.jpg', 1),
	(2, 'Pantalón cortito', 'Pantalón para el verano', 500.00, 'img-1657741175182.jpg', 3),
	(3, 'Pantalón cromado', 'Pantalón de colores', 1000.00, 'img-1657741175182.jpg', 2),
	(4, 'Remera básica', 'Combian con todo', 750.00, 'img-1657741175182.jpg', 4),
	(5, 'Remera plateada', 'Remera para ir de fiesta', 10000.00, 'img-1657741175182.jpg', 1),
	(6, 'Mocasines', 'Mocasines', 2000.00, 'img-1657741175182.jpg', 2),
	(7, 'Medias 3/4', 'Medias para usar con los mocasines', 300.00, 'img-1657741175182.jpg', 2),
	(8, 'Cinturón', 'Para que no se caiga el pantalón', 1500.00, 'img-1657741175182.jpg', 2),
	(9, 'Zapatillas', 'Más cómodas que los mocasines', 7800.00, 'img-1657741175182.jpg', 1),
	(10, 'Pulsera Griega', 'La pulsera de Zorba', 2000.00, 'img-1657741175182.jpg', 4);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla toquio.producto_talle
CREATE TABLE IF NOT EXISTS `producto_talle` (
  `id_producto_talle` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_id_producto` int(11) unsigned NOT NULL,
  `fk_id_talle` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_producto_talle`) USING BTREE,
  KEY `fkProducto` (`fk_id_producto`) USING BTREE,
  KEY `fk_palle` (`fk_id_talle`),
  CONSTRAINT `fk_palle` FOREIGN KEY (`fk_id_talle`) REFERENCES `talles` (`id_talle`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto` FOREIGN KEY (`fk_id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.producto_talle: ~0 rows (aproximadamente)
DELETE FROM `producto_talle`;
/*!40000 ALTER TABLE `producto_talle` DISABLE KEYS */;
INSERT INTO `producto_talle` (`id_producto_talle`, `fk_id_producto`, `fk_id_talle`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 4),
	(4, 2, 2),
	(5, 2, 3),
	(6, 2, 4),
	(7, 3, 2),
	(8, 3, 3),
	(9, 3, 1),
	(10, 4, 5),
	(11, 4, 4),
	(12, 5, 1),
	(13, 5, 3),
	(14, 5, 5),
	(15, 6, 4),
	(16, 6, 2),
	(17, 6, 3),
	(18, 6, 1),
	(19, 7, 5),
	(20, 7, 4),
	(21, 7, 1),
	(22, 8, 3),
	(23, 8, 5),
	(24, 9, 1),
	(25, 9, 5),
	(26, 9, 4),
	(27, 10, 1),
	(28, 10, 2),
	(29, 10, 3),
	(30, 10, 4),
	(31, 10, 5);
/*!40000 ALTER TABLE `producto_talle` ENABLE KEYS */;

-- Volcando estructura para tabla toquio.talles
CREATE TABLE IF NOT EXISTS `talles` (
  `id_talle` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `talle` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_talle`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.talles: ~5 rows (aproximadamente)
DELETE FROM `talles`;
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
  `id_usuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userNombre` varchar(255) NOT NULL DEFAULT '0',
  `userApellido` varchar(255) NOT NULL DEFAULT '0',
  `userEmail` varchar(255) NOT NULL DEFAULT '0',
  `userPassword` varchar(255) NOT NULL DEFAULT '0',
  `userAvatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `usuarios` ADD `userRol`
VARCHAR(5) NULL DEFAULT 'user';

-- Volcando datos para la tabla toquio.usuarios: ~0 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
