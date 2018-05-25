<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use App\Models\Seed;
use App\Helpers\Helper;

class BusinessController extends Controller
{
    /**
     * Index
     * 
     * Return all businessses
     */
    public function index() {
      return Business::all();
    }

    /**
     * Get Seed
     * 
     * Get a business' seed
     */
    public function getSeed(Business $business) {
      $seed = Seed::where('business_id', $business->id)->first();
      if(is_null($seed)) {
        $seed = new Seed;
        $seed->business_id = $business->id;
        $seed->json = json_encode(Helper::fetchJSON("/assets/previews/maven/seeds/__default.json"));
        $seed->save();
      }
      // Automatically update some of the default values to use the current business' info
      $json = json_decode($seed->json);
      $json->head->title = ($json->head->title === "Preview - Maven" ? "Preview - ".$business->name : $json->head->title);

      return [
        "id" => $seed->id,
        "business_id" => $seed->business_id,
        "json" => $json
      ];
    }

    /**
     * Get Built
     * 
     * Get every site that has the status "built"
     */
    public function getBuilt() {
      return Business::where('status', "built")->get();
    }

    /**
     * Get Uploaded
     * 
     * Get every site that has the status "uploaded"
     */
    public function getUploaded() {
      return Business::where('status', "uploaded")->get();
    }

    /**
     * Update
     * 
     * Update a business
     */
    public function update(Request $request, Business $business) {
      $data = $request->all();
      // Save the business info
      $business->email = $data['business']['email'];
      $business->website = $data['business']['website'];
      $business->status = $data['business']['status'];
      $business->slug = $data['business']['slug'];
      // Save the seed
      $seed = Seed::where('business_id', $business->id)->first();
      $seed->json = json_encode($data['seed']['json']);

      if($business->save() && $seed->save()) {
        return [
          "success" => true
        ];
      }
      return [
        "sucess" => false
      ];
    }

}
