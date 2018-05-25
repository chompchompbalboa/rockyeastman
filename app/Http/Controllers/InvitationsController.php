<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Invitation;

class InvitationsController extends Controller
{
      /**
     * View Email
     * 
     * Preview an email template
     */
    public function viewEmail() {
      return new Invitation();
    }

    /**
     * Get Email Templates
     * 
     * Get the list of available blade templates for sending invitations
     */
    public function getDefaults() {
      $payload = [];
      $payload['templates'] = array_slice(array_diff(scandir("../resources/views/emails/invitations"), [".", "..", ".DS_Store"]), 0);
      $payload['subjectLine'] = "I built your firm a new website";
      $payload['message'] = file_get_contents("../resources/views/emails/invitations/default/message.md");
      return $payload;
    }
}
