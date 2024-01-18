<?php

require_once(__DIR__."/../model/ProductModel.php");

class ProductController{

    private $productModel;
    function __construct()
    {
        $this->productModel = new ProductModel();
    }

    public function view(string $method,array $params = []){
        try {
            call_user_func([$this,$method],$params);
        } catch (TypeError $e) {
            echo get_class($this);
            http_response_code(404);
            require_once(__DIR__."/../vue/404.php");
        }
    }

    // 
    /**
     * Show one product
     * route : /product/show/:id
     * params[0] : id
     */
    private function show($params = []){
        $id = $params[0];
        $product = $this->productModel->get($id);
        require_once(__DIR__."/../vue/single-product.php");
    }
    private function all($params){
        echo "All products";
        $products = $this->productModel->getAll();
    }
}