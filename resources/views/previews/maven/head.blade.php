<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>{{ $data->head->title }}</title>
    <link href="{{ $assetsPath }}/css/maven.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
    <script type="text/javascript">
        WebFont.load({
            google: {
                families: ["Oswald:200,300,400,500,600,700", "Cormorant Garamond:regular,500,500italic,600,600italic", "Nunito Sans:regular,italic,600,600italic"]
            }
        });
    </script>
    <script src="{{ $assetsPath }}/js/modernizr.js" type="text/javascript"></script>
    <style>
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    </style>
</head>
