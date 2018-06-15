<!DOCTYPE HTML>
<html>
  <head>
    <title>Rocky Eastman - Invitations</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/assets/{{ $path }}/images/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    <link rel="stylesheet" href="/css/react-datepicker.css"></link>
  </head>
  <body class="landing">
      <div id="react"></div>
  </body>
  <script src="{{ mix('/js/app.js') }}"></script>
</html>