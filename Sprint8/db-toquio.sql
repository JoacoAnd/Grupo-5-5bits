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
  `precio` decimal(20,2) NOT NULL,
  `imagen` varchar(225) NOT NULL DEFAULT '0',
  `fk_id_categoria` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_producto`),
  KEY `FKcategoria` (`fk_id_categoria`) USING BTREE,
  CONSTRAINT `FKcategoria` FOREIGN KEY (`fk_id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.productos: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `precio`, `imagen`, `fk_id_categoria`) VALUES
	(1, 'Jean ', 'Jean estilo roto', 2500.00, 'camisa hombre.jpg', 2),
	(2, 'Campera jean', 'Campera de jean para niños y niñas', 500.00, 'camisa infante.jpg', 3),
	(3, 'Buzo ', 'Buzo infantes', 1000.00, 'buzo infante.jpg', 3),
	(4, 'Buzo amplio', 'Buzo unisex estilo amplio', 750.00, 'buzo hombre.jpg', 4),
	(5, 'Campera', 'Campera talles pequeños', 10000.00, 'campera infante.jpg', 3),
	(6, 'Conjunto mujer', 'Conjunto de camisa y pantalon blanco', 2000.00, 'conjunto mujer 2.jpg', 1),
	(7, 'Cobjunto verde', 'Conjunto de mujer verde, top y pantalon amplio', 30000.00, 'conjunto mujer.jpg', 1),
	(8, 'Remera blanca ', 'Remera blanca con estampa en el pecho. Amplia', 1500.00, 'remera hombre.jpg', 2),
	(9, 'Zapato de vestir', 'Más cómodas que los mocasines', 7800.00, 'img-1657741175182.jpg', 2),
	(10, 'Traje Azul', 'Traje completo para hombre', 2000.00, 'traje hombre.jpg', 2),
	(14, 'Conjunto blanco', 'Conjunto top y pantalon de mujer blanco', 5000.00, 'top mujer.jpg', 1),
	(15, 'Vestido Amarillo', 'Vestido mujer, para el verano y primavera', 8477.00, 'vestido mujer.jpg', 1);
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

-- Volcando datos para la tabla toquio.producto_talle: ~31 rows (aproximadamente)
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla toquio.usuarios: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id_usuario`, `userNombre`, `userApellido`, `userEmail`, `userPassword`, `userAvatar`) VALUES
	(1, 'Juan', 'Perez', 'juan.perez@hotmail.com', '4d186321c1a7f0f354b297e8914ab240', 'generic_avatar.jpg'),
	(2, 'María', 'Doroz', 'mdoroz_1@gmail.com', 'cf1d9217ebc110bcf479dd8b95ece22a', 'generic_avatar.jpg'),
	(3, 'Pedro José', 'Fernández', 'pfer@gmail.com', '06fb2658f534891b64428d8dcc028738', 'generic_avatar.jpg'),
	(4, 'Carlos Alberto', 'Jerez', 'jerez_2@hotmail.com', 'b4dc3a2172bfbec00385e378f4eecd56', 'generic_avatar.jpg'),
	(5, 'Federico', 'Maradona', 'el_diego@gmail.com', 'ee6d605f326b5f58a4fa45d50c1e11e8', 'generic_avatar.jpg'),
	(6, 'Ana', 'Johansen', 'ana_j@yahoo.com', 'f3242c3db7733c8aff401d5ce5d86e22', 'generic_avatar.jpg'),
	(7, 'Teresa', 'Beretanie', 'teresa@hotmail.com', 'c46fb06b88af12d51bca8b3e8d68b46b', 'generic_avatar.jpg'),
	(8, 'Demetria Juana', 'Barthen', 'demedos@gmail.com', '58414aa2076dd4135564f77e112e5a24', 'generic_avatar.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
