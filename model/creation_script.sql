CREATE TABLE `adsmaxwell`.`produtos` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(255) NOT NULL,
  `Descrição` VARCHAR(255) NOT NULL,
  `Preço` DECIMAL(10, 2) NOT NULL,
  `Data_Atualizada` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;
