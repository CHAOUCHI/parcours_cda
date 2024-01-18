
<?php

class NotFoundController{
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
}