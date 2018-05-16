@extends($viewPath.'.layout')

@php
    $page = $data->pages->team
@endphp

@section('content')
    @include($viewPath.'.splash', ['splash' => $page->splash])
    <div>
        <div class="container">
            <div class="w-dyn-list">
                <div class="w-clearfix w-dyn-items w-row">
                    @foreach($page->members as $member)
                        <div class="team-member w-col w-col-6 w-dyn-item">
                            <div class="team-member-inner">
                                <img sizes="100vw" src="{{ $member->img}}">
                                <div class="team-member-title">
                                    <h4 class="team-member-name">
                                        {{ $member->name }}
                                    </h4>
                                    <div class="team-member-position">
                                        {{ $member->title }}
                                    </div>
                                    <a class="text-link-uppercase" data-ix="fade-content-out" href="{{ $urlPath.$member->link->href }}">
                                        {{ $member->link->text }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    @include($viewPath.'.call-to-action')
@endsection