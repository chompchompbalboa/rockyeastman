<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Helpers\Helper;
use App\Models\Business;
use App\Models\Seed;

class PreviewController extends Controller
{
    /**
     * Load a preview website
     *
     * @param  int  $previewID
     * @return Response
     */
    public function loadPreview($slug, $page = "home")
    {
        // Set base file paths for views
        $assetsPath = "/assets/previews/maven";
        $urlPath = "/preview/".$slug;
        $viewPath = "previews.maven";
        $viewName = "previews.maven.".(isset($page) ? $page : "home");

        // Load seed
        $data = Helper::fetchJSON("/assets/previews/maven/seeds/__default.json");
        $business = Business::where('slug', $slug)->first();
        if(!is_null($business)) {
          $seed = Seed::where('business_id', $business->id)->first();
          if(!is_null($seed)) {
            $data = json_decode($seed->json);
          }
        }
        
        return view($viewName,
            [
                "assetsPath" => $assetsPath,
                "urlPath" => $urlPath,
                "viewPath" => $viewPath,
                "data" => $data
            ]);
    }
}
