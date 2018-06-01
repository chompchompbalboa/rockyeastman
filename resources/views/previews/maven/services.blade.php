@extends($viewPath.'.layout')

@php
    $page = $data->pages->services;
    $testimonialsAlreadyRendered = false;
@endphp

@section('content')
    @include($viewPath.'.splash', ['splash' => $page->splash])
    @foreach($page->services as $service)
        <div class="inner-section section">
            <div class="container">
                <div class="service">
                    <div class="w-row">
                        <div class="column w-col w-col-4">
                            <h4>
                                {{ $service->header }}
                            </h4>
                            <h6>
                                {{ $service->subheader }}
                            </h6>
                            <ul class="link-list">
                                @foreach($service->list as $listItem)
                                    <li class="link-list-item">
                                        <a href="#">
                                            {{ $listItem }}
                                            @if(!$loop->last)
                                                ,
                                            @endif
                                        </a>
                                    </li>
                                @endforeach
                            </ul>
                            <a class="button service-button w-button" data-ix="fade-content-out" href="{{ $urlPath.$service->button->href }}">
                                {{ $service->button->text }}
                            </a>
                        </div>
                        <div class="column w-col w-col-8">
                            <p>
                                @foreach($service->text as $text)
                                        {{ $text }}
                                        @if(!$loop->last)
                                            <br/>
                                            <br/>
                                        @endif
                                @endforeach
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @if($loop->iteration >= $loop->remaining && !$testimonialsAlreadyRendered)
            <div class="inner-section section">
                <div class="container">
                    <div class="column-fullwidth">
                        <div class="testimonial-slider w-slider" data-animation="slide" data-duration="500" data-infinite="1">
                            <div class="w-slider-mask">
                                @foreach($page->testimonials as $testimonial)
                                    <div class="w-slide">
                                        <div class="testimonial-slide">
                                            <blockquote class="blockquote-large">
                                                “{{ $testimonial->text }}”
                                            </blockquote>
                                            <div class="blockquote-author">
                                                {{ $testimonial->attribution }}
                                            </div>
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
            @php
              $testimonialsAlreadyRendered = true
            @endphp
        @endif  
    @endforeach
    @include($viewPath.'.call-to-action')
@endsection