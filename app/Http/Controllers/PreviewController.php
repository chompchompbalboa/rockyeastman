<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Helpers\Helper;
use App\Models\Business;
use App\Models\Seed;

class PreviewController extends Controller
{
    /**
     * Load a preview website
     *
     * @param  int  $previewID
     * @return Response
     */
    public function loadPreview($slug, $page = "home", $pageId = null)
    {
        // Set base file paths for views
        $assetsPath = "/assets/previews/maven";
        $urlPath = "/preview/".$slug;
        $viewPath = "previews.maven";
        $viewName = "previews.maven.".$page;

        // Load seed
        $data = Helper::fetchJSON("/assets/previews/maven/seeds/__default.json");
        $business = Business::where('slug', $slug)->first();
        if(!is_null($business)) {
          $seed = Seed::where('business_id', $business->id)->first();
          if(!is_null($seed)) {
            $data = json_decode($seed->json);
          }
        }

        // Handle the data for pages with a pageId
        if (!is_null($pageId)) {
          switch($page) {
            case "article":
              // Set the default data
              $data->article = [
                "slug" => "the-nature-of-efficacy-in-a-modern-legal-practice",
                "title" => "The Nature of Efficacy In A Modern Legal Practice",
                "date" => "April 26, 2018",
                "blurb" => "Working together to acheive actionable, just-in-time results",
                "author" => "John Carpenter",
                "article" => []
              ];
              foreach($data->pages->articles->articles as $article) {
                if($article->slug === $pageId) {
                  $data->article = [
                    "slug" => $article->slug,
                    "title" => $article->title,
                    "date" => $article->date,
                    "blurb" => $article->blurb,
                    "author" => $article->author,
                    "article" => $article->article
                  ];
                }
              }
            break;
            case "team-member":
              // Set the default data
              $data->member = [
                "name" => "John Carpenter",
                "title" => "Partner, Intellectual Property Expert",
                "email" => "johncarpenter@attorneys.com",
                "phone" => "+614 442 482",
                "img" => "/assets/previews/maven/img/team-john.jpg",
                "profile" => [
                  "Let’s say for example that your client is a financial institution that is redesigning the navigation structure for their website. Because the ownership of the site’s content is often dispersed across several organizational silos, the order, content, and even labeling of the navigation can become a disastrous political debate.",
                  "While looking to competitors for cues may help settle internal debates, it could also show you their dysfunctional organizational structures, too—and it tells you nothing about what your users expect to find where.How does your web copy stack up against your competitors’? Entrepreneurs and marketing executives will sometimes decide to take on the copywriting themselves to save cost on the total project. Most people have at least basic writing skills, and it’s not like you need specialized technological skills or software to do it.",
                  "It can be tempting, after a survey of products that are out there, to develop an exhaustive backlog of must-have features for your product and to set out designing a slicker version of the status quo."
                ]
              ];
            break;
          }
        }
        
        return view($viewName,
            [
                "assetsPath" => $assetsPath,
                "urlPath" => $urlPath,
                "viewPath" => $viewPath,
                "data" => $data
            ]);
    }
}
