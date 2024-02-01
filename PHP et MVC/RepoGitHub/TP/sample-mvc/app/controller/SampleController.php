<?php
// ------------------------------------------CE FICHIER NE COMPILE PAS-----------------------------------------

// Remplacez Sample par le nom de votre route
class SampleController{
    public function view(string $method, array $params = []){
        try {
            call_user_func([$this,$method],$params);
        } catch (Error $e) {
            // Si la méthode n'existe pas erreur 404.
            require_once(__DIR__."/../view/404.php");   
        }
    }
    
    // pour la route /sample/newroute/id
    public function newroute($params = []){
        require_once(__DIR__."/../model/SampleModel.php");
        $sampleModel = new SampleModel();
        
        $id = $params[0];
        require_once(__DIR__."/../view/sample.php");
    }


}