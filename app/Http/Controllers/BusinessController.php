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
      // Try to find the seed in the database
      $seed = Seed::where('business_id', $business->id)->first();
      //dd($seed);
      // If there is no seed in the database, load a default one and save it to the database
      if(is_null($seed)) {
        // Save the new seed to the database
        $seed = new Seed;
        $seed->business_id = $business->id;
        // Fetch the default seed
        $json = Helper::fetchJSON("/assets/previews/maven/seeds/__default.json");
        // Update the default values to use the current business' info
        // Page Title
        $json->head->title = "Preview - ".$business->name;
        // Street Address
        $json->blocks->footer->contact->visit = $business->street." ".$business->city." ".$business->state." ".$business->zip;
        $json->pages->contact->information->visit[0] = $business->street;
        $json->pages->contact->information->visit[1] = $business->city." ".$business->state." ".$business->zip;
        // Phone
        $json->blocks->footer->contact->call = $business->phone;
        $json->pages->contact->information->call[0] = $business->phone;
        // Email
        $json->blocks->footer->contact->email = $business->email;
        $json->pages->contact->information->email = $business->email;
        //dd($json);
        // Save to the database
        $seed->json = json_encode($json);
        $seed->save();
      }
      // Payload
      return [
        "id" => $seed->id,
        "business_id" => $seed->business_id,
        "json" => json_decode($seed->json)
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
