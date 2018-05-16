<?php

namespace App\Helpers;

class Helper
{
    /*
    * Fetch JSON
    *
    * Get resources from a JSON file and return it as an array
    */
    public static function fetchJSON($location)
    {
        $contents= @file_get_contents(getcwd().$location);
        if($contents) {
            $json = json_decode($contents);
        } else {
            $json = false;
        }

        return $json;
    }
}
