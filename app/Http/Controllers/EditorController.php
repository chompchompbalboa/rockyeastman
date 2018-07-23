<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Helper;

use App\Models\Preview;

class EditorController extends Controller
{
  /**
   * Get the initial preview data
   */
  public function getInitialData(Request $request) {
    $requestData = $request->all();
    $preview = Preview::where('slug', $requestData['slug'])->first();
    if(is_null($preview)) {
      $preview = new Preview;
      $preview->slug = "default-".rand(0,5000);
      $preview->seed = json_encode(Helper::fetchJSON("/assets/previews/criminal-defense/seeds/criminal-defense.json"));
      $preview->save();
    }
    return $this->setReturnData($preview);
  } 

  /**
   * Save preview data
   */
  public function saveData(Preview $preview, Request $request) {
    $requestData = $request->all();
    if(!is_null($preview)) {
      $preview->slug = $requestData['preview']['slug'];
      $preview->seed = json_encode($requestData['seed']);
      if(!is_null($preview->save())) {
        return [
          "success" => true
        ];
      }
    }
    return [
      "success" => false
    ];
  }

  /**
   * Set return data
   */
  public function setReturnData(Preview $preview) {
    return [
      "preview" => [
        "id" => $preview->id,
        "slug" => $preview->slug
      ],
      "seed" => json_decode($preview->seed)
    ];
  }
}
