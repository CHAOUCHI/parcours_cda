<?php


class CategoryController{
    public function view(string $method,array $params = []){
        try {
            call_user_func([$this,$method],$params);
        } catch (TypeError $e) {
            // Default vue
            echo get_class($this);
            http_response_code(404);
            require_once(__DIR__."/../vue/404.php");
        }
    }

    /**
     * Show a category by it's id.
     * Route : /category/show/:id
     * 
     */
    private function show($params = []){
        if(isset($params[0])){
            $id = $params[0];
        }
        require_once(__DIR__."/../vue/single-category.php");
    }

}