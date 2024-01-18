<?php

class HomeController{
    public function view(string $method,array $params = []){
        try {
            call_user_func([$this,$method],$params);
        } catch (Error $e) {
            call_user_func([$this,"home"],$params);
        }
    }
    
    public function home($params = []){
        require_once(__DIR__."/../views/home.php");
    }
}