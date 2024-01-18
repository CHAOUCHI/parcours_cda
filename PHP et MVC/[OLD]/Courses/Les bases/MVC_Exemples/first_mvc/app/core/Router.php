<?php

require_once(__DIR__."/../controllers/ProductController.php");
require_once(__DIR__."/../controllers/HomeController.php");
require_once(__DIR__."/../controllers/NotFoundController.php");

class Router{
    public static function getController(string $controllerName){
        switch ($controllerName) {
            case 'product':
                return new ProductController();
                break;

            case '':
                return new HomeController();
                break;
            default:
                // Si aucune route de match
                return new NotFoundController();
                break;
        }
    }
}