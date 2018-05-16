@extends($viewPath.'.layout')

@php
    $page = $data->pages->contact
@endphp

@section('content')
    @include($viewPath.'.splash', ['splash' => $page->splash])
    <div class="inner-section section">
        <div class="container">
            <div class="w-row">
                <div class="column w-col w-col-6">
                    <div class="contact-information">
                        <h4>Information</h4>
                        <p>{{ $page->information->blurb }}</p>
                        <div class="contact-methods">
                            <div class="w-row">
                                <div class="w-col w-col-6 w-col-stack">
                                    <h6>visit</h6>
                                    <p>
                                        @foreach($page->information->visit as $visitLine)
                                            {{ $visitLine }}
                                            @if(!$loop->last)
                                                <br/>
                                            @endif
                                        @endforeach
                                    </p>
                                </div>
                                <div class="w-col w-col-6 w-col-stack">
                                    <h6>Call</h6>
                                    <p>
                                        @foreach($page->information->visit as $visitLine)
                                            {{ $visitLine }}
                                            @if(!$loop->last)
                                                <br/>
                                            @endif
                                        @endforeach
                                    </p>
                                </div>
                            </div>
                            <div class="w-row">
                                <div class="w-col w-col-6">
                                    <h6>email</h6>
                                    <a href="mailto: {{ $page->information->email }}">
                                        {{ $page->information->email }}
                                    </a>
                                </div>
                                <div class="w-col w-col-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column w-col w-col-6">
                    <div class="w-form">
                        <form class="w-clearfix" data-name="Email Form" id="email-form" name="email-form">
                            <input class="text-input w-input" data-name="Name" id="Name-2" maxlength="256" name="Name" placeholder="Your Name *" required="required" type="text">
                            <input class="text-input w-input" data-name="Email Address" id="Email-Address" maxlength="256" name="Email-Address" placeholder="Email Address *" required="required" type="email">
                            <input class="text-input w-input" data-name="Phone Number" id="Phone-Number" maxlength="256" name="Phone-Number" placeholder="Phone Number *" required="required" type="text">
                            <textarea class="text-input textarea-input w-input" data-name="Message" id="Message" maxlength="5000" name="Message" placeholder="Your Message Here" required="required"></textarea>
                            <input class="button w-button" data-wait="Please wait..." type="submit" value="Send Message">
                        </form>
                        <div class="form-success w-form-done">
                            <div class="form-success-text">Thank you! Your submission has been received!</div>
                        </div>
                        <div class="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="inner-section section">
        <div class="container">
            <div class="column-fullwidth">
                <div class="map w-widget w-widget-map" data-disable-scroll="1" data-widget-latlng="{{ $page->information->latLng }}" data-widget-zoom="15"></div>
            </div>
        </div>
    </div>
@endsection
