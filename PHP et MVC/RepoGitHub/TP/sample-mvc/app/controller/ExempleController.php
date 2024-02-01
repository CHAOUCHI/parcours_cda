<?php
class ExempleController{
    public function view(string $method, array $params = []){
        try {
            call_user_func([$this,$method],$params);
        } catch (Error $e) {
            // Si la méthode n'existe pas erreur 404.
            require_once(__DIR__."/../view/404.php");   
        }
    }
    
    // pour la route /exemple/hello
    public function hello($params = []){
        require_once(__DIR__."/../view/hello.php");
    }


}