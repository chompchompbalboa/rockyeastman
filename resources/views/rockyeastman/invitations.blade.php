<!DOCTYPE HTML>
<html>
  <head>
    <title>Rocky Eastman - Login</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--[if lte IE 8]><script src="/assets/{{ $path }}/js/ie/html5shiv.js"></script><![endif]-->
    <link rel="stylesheet" href="/assets/{{ $path }}/css/main.css" />
    <!--[if lte IE 8]><link rel="stylesheet" href="a/assets/{{ $path }}/css/ie8.css" /><![endif]-->
    <link rel="icon" href="/assets/{{ $path }}/images/favicon.ico" type="image/x-icon" />
  </head>
  <body class="landing">
    <!-- Header -->
    <header id="header">
      <div class="container">
        <h1><a href="index.html" class="icon fa-cube">Rocky Eastman</a></h1>
        <nav id="nav">
          <ul>
            <li class="current"><a href="/login">Add</a></li>
            <li class="current"><a href="/login">Edit</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Page Wrapper -->
      <div id="page_wrapper">
        <section class="wrapper">
          <div class="container">
            <header>
              <h2>Add</h2>
            </header>
            <form method="post" action="/login">
              <div class="row uniform 50%">
                <div class="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" value="" placeholder="Email Address" />
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="password" name="password" id="password" value="" placeholder="Password" />
                </div>
                {{ csrf_field() }}
                <div class="12u$">
                  <ul class="actions">
                    <li><input type="submit" value="Submit" class="special"/></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

        <!-- Scripts -->
            <script src="/assets/{{ $path }}/js/jquery.min.js"></script>
            <script src="/assets/{{ $path }}/js/skel.min.js"></script>
            <script src="/assets/{{ $path }}/js/util.js"></script>
            <!--[if lte IE 8]><script src="/assets/{{ $path }}/js/ie/respond.min.js"></script><![endif]-->

    </body>
</html>