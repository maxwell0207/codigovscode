CREATE TABLE `adsmaxwell`.`clientes` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(255) NOT NULL,
  `Sobrenome` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Idade` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;
