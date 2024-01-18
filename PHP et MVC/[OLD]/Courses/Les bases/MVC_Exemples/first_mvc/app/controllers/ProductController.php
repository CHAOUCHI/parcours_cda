<?php

require_once(__DIR__."/../models/ProductModel.php");

class ProductController{
    public function view(string $method,array $params = []){
        // Je place la fonction call_user_func dans un try catch au cas une méthode inconnu est tapée dans l'URL
        try {
            call_user_func([$this,$method],$params);
        } catch (Error $e) {
        }
    }
    public function show(array $params = []){
        // Préparation de la variable $id à afficher dans la vue
        $id = $params[0];

        $productModel = new ProductModel();
        $product = $productModel->get($id);

        // Affichage de la vue
        require_once(__DIR__."/../views/single-product.php");
    }
}