<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use App\Models\Seed;
use App\Helpers\Helper;
use App\Helpers\Maven;

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
     * Get Built
     * 
     * Get every site that has the status "built"
     */
    public function getBuilt() {
      return Business::where('status', "built")->get();
    }

    /**
     * Get Next
     * 
     * Save the current built business and get the next one to be built
     */
    public function getNext(Request $request) {
      // Get the request data
      $data = $request->all();
      // Save the current business
      if(isset($data['business'])) {
        $currentBusiness = Business::find($data['business']['id']);
        $currentBusiness->slug = $data['business']['slug'];
        $currentBusiness->email = $data['business']['email'];
        $currentBusiness->status = $data['status'];
        $currentBusiness->save();

        $currentSeed = Seed::where('business_id', $data['business']['id'])->first();
        $currentSeed->json = json_encode($data['seed']);
        $currentSeed->save();
      }
      // Get the next business
      $nextBusiness = Business::where('status', "uploaded")->first();
      // Check for an existing seed
      $nextSeed = Seed::where('business_id', $nextBusiness->id)->first();
      if(is_null($nextSeed)) {
        // Build a new seed
        $nextSeed = new Seed;
        $nextSeed->business_id = $nextBusiness->id;
        // Load the default json
        $defaultJson = Helper::fetchJSON("/assets/previews/maven/seeds/__default.json");
        // Update the default values to use the current business' info
        $json = Maven::replaceDefaultValues($nextBusiness, $defaultJson);
        // Save the seed to the database
        $nextSeed->json = json_encode($json);
        $nextSeed->save();
      }
      // Payload
      return [
        "business" => $nextBusiness,
        "seed" => json_decode($nextSeed->json)
      ];
    }

    /**
     * Get Seed
     * 
     * Get a business' seed
     */
    public function getSeed(Business $business) {
      // Try to find the seed in the database
      $seed = Seed::where('business_id', $business->id)->first();
      // Return the seed if it exists
      if(!is_null($seed)) {
        return [
          "id" => $seed->id,
          "business_id" => $seed->business_id,
          "json" => json_decode($seed->json)
        ];
      }
      // If not, return an empty payload
      return null;
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
