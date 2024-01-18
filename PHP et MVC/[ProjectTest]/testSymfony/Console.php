<?php
namespace Massinissa;


class Console{
    private static array $console = [];
    public static function log(string $text){
        self::$console[] = $text;
    }
    public static function getLogs(){
        return self::$console;
    }
}
