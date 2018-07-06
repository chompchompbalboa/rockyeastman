@extends('emails.invitations.email_layout')

@section('message')
  Hi {{ $toName }},
  <br/><br/>
  I hope your {{ $day }} is going well.
  <br/><br/>
  I’m reaching out today because I noticed your firm's website was a little out of date.
  <br/><br/>
  I wanted to give you an idea of what an updated website could look like, so I put together an example redesign of your home page - 
  built with help from the content on your existing website. You can find it here:
  <br/><br/>
  <a href="http://rockyeastman.com/preview/{{ $slug }}">
    http://rockyeastman.com/preview/{{ $slug }}
  </a>
  <br/><br/>
  If you think it looks great, could I build a 2nd page for you - maybe the "{{ $nextPage }}" page?
  <br/><br/>
  Best regards,
  <br/>
  Rocky
@endsection