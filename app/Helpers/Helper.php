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

    /*
    * Build Slug
    *
    * Build a slug from a string. Essentially, all this does is replace the
    * spaces in a string with URL friendly dashes and makes every character
    * lower case
    */
    public static function buildSlug($string)
    {
        $slug = strtolower(str_replace(" ", "-", $string));
        return $slug;
    }
}
