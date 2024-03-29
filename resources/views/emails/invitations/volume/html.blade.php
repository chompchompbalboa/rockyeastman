@extends('emails.invitations.email_layout')

@section('message')
  Hi {{ $toName }},
  <br/><br/>
  I hope your {{ $day }} is going well.
  <br/><br/>
  I’m reaching out today because I noticed your firm's website was a little out of date.
  <br/><br/>
  Could I propose a redesign for your home page and show you what an updated site might look like? 
  <br/><br/>
  My plan is to use your existing site as a starting point for branding, but I am also happy to include anything you might have input on. I definitely want to stay true to the reputation you've already built.
  <br/><br/>
  Best regards,
  <br/>
  Rocky
@endsection