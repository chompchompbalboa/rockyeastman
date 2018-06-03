@extends($viewPath.'.layout')

@php
    $member = $data->member;
    $members = $data->pages->team->members;
@endphp

@section('content')
    <div class="team-member-section">
        <div class="container">
            <div class="w-row">
                <div class="column w-col w-col-6">
                    <h1 class="team-member-heading">{{ $member['name'] }}</h1>
                    <h5>{{ $member['title'] }}</h5><a class="link" href="mailto:{{ $member['email'] }}">{{ $member['email'] }}</a>
                    <div class="team-member-phone">{{ $member['phone'] }}</div>
                    <div class="separator"></div>
                    <div class="w-richtext">
                      @foreach($member['profile'] as $text)
                        <p>{{ $text }}</p>
                      @endforeach
                    </div>
                </div>
                <div class="column w-col w-col-1"></div>
                <div class="w-col w-col-5">
                  <img sizes="(max-width: 479px) 91vw, (max-width: 767px) 92vw, (max-width: 991px) 38vw, 40vw" src="{{ $member['img'] }}">
                </div>
            </div>
        </div>
    </div>
    <div class="background-white section">
        <div class="container">
            <div class="column-fullwidth">
                <h4 class="section-heading">Meet more of the team</h4></div>
            <div class="w-dyn-list">
                <div class="w-clearfix w-dyn-items w-row">
                    @foreach($members as $otherMember)
                      @if($otherMember->name !== $member['name'])
                        <div class="team-member w-col w-col-6 w-dyn-item">
                            <div class="team-member-inner"><img sizes="(max-width: 479px) 90vw, (max-width: 767px) 92vw, (max-width: 991px) 45vw, 47vw" src="{{ $otherMember->img }}">
                                <div class="team-member-title">
                                    <h4 class="team-member-name">{{ $otherMember->name }}</h4>
                                    <div class="team-member-position">{{ $otherMember->title }}</div>
                                    <a class="text-link-uppercase" data-ix="fade-content-out" href="{{ $urlPath."/team-member/".$otherMember->link->href }}">read more</a>
                                </div>
                            </div>
                        </div>
                      @endif
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    @include($viewPath.'.call-to-action')
@endsection