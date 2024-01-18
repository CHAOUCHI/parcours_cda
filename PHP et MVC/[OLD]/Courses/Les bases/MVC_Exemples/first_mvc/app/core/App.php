<?php

require_once(__DIR__."/Router.php");

const ROOT_APP_PATH = "first_mvc";

class App{
    public static function start(){
        // Récupère l'URI 
        // ex : "/product/show/3" dans "/first_mvc/product/show/3"
        $uri = str_replace(ROOT_APP_PATH,"",$_SERVER["REQUEST_URI"]);

        // Récupère les sting entre les slash /
        // product/show/3
        preg_match_all('#/([a-zA-Z0-9-_]+)#',$uri,$matches);
        $groupes = $matches[1];

        // Récupère le nom du contrôleur => "product" 
        // ou une chaine vide si il n'existe pas
        $controllerName = isset($groupes[0]) ? $groupes[0] : "";
        
        // Récupère le nom de la méthode => "show" 
        // ou une chaine vide si il n'existe pas
        $method = isset($groupes[1]) ? $groupes[1] : "";

        // Récupère tout les paramètres dans une array
        // $params => [3]
        $params = array_splice($groupes,2);

        $controller = Router::getController($controllerName);
        $controller->view($method,$params);
    }
}