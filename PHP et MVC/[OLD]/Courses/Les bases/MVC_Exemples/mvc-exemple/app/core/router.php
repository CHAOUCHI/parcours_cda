<?php
/**
 * LoadController
 */
require_once(__DIR__."/../controller/ProductController.php");
require_once(__DIR__."/../controller/HomeController.php");
require_once(__DIR__."/../controller/CategoryController.php");
require_once(__DIR__."/../controller/CartController.php");
require_once(__DIR__."/../controller/NotFoundController.php");

class Router{

    public static function getController(string $controllerName){
        switch ($controllerName) {
            case 'product':
                return new ProductController();
                break;
            case 'category':
                return new CategoryController();
                break; 

            case 'cart':
                return new CartController();
                break;

            case 'home':
            case '':
                return new HomeController();
                break;
            default:
                // 404 Not Found
                return new NotFoundController();
                break;
        }
    }
}