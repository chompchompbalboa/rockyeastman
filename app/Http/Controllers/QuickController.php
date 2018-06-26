<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use App\Helpers\Helper;
use App\Mail\Invitation;
use Illuminate\Support\Facades\Mail;
use App\Helpers\Maven;
use App\Models\Seed;

class QuickController extends Controller
{

  /**
   * Initial Data
   * 
   * Set and send the initial data for the page 
   */
  public function initialData() {
    $business = $this->buildGetNextBusiness("uploaded");
    return [
      "build" => [
        "business" => $business['business'],
        "seed" => $business['seed']
      ]
    ];
  }

  /**
   * Update Status
   * 
   * Update a business' status and fetch the next business. If all is
   * successful, respond with the next business and a success message. 
   * If it fails, respond with the same business and an error message.
   */
  public function updateStatus(Request $request, $status, Business $business) {
    $data = $request->all();
    // Update the status
    $business->status = $status;
    $business->save();
    // Fetch the next business
    $nextBusiness = $this->buildGetNextBusiness($data['nextStatus']);
    return [
      "nextBusiness" => $nextBusiness['business'],
      "nextSeed" => $nextBusiness['seed'],
      "success" => true
    ];
  }

  /**
   * Build - Get Next Business
   * 
   * Load the next business from the database and translate the db values to
   * the input object the front end digests.
   */
  public function buildGetNextBusiness($status) {
    // Fetch the next business from the database
    $nextBusiness = Business::where('status', $status)->first();
    // Build the slug if necessary
    if(is_null($nextBusiness->slug)) {
      $nextBusiness->slug = Helper::buildSlug($nextBusiness->name);
      $nextBusiness->save();
    }
    // Check for an existing seed
    $nextSeed = Seed::where('business_id', $nextBusiness->id)->first();
    if(is_null($nextSeed)) {
      // Build a new seed if necessary
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
    return [
      "business" => [
        "id" => $nextBusiness->id,
        "name" => $nextBusiness->name,
        "city" => $nextBusiness->city,
        "email" => $nextBusiness->email,
        "phone" => $nextBusiness->phone,
        "slug" => $nextBusiness->slug,
        "state" => $nextBusiness->state,
        "street" => $nextBusiness->street,
        "website" => $nextBusiness->website,
        "zip" => $nextBusiness->zip,
      ],
      "seed" => json_decode($nextSeed->json)
    ];
  }

  /**
   * Save
   * 
   * Save the changes made on the front end to the db
   */
  public function save(Request $request) {
    $data = $request->all();
    // Fetch the business
    $business = Business::find($data['business']['id']);
    // Save the business info
    $business->name = $data['business']['name'];
    $business->city = $data['business']['city'];
    $business->email = $data['business']['email'];
    $business->phone = $data['business']['phone'];
    $business->slug = $data['business']['slug'];
    $business->state = $data['business']['state'];
    $business->street = $data['business']['street'];
    $business->website = $data['business']['website'];
    $business->zip = $data['business']['zip'];
    // Save the seed
    $seed = Seed::where('business_id', $business->id)->first();
    $seed->json = json_encode($data['seed']);

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
