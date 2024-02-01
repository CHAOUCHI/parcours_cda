<?php

require_once(__DIR__."/Router.php");

const ROOT_APP_PATH = "sample-mvc/";

class App{
    public static function start(){
        /**
         * Récupère l'uri et supprime le chemin vers le site,
         *  si le site n'est pas à la racine du serveur apache.
         */
        $uri = str_replace(ROOT_APP_PATH,"",$_SERVER["REQUEST_URI"]);

        /**
         * Récupère un tableau des élements de l'uri en séparant
         * la string via le caractère '/'
         */
        $uri_elements = explode("/",$uri);
        // Pour l'uri /product/show/3
        // $uri_elements  => ["","product","show","3"]

        $controllerName = isset($uri_elements[1])?$uri_elements[1]:"";            // "show"
        $methodName = isset($uri_elements[2])?$uri_elements[2]:"";              // "show"
        $params = array_splice($uri_elements,3);

        $controller = Router::getController($controllerName);
        $controller->view($methodName,$params);
    }
}