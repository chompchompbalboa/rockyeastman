@extends($viewPath.'.layout')

@php
    $article = $data->article;
@endphp

@section('content')
  <div class="section">
      <div class="blog-container">
          <h1>{{ $article['title'] }}</h1>
          <h5>{{ $article['blurb'] }}</h5>
          <div class="blog-post-title-separator separator"></div>
          <div class="blog-post-meta">
              <h6 class="blog-post-meta-title">by</h6>
              <h6 class="blog-post-meta-title">{{ $article['author'] }}</h6>
              <h6 class="blog-post-meta-title">,</h6>
              <h6 class="blog-post-meta-title">{{ $article['date'] }}</h6></div>
          <div class="blog-post-body w-richtext">
              <figure data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="" class="w-richtext-align-fullwidth" style="max-width: 100%;">
                  <div><img src="https://daks2k3a4ib2z.cloudfront.net/58f6a49cb45a921b9e5e8b57/58f6b637aa1ab6491f479347_Blog-1.jpg"></div>
                  <figcaption>Photo Credit: Breather (via Unsplash.com)</figcaption>
              </figure>
              <h2>Start at the beginning, no sooner</h2>
              <p>Ad electram convenire duo. Quis appellantur neglegentur est an. Cetero voluptatibus eos et. Vel te veri omittam sententiae, eam at utroque expetenda voluptatibus, in mei nobis voluptua sadipscing. An stet argumentum qui, aliquid atomorum definitionem cu vis. Augue possim nominati eum in, duo cu choro epicuri appellantur.</p>
              <p>Lorem ipsum dolor sit amet, vel ne justo alterum. Vis id sale facete partiendo, suscipit prodesset vis an. An altera admodum vim, ut pro altera dolorem minimum. Nec dicam assentior ad, pro utamur appetere no, ad nec quidam fuisset recusabo. Quodsi maiorum assentior ei est, cu his nemore feugait. An sumo diam agam vim, mea et aliquam mnesarchum, vim ei dolores adversarium.</p>
              <blockquote>“We’ve relied on them on several occasions where client discretion was of the utmost importance, they’ve yet to fall short of anything but outstanding”</blockquote>
              <p>Cibo nobis principes ius id, ad meliore inimicus has, at nec iriure aperiam disputationi. Ne est suas affert mollis. Mea interesset consequuntur id, sea quod suavitate ei. Mei ei reformidans deterruisset, cu mel appareat ponderum probatus. Integre atomorum gloriatur no pri, ei putant option aperiri sed. Viderer elaboraret cu cum, inciderint ullamcorper ne sed. Usu ad molestie aliquando, nam te nisl solum nusquam, vix id iusto appetere consulatu. Id eos veniam eripuit, te his epicurei appellantur. Qui erroribus efficiendi ad. Cu sit quidam sanctus propriae. Alia viris euripidis ius te, no ridens aeterno quo.</p>
              <h3>It’s not solving the problems that really matter.</h3>
              <p>Equidem meliore petentium nam ut. Eu mea nobis consulatu, saepe affert propriae sed in. Et bonorum veritus offendit his, ipsum semper assueverit an est. Cum in saepe oportere, pri in ullum expetenda, sale adipiscing consectetuer quo ad. In facete luptatum menandri eam, quod labore possim an vis. Ad tamquam periculis duo, duo ne falli menandri.</p>
              <ul>
                  <li>Here is an important matter to note</li>
                  <li>And an additional point to keep in mind</li>
                  <li>Can't have the above without the below</li>
              </ul>
              <p>Quo te latine tractatos, ad harum aeterno atomorum pro. In nulla accumsan mea. Legimus fuisset alienum eu eum, no usu assentior quaerendum sadipscing. Ei mei elitr urbanitas, no probo nobis alterum his.</p>
              <h4>Identifying and summarising the pertinent issues</h4>
              <p>His no ancillae comprehensam, ei prompta tacimates neglegentur eam, ad sint platonem eum. Nullam ubique tincidunt ut vix, qui eu discere invenire vituperatoribus. Pri ei ferri semper iudicabit, mentitum mediocrem concludaturque te sit, facete mollis at nec. Per id alterum delectus electram, ridens graeco copiosae in quo.</p>
              <ol>
                  <li>Here is an important matter to note</li>
                  <li>And an additional point to keep in mind</li>
                  <li>Can't have the above without the below</li>
              </ol>
          </div>
      </div>
  </div>
  <div class="background-white section">
      <div class="container">
          <div class="column-fullwidth">
              <h4 class="section-heading">More News Stories</h4>
              <div class="w-dyn-list">
                  <div class="w-clearfix w-dyn-items w-row">
                      <div class="blog-post-snippet w-col w-col-4 w-dyn-item">
                          <h6>April 26, 2017</h6><a class="blog-post-snippet-heading" data-ix="fade-content-out" href="/post/re-capping-q1-2017">Re-capping Q1 2017</a>
                          <p class="blog-post-snippet-excerpt">A most productive start to the year saw many changes for us.</p><a class="text-link-uppercase" data-ix="fade-content-out" href="/post/re-capping-q1-2017">Read story</a></div>
                      <div class="blog-post-snippet w-col w-col-4 w-dyn-item">
                          <h6>April 21, 2017</h6><a class="blog-post-snippet-heading" data-ix="fade-content-out" href="/post/transforming-lgeal-team-communication-in-2017">Transforming Legal Team Communication in 2017</a>
                          <p class="blog-post-snippet-excerpt">Strategies for managing multiple stakeholders in an online environment</p><a class="text-link-uppercase" data-ix="fade-content-out" href="/post/transforming-lgeal-team-communication-in-2017">Read story</a></div>
                      <div class="blog-post-snippet w-col w-col-4 w-dyn-item">
                          <h6>April 21, 2017</h6><a class="blog-post-snippet-heading" data-ix="fade-content-out" href="/post/building-client-trust-starts-with-us">Building Client Trust Starts With Us</a>
                          <p class="blog-post-snippet-excerpt">A brief overview of our Client-Centered philosophy</p><a class="text-link-uppercase" data-ix="fade-content-out" href="/post/building-client-trust-starts-with-us">Read story</a></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection
