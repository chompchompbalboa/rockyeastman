<?php

namespace App\Helpers;

class Maven
{
    /*
    * Fetch default seed
    *
    * Update the default values in __default.json to customized values using
    * the business' information
    */
    public static function replaceDefaultValues($business, $json)
    {
        // Business Name
        $json->head->title = "Preview - ".$business->name;
        $json->blocks->footer->bigText = $business->name;
        // Some businesses don't have their street address stored in the db.
        // Testing for an empty string prevents an error from being thrown. It's hacky. Fix it when you've got time.
        if($business->street !== "") {
          // Street Address
          $fullAddress = $business->street." ".$business->city." ".$business->state." ".$business->zip;
          $json->blocks->footer->contact->visit = $fullAddress;
          $json->pages->contact->information->visit[0] = $business->street;
          $json->pages->contact->information->visit[1] = $business->city." ".$business->state." ".$business->zip;
          // Map LatLng
          $geocode = app('geocoder')->geocode($fullAddress)->get()->first();
          $json->pages->contact->information->latLng = $geocode->getCoordinates()->getLatitude().",".$geocode->getCoordinates()->getLongitude();
          // Home Splash
          $json->pages->home->splash->text[1] = str_replace(",", "", str_replace("Los Angeles", $business->city, $json->pages->home->splash->text[1]));
        }
        // Phone
        $json->blocks->nav->call = $business->phone;
        $json->blocks->footer->contact->call = $business->phone;
        $json->pages->contact->information->call[0] = $business->phone;
        // Email
        $json->blocks->footer->contact->email = $business->email;
        $json->pages->contact->information->email = $business->email;
        // Return
        return $json;
    }
}
