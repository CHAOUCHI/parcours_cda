<?php

require_once(__DIR__."/init.php");

class App{

    public static function start(){
        // GET URI
        $uri = str_replace(ROOT_APP_PATH,"",$_SERVER["REQUEST_URI"]);

        // GET text between /
        // ex : product/show/3/6
        // => product
        // => show
        // => 3
        // => 6
        // store it inside $matches[1]
        preg_match_all('#/([a-zA-Z0-9-_]+)#',$uri,$matches);
        dump($matches);
        $groupes = $matches[1];

        // get Controller Name
        $controllerName = isset($groupes[0]) ? $groupes[0] : "";
        // get Method Name
        $method = isset($groupes[1]) ? $groupes[1] : "";
        // get Params array
        $params = array_splice($groupes,2);

        $controller = Router::getController($controllerName);
        $controller->view($method,$params);
    }
}