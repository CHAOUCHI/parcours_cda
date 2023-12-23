<?php
class Header{
    function __construct(string $name,string $value){
        $this->name = $name;
        $this->value = $value;
    }
}
class ResponseBuilder{
    private int $statusCode;
    private string $reason;
    private array $headers;
    private string $body;
    public function setStatusCode(int $code){
        if($code >=100 && $code <600){
            $this->statusCode = $code;
        }
        return $this;
    }
    public function setReason(string $reason){
        $this->reason = $reason;
        return $this;
    }
    public function addHeader(string $name,string $value){
        $headers[] = new Header($name,$value);
        return $this;
    }
    public function setBody(string $body){
        $this->body = $body;
        return $this;
    }
}
$uri = $_SERVER["REQUEST_URI"];

switch (true) {
    case preg_match('/^\/api\/pokemon\/(\d+)$/',$uri):
        $id = end(explode("/",$uri));
        http_response_code(200);
        header("Content-type: application/json");
        print(sprintf('{"name":"Massinissa","id":%d}',$id));
        break;
        
        default:
        http_response_code(404);
        header("Content-type: application/json");
        print("Not found");
        break;
}