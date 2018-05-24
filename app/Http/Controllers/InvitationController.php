<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InvitationController extends Controller
{
    /**
     * Get Email Templates
     * 
     * Get the list of available blade templates for sending invitations
     */
    public function getEmailTemplates() {
      return [
        "default",
        "special",
        "super_special"
      ];
    }
}
