<!DOCTYPE HTML>
<html>
  <head>
    <title>Rocky Eastman - Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/assets/{{ $path }}/images/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="/assets/editor/css/editor.css"></link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Lora:400,700|Crimson+Text:600">
  </head>
  <body class="landing">
      <div id="react"></div>
  </body>
  <script src="{{ mix('js/editor.js') }}"></script>
</html>