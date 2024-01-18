<?php

/**
 * Constants
 */
const ROOT_APP_PATH = "/mvc-exemple";


/**
 * Load Controllers
 */

require_once(__DIR__."/router.php");


 /**
  * Utils functions
  */
  function dump($var){
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
  }