<?php

/**
 * Le controller de la page d'accueil ne renvoi pas sur 404.php par défaut mais sur la vue home.php
 */
class HomeController{

    public function view(string $method,array $params = []){
        try {
            call_user_func([$this,$method],$params);
        } catch (TypeError $e) {
            // Default vue
            $this->home();
        }
    }

    private function home($params = []){
        require_once(__DIR__."/../vue/home.php");
    }
}