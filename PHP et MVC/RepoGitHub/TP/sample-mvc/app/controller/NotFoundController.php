<?php

class NotFoundController{
    public function view(string $method, array $params = []){
        try {
            call_user_func([$this,$method],$params);
        } catch (Error $e) {
            call_user_func([$this,"notfound"],$params);
        }
    }

    public function notfound($params = []){
        require_once(__DIR__."/../view/404.php");
    }
}