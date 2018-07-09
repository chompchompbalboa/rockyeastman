@extends('emails.invitations.email_layout')

@section('message')
  Hi {{ $toName }},
  <br/><br/>
  I hope your {{ $day }} is going well.
  <br/><br/>
  I’m reaching out today because I noticed your firm's website was a little out of date. I find businesses with older websites and offer to modernize them.
  <br/><br/>
  Could I propose a redesign for your home page and show you what an updated site might look like? I generally use your existing site as a starting point for branding, but am also happy to include anything you might have input on. I want to stay true to the reputation you've already built.
  <br/><br/>
  Let me know - I'm eager to help improve your online presence.
  <br/><br/>
  Best regards,
  <br/>
  Rocky
@endsection