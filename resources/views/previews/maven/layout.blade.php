<!DOCTYPE html>
<html>

@include($viewPath.'.head')

<body>
    <div class="site-container">
        @include($viewPath.'.back-to-top')
        @include($viewPath.'.nav')
        <div class="content-container" data-ix="fade-content-in">
            @yield('overlay')
            @yield('content')
        </div>
        @include($viewPath.'.footer')
    </div>
    @include($viewPath.'.scripts-end')
</body>

</html>