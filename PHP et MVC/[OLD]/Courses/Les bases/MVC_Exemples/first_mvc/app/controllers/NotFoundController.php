<?php

class NotFoundController{
    public function view(string $method,array $params = []){
        try {
            call_user_func([$this,$method],$params);
        } catch (Error $e) {
            call_user_func([$this,"notfound"],$params);
            // method par default
        }
    }

    // Remplacez methodName par le nom d'une method
    public function notfound($params = []){
        // Remplacez vue-name par le nom de la vue
        require_once(__DIR__."/../views/404.php");
    }
}