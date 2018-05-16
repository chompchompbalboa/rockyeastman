@php
    $block = $data->blocks->footer;
    $followVisible = $block->contact->follow->visible;
@endphp

<div class="footer w-clearfix">
    <div class="footer-circle"></div>
    <div class="footer-square"></div>
    <div class="container">
        <div class="footer-content">
            <div class="footer-tagline">{{ $block->bigText }}</div>
            <ul class="footer-navbar link-list">
                @foreach($block->links as $link)
                    <li class="footer-link-list-item link-list-item @if($loop->last) link-liste-item-last @endif">
                        <a class="footer-navbar-link navbar-link @if($loop->last) navbar-link-last @endif" data-ix="fade-content-out" href="{{ $urlPath.$link->href }}">
                            {{ $link->text }}
                        </a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
    <div class="footer-third">
        <h6 class="footer-third-heading">Call</h6>
        <div class="footer-third-text">{{ $block->contact->call }}</div>
    </div>
    @if(!$followVisible)
        <div class="footer-third">
            <h6 class="footer-third-heading">Email</h6>
            <div class="footer-third-text">{{ $block->contact->email }}</div>
        </div>
    @endif
        <div class="footer-third">
            <h6 class="footer-third-heading">Visit</h6>
            <div class="footer-third-text">{{ $block->contact->visit }}</div>
        </div>
    @if($followVisible)
        <div class="footer-third">
            <h6 class="footer-third-heading">Follow</h6>
            <ul class="link-list social-list w-list-unstyled">
                @foreach($block->contact->follow->socials as $social)
                    <li class="link-list-item social-list-item">
                        <a class="social-link w-inline-block" href="{{ $social->href }}"><img class="social-icon" src="{{ $assetsPath.$social->icon }}"></a>
                    </li>
                @endforeach
            </ul>
        </div>
    @endif
</div>
