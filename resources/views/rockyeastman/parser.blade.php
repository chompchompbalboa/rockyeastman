<!DOCTYPE HTML>
<html>
  <head>
    <title>Rocky Eastman - Parser</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/assets/{{ $path }}/images/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="/assets/editor/css/editor.css"></link>
  </head>
  <body class="landing">
      <div id="react"></div>
  </body>
  <script src="{{ mix('js/parser.js') }}"></script>
</html>