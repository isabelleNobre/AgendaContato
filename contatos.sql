-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Máquina: localhost
-- Data de Criação: 09-Set-2019 às 16:32
-- Versão do servidor: 5.6.13
-- versão do PHP: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de Dados: `contatos`
--
-- CREATE DATABASE IF NOT EXISTS `contatos` DEFAULT CHARACTER SET utf32 COLLATE utf32_unicode_ci;
-- USE `contatos`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

CREATE TABLE IF NOT EXISTS `contato` (
  `idContato` int(11) NOT NULL AUTO_INCREMENT,
  `nomeContato` varchar(150) COLLATE utf32_unicode_ci NOT NULL,
  `enderecoContato` varchar(200) COLLATE utf32_unicode_ci DEFAULT NULL,
  `telefoneContato` varchar(15) COLLATE utf32_unicode_ci DEFAULT NULL,
  `celularContato` varchar(16) COLLATE utf32_unicode_ci DEFAULT NULL,
  `emailContato` varchar(255) COLLATE utf32_unicode_ci DEFAULT NULL,
  `usuario_idUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idContato`),
  KEY `fk_contato_usuario_idx` (`usuario_idUsuario`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`idContato`, `nomeContato`, `enderecoContato`, `telefoneContato`, `celularContato`, `emailContato`, `usuario_idUsuario`) VALUES
(1, 'Teste', 'Teste, 1', '', '(14) 99999-2222', 'teste@teste.com', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(150) COLLATE utf32_unicode_ci NOT NULL,
  `loginUsuario` varchar(16) COLLATE utf32_unicode_ci NOT NULL,
  `senhaUsuario` varchar(32) COLLATE utf32_unicode_ci NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci AUTO_INCREMENT=6 ;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nomeUsuario`, `loginUsuario`, `senhaUsuario`) VALUES
(1, 'Administrador', 'admin', 'admin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
