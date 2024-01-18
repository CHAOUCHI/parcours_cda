<?php
namespace Massinissa;
require_once __DIR__.'/vendor/autoload.php';
use Symfony\Component\HttpFoundation\Request;



$request = Request::createFromGlobals();


echo "<pre>";
print_r($request->toArray());
echo "</pre>";
?>