<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Helpers\Helper;

class PreviewController extends Controller
{
    /**
     * Load a preview website
     *
     * @param  int  $previewID
     * @return Response
     */
    public function loadPreview($id, $page = "home")
    {
        // Set base file paths for views
        $assetsPath = "/assets/previews/maven";
        $urlPath = "/previews/".$id;
        $viewPath = "previews.maven";
        $viewName = "previews.maven.".(isset($page) ? $page : "home");

        // Load seed
        $defaultSeedPath = "/assets/previews/maven/seeds/__default.json";
        $seedPath = "/assets/previews/maven/seeds/".$id.".json";
        $data = (Helper::fetchJSON($seedPath) ? Helper::fetchJSON($seedPath) : Helper::fetchJSON($defaultSeedPath));
        
        return view($viewName,
            [
                "assetsPath" => $assetsPath,
                "urlPath" => $urlPath,
                "viewPath" => $viewPath,
                "data" => $data
            ]);
    }
}
