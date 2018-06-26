@php
    $block = $data->blocks->nav;
@endphp

<div class="navigation" data-ix="show-back-to-top" id="top">
    <div class="container">
        <div class="navbar w-nav" data-animation="default" data-collapse="small" data-duration="400">
            <div class="w-row">
                <div class="column w-clearfix w-col w-col-2 w-col-small-6 w-col-tiny-6 phone-number">
                  <img class="phone-logo" src="{{ $assetsPath."/img/phone-logo.png" }}" />{{ $block->call }}
                </div>
                <div class="column w-clearfix w-col w-col-10 w-col-small-6 w-col-tiny-6">
                    <div class="menu-button w-nav-button">
                        <div class="nav-toggle w-icon-nav-menu"></div>
                    </div>
                    <nav class="nav-menu w-clearfix w-nav-menu" role="navigation">
                        @foreach($block->links as $link)
                            <a class="navbar-link w-nav-link" data-ix="fade-content-out" href="{{ $urlPath.$link->href }}">
                                {{ $link->text }}
                            </a>
                        @endforeach
                        <a class="button nav-button w-button" data-ix="fade-content-out" href="{{ $urlPath.$block->bigLink->href }}">
                            {{ $block->bigLink->text }}
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>