<?php
$uri = $_SERVER["REQUEST_URI"];

$routes = [
    "/api/pokemon/:id" => '/^\/api\/pokemon\/(\d+)$/'
];

switch (true) {
    case preg_match($routes["/api/pokemon/:id"],$uri):
        $id = end(explode("/",$uri));   // get last elem of split string $uri
        http_response_code(200);        // Set status code to 200
        header("Content-type: application/json");
        echo sprintf('{"name":"Massinissa","id":%d}',$id);
        break;
        
        default:
        http_response_code(404);
        header("Content-type: application/json");
        echo '{"message" : "Not found"}';
        break;
}