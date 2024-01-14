# Create a lamp system on Docker
## Create container's own network
sudo docker network create lamp-net

## Running php and apache
Running php and apache and mapping the PWD/lamp directory to the /var/www/html directory.
sudo docker run -d --name lamp-php --network=lamp-net -p 80:80 -mount type=bind,source="$PWD"/lamp,target=/var/www/html php:8.2-apache
OR
sudo docker run -d --name lamp-php --network=lamp-net -p 80:80 -v "$PWD"/lamp:/var/www/html php:8.2-apache

### Install php extension for mysql
sudo docker exec lamp-php docker-php-ext-install pdo
sudo docker exec lamp-php docker-php-ext-install pdo_mysql
sudo docker exec lamp-php docker-php-ext-install mysqli

## Running mysql
sudo docker run -d --name lamp-mysql --network=lamp-net -e MYSQL_ROOT_PASSWORD=root mysql
## Running PhpMyAdmin
sudo docker run -d --name lamp-pma --network=lamp-net -e PMA_HOST=lamp-mysql phpmyadmin


# Start the lamp system if it is shutdown
docker start lamp-php
docker start lamp-mysql
docker start lamp-pma