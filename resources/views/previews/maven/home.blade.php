@extends($viewPath.'.layout')

@php
    $page = $data->pages->home
@endphp

@section('content')
    @include($viewPath.'.splash', ['splash' => $page->splash])
    <div class="section service-section">
        <div class="container">
            <div class="w-row">
                <div class="column w-col w-col-5">
                    <h6>
                        {{ $page->list->header}}
                    </h6>
                    <ul class="link-list services-list">
                        @foreach($page->list->listItems as $listItem)
                            <li class="link-list-item">
                                <a class="text-link-large" data-ix="fade-content-out" href="{{ $urlPath }}/services">
                                    {{ $listItem }}@if(!$loop->last),@endif
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
                <div class="column w-col w-col-7"></div>
            </div>
        </div>
    </div>
    <div class="inner-section section">
        <div class="container">
            <div class="column-fullwidth">
                <div class="image-feature top-feature" style="background-image: url({{ $page->tiles[0]->img }})">
                    <div class="image-feature-panel">
                        <h4>{{ $page->tiles[0]->header }}</h4>
                        <p>{{ $page->tiles[0]->text }}</p>
                        <a class="text-link-uppercase" data-ix="fade-content-out" href="{{ $urlPath.$page->tiles[0]->linkHref }}">
                            {{ $page->tiles[0]->linkText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="inner-section section">
        <div class="container">
            <div class="column-fullwidth">
                <div class="testimonial-slider w-slider" data-animation="slide" data-duration="500" data-infinite="1">
                    <div class="w-slider-mask">
                        @foreach($page->testimonials as $testimonial)
                            <div class="w-slide">
                                <div class="testimonial-slide">
                                    <blockquote class="blockquote-large">{{ $testimonial->text }}</blockquote>
                                    <div class="blockquote-author">{{ $testimonial->attribution }}</div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="w-slider-arrow-left">
                        <div class="slider-arrow w-icon-slider-left"></div>
                    </div>
                    <div class="w-slider-arrow-right">
                        <div class="slider-arrow w-icon-slider-right"></div>
                    </div>
                    <div class="slider-paging w-round w-slider-nav"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="inner-section section">
        <div class="container">
            <div class="column-fullwidth">
                <div class="image-feature bottom-feature" style="background-image: url({{ $page->tiles[1]->img }})">
                    <div class="image-feature-panel image-feature-panel-left">
                        <h4>{{ $page->tiles[1]->header }}</h4>
                        <p>{{ $page->tiles[1]->text }}</p>
                        <a class="text-link-uppercase" data-ix="fade-content-out" href="{{$urlPath.$page->tiles[1]->linkHref }}">
                            {{ $page->tiles[1]->linkText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include($viewPath.'.call-to-action')
    <div class="background-white section">
        <div class="container">
            <div class="column-fullwidth">
                <h4 class="section-heading">{{ $page->services->header }}</h4>
                <div class="w-dyn-list">
                    <div class="w-clearfix w-dyn-items w-row">
                        @foreach($page->services->tiles as $tile)
                            <div class="blog-post-snippet w-col w-col-4 w-dyn-item">
                                <h6>
                                    {{ $tile->header }}
                                </h6>
                                <a class="blog-post-snippet-heading" data-ix="fade-content-out" href="{{ $urlPath.$tile->topLink->href }}">
                                    {{ $tile->topLink->text }}
                                </a>
                                <p class="blog-post-snippet-excerpt">
                                    {{ $tile->blurb }}
                                </p>
                                <a class="text-link-uppercase" data-ix="fade-content-out" href="{{ $urlPath.$tile->bottomLink->href }}">
                                    {{ $tile->bottomLink->text }}
                                </a>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
