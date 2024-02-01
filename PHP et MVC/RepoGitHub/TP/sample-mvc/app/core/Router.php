<?php

require_once(__DIR__."/../controller/HomeController.php");
require_once(__DIR__."/../controller/NotFoundController.php");
require_once(__DIR__."/../controller/ExempleController.php");

class Router{
    public static function getController(string $controllerName){
        switch ($controllerName){

            case '':
                return new HomeController();
                break;
            case "exemple":
                return new ExempleController();
                break;
            //case "newRoute":
            //  return new NewController();
            //  break;
            default:
            return new NotFoundController();
                break;
        }
    }
}