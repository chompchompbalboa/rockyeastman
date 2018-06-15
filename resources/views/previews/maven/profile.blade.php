@extends($viewPath.'.layout')

@php
    $page = $data->pages->profile
@endphp

@section('message')
  memsmsalsdkjfal;sdjr;eiaje;ijf
@endsection

@section('content')
    @include($viewPath.'.splash', ['splash' => $page->splash])
    <div class="no-space-top section">
        <div class="container">
            <div class="w-row">
                <div class="column w-col w-col-10">
                    <blockquote class="block-quote blockquote-large">
                        “{{ $page->quote->text}}”
                    </blockquote>
                    <div class="blockquote-author">
                        {{ $page->quote->attribution }}
                    </div>
                </div>
                <div class="column w-col w-col-2"></div>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="container">
            <div class="column-fullwidth">
                <div class="image-slider w-slider" data-animation="slide" data-duration="500" data-infinite="1">
                    <div class="w-slider-mask">
                        @foreach($page->slider as $sliderImage)
                            <div class="w-slide">
                                <img sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 90vw, 95vw" src="{{ $sliderImage }}">
                            </div>
                        @endforeach
                    </div>
                    <div class="w-slider-arrow-left">
                        <div class="slider-arrow slider-arrow-white w-icon-slider-left"></div>
                    </div>
                    <div class="w-slider-arrow-right">
                        <div class="slider-arrow slider-arrow-white w-icon-slider-right"></div>
                    </div>
                    <div class="slider-paging w-round w-slider-nav"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="container">
            <div class="w-row">
                <div class="column w-col w-col-6">
                    <h3 class="profile-heading">{{ $page->profile->header }}</h3>
                    <div class="separator"></div>
                    <p>
                        @foreach($page->profile->text as $text)
                            {{ $text }}
                            @if(!$loop->last)
                                <br/>
                                <br/>
                            @endif
                        @endforeach
                    </p>
                </div>
                <div class="column w-col w-col-1"></div>
                <div class="w-col w-col-5">
                    <div class="metrics">
                        <ul class="metrics-list">
                            @foreach($page->metrics as $metric)
                                <li class="metrics-list-item w-clearfix">
                                    <div class="metric-title">{{ $metric->metric }}</div>
                                    <div class="metric-description">{{ $metric->blurb }}</div>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include($viewPath.'.call-to-action')
@endsection