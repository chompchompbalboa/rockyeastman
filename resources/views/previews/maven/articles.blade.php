@extends($viewPath.'.layout')

@php
    $page = $data->pages->articles
@endphp

@section('content')
    @include($viewPath.'.splash', ['splash' => $page->splash])
      <div class="background-white section">
          <div class="container">
              <div class="column-fullwidth">
                  <div class="w-dyn-list">
                      <div class="w-clearfix w-dyn-items w-row">
                      @foreach($page->articles as $article)
                          <div class="blog-post-snippet w-col w-col-4 w-dyn-item">
                              <h6>
                                {{ $article->date }}
                              </h6>
                              <a class="blog-post-snippet-heading" data-ix="fade-content-out" href="{{ $urlPath }}/article/{{ $article->slug }}">
                                {{ $article->title }}
                              </a>
                              <p class="blog-post-snippet-excerpt">
                                {{ $article->blurb }}
                              </p>
                              <a class="text-link-uppercase" data-ix="fade-content-out" href="{{ $urlPath }}/article/{{ $article->slug }}">
                                Read more
                              </a>
                            </div>
                      @endforeach
                      </div>
                  </div>
              </div>
          </div>
      </div>
      @include($viewPath.'.call-to-action')
@endsection