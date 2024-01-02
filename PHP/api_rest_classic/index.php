<?php
// Un programme qui reçoit des requete HTTP
// Et renvoi des réponse HTTP
// Une réquete contient tout ce qu'il faut pour recevoir une réponse
// En regle générale une meme requete renvoi toujours la meme réponse ( sauf dans le cas d'un changement sur une BDD SQL par exemple)

// METHOD URL HTTP/2
// Header
//
//Body

// Comment récupérer :
// LA méthode ?
// $method = $_SERVER["REQUEST_METHOD"];

// // L'URI
// $uri = $_SERVER["REQUEST_URI"];

// // Les headers ?
// $headers = getallheaders();

// $headers["Content-Type"];
// $headers["Host"];
// $headers["Massinissa"];

// // Le body ?
// $body = file_get_contents("php://input");

// $users = json_decode($body);
// $users[0]->name;       // "Massinissa"

class HTTPRequest{
    public readonly string $method;
    public readonly string $uri;
    public readonly array $headers;
    public readonly string $raw_body;

    function __construct(){
        $this->method = $_SERVER["REQUEST_METHOD"];
        $this->uri = $_SERVER["REQUEST_URI"];
        $this->headers = getallheaders();
        $this->raw_body = file_get_contents("php://input");
    }

    public function json(){
        return json_decode($this->raw_body);
    }   
}
echo "<pre><br>";

class My_Request extends HTTPRequest{
    public function json(){
        if($this->headers["Content-Type"] == "application/json")
            return json_decode($this->raw_body);
        else 
            return null;
    }
}

$request = new My_Request();
print_r($request);
echo $request->uri;








echo "<br></pre>";


