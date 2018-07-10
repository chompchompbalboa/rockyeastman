<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use Carbon\Carbon;

use App\Helpers\Helper;
use App\Helpers\Maven;
use App\Helpers\Scheduler;

use App\Models\Business;
use App\Models\Schedule;
use App\Models\Seed;

use App\Mail\Invitation;

class QuickController extends Controller
{

  /**
   * Initial Data
   * 
   * Set and send the initial data for the page 
   */
  public function initialData() {
    $business = $this->getNextBusiness("uploaded");
    $email = $this->getEmailSettings($business['business'], "volume", true);
    return [
      "build" => [
        "business" => $business['business'],
        "email" => $email,
        "seed" => $business['seed']
      ],
      "counts" => $this->getCounts()
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
    $business->email_name = $data['business']['emailName'];
    $business->phone = $data['business']['phone'];
    $business->slug = $data['business']['slug'];
    $business->state = $data['business']['state'];
    $business->street = $data['business']['street'];
    $business->website = $data['business']['website'];
    $business->zip = $data['business']['zip'];
    // Save the seed
    $seed = Seed::where('business_id', $business->id)->first();
    $seed->json = json_encode($data['seed']);
    // Return the save status
    if($business->save() && $seed->save()) {
      return [
        "success" => true
      ];
    }
    return [
      "sucess" => false
    ];
  }

  /**
   * Update Status
   * 
   * Update a business' status and fetch the next business. If all is
   * successful, respond with the next business and a success message. 
   * If it fails, respond with the same business and an error message.
   */
  public function updateStatus(Request $request, String $status, Business $business) {
    $data = $request->all();
    // If the status is "sent", schedule the email for sending
    if($status === "sent") {
      $when = ($data['email']['time']['now'] ? now() : Scheduler::buildDateTime($data['email']['time']));
      $template = $data['email']['templates']['active'];
      $subject = $data['email']['subject'];
      $slug = $data['business']['slug'];
      $nextPage = $data['email']['nextPage'];
      $this->scheduleEmail($when, $template, $subject, $business, $nextPage);
    }
    // Update the status
    $business->status = $status;
    $business->save();
    // Fetch the next business
    $nextBusiness = $this->getNextBusiness($data['nextStatus']);
    return [
      "nextBusiness" => $nextBusiness['business'],
      "nextEmail" => $this->getEmailSettings($nextBusiness['business'], $data['email']['templates']['active'], $data['email']['time']['now']),
      "nextCounts" => $this->getCounts(),
      "nextSeed" => $nextBusiness['seed'],
      "success" => true
    ];
  }

  /**
   * Get Next Business
   * 
   * Load the next business from the database and translate the db values to
   * the object the front end is expecting.
   */
  public function getNextBusiness(String $status) {
    // Fetch the next business from the database
    $nextBusiness = Business::where('status', $status)->first();
    // Build the slug if necessary
    if(is_null($nextBusiness->slug)) {
      $nextBusiness->slug = Helper::buildSlug($nextBusiness->name);
      $nextBusiness->save();
    }
    // Check for an existing seed
    $nextSeed = Seed::where('business_id', $nextBusiness->id)->first();
    // Build a new seed if necessary
    if(is_null($nextSeed)) {
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
        "emailName" => $nextBusiness->email_name,
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
   * Get Counts
   * 
   * Save the changes made on the front end to the db
   */
  private function getCounts() {
    return [
      "accepted" => Business::where('status', "accepted")->count(),
      "rejected" => Business::where('status', "rejected")->count(),
      "sent" => Business::where('status', "sent")->count(),
      "uploaded" => Business::where('status', "uploaded")->count()
    ];
  }

  /**
   * Get Email Settings
   * 
   * Get the time and template to be used for the next 
   */
  private function getEmailSettings(Array $business, String $activeTemplate, Bool $sendNow) {
    $nextDateTime = Scheduler::getNextDateTime();
    $subject = str_replace(["http://", "www.", "/"], "", $business['website']);
    return [
      "subject" => $subject,
      "nextPage" => "Profile",
      "to" => $business['emailName'],
      "time" => [
        "now" => $sendNow,
        "year" => $nextDateTime->year,
        "month" => $nextDateTime->month,
        "day" => $nextDateTime->day,
        "hour" => $nextDateTime->hour,
        "minute" => $nextDateTime->minute,
      ],
      "templates" => [
        "active" => $activeTemplate,
        "options" => [
          ["text" => "Personalized", "value" => "personalized"],
          ["text" => "Volume", "value" => "volume"]
        ]
      ]
    ];
  }

  /**
   * Schedule Email
   * 
   * Schedule an email for later sending
   */
  private function scheduleEmail(Carbon $when, String $template, String $subject, Business $business, String $nextPage) {
    // Make sure that we haven't sent an email to this email address yet
    $scheduledEmail = Schedule::where('email', $business->email)->first();
    if(is_null($scheduledEmail) || $business->email === "eastmanrjr@gmail.com") {
      // Setters
      $scheduledEmail = new Schedule;
      $day = Scheduler::getEnglishDayOfWeek($when->dayOfWeek);
      $slug = $business->slug;
      $subject = $subject;
      $toName = $business->email_name;
      // Send the invitation
      Mail::to($business->email)->later($when, new Invitation($day, $nextPage, $slug, $subject, $toName, $template));
      // Add information to the "scheduled" table in the db
      $scheduledEmail->business_id = $business->id;
      $scheduledEmail->datetime = $when;
      $scheduledEmail->email = $business->email;
      $scheduledEmail->template = $template;
      $scheduledEmail->save();
    }
  }
}
