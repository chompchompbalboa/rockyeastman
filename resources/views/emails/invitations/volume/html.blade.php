@extends('emails.invitations.email_layout')

@section('message')
  Hi {{ $toName }},
  <br/><br/>
  I hope your {{ $day }} is going well.
  <br/><br/>
  I’m reaching out today because I noticed your firm's website was a little out of date. I find businesses with older websites and offer to modernize them.
  <br/><br/>
  I have a starting point that I think would look great for your firm - you can find it here:
  <br/><br/>
  <a href="http://rockyeastman.com/preview/{{ $slug }}">
    http://rockyeastman.com/preview/{{ $slug }}
  </a>
  <br/><br/>
  If you like what you see, I'm happy to get started working on a full redesign as soon as I hear back from you. Please let me know!
  <br/><br/>
  Best regards,
  <br/>
  Rocky
@endsection