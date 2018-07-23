<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Helper;

use App\Models\Preview;

class PreviewController extends Controller
{

    /**
     * Load the data for a preview website
     *
     * @param  int  $previewID
     * @return Response
     */
    public function getPreviewData(Request $request) {    
      $requestData = $request->all();
      $preview = Preview::where('slug', $requestData['slug'])->first();
      if(is_null($preview)) {
        return [
          "seed" => Helper::fetchJSON("/assets/previews/criminal-defense/seeds/criminal-defense.json")
        ];
      }
      return [
        "seed" => json_decode($preview->seed)
      ];
    }
}
