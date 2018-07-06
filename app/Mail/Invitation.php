<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Invitation extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $day;
    public $nextPage;
    public $slug;
    public $subject;
    public $template;
    public $toName;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(String $day, String $nextPage, String $slug, String $subject, String $toName, String $template)
    {
        $this->day = $day;
        $this->nextPage = $nextPage;
        $this->slug = $slug;
        $this->subject = $subject;
        $this->toName = $toName;
        $this->template = $template;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.invitations.'.$this->template.'.html')
                    ->text('emails.invitations.'.$this->template.'.plain')
                    ->subject($this->subject)
                    ->with([
                      "day" => $this->day,
                      "nextPage" => $this->nextPage,
                      "slug" => $this->slug,
                      "toName" => $this->toName
                    ]);
    }
}
