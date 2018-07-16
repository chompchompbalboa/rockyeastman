<?php
/*
* Rocky Eastman
*
* rockyeastman.com
*/
$rockyeastman = function() {

    // Home page
    Route::get('/', function() {
        return view('rockyeastman.home')->with('path', 'rockyeastman');
    });

    // Invitations
    Route::get('/invitations/view', 'InvitationsController@viewEmail');
    Route::get('/invitations', function() {
        return view('rockyeastman.invitations')->with('path', 'rockyeastman');
    });

    // Login
    Route::get('/login', function() {
        return view('rockyeastman.login')->with('path', 'rockyeastman');
    });

    // Specific previews
    Route::get('/preview/redline-law/{page?}', function() {
        return view('redlinelaw.react')->with([
          "path" => "redlinelaw",
          "assetsPath" => "/assets/redlinelaw",
          "urlPath" => "/"
        ]);
    });

    Route::get('/preview/schurman-law/{page?}', function() {
        return view('schurman-law.react')->with([
          "path" => "schurman-law",
          "assetsPath" => "/assets/schurman-law",
          "urlPath" => "/"
        ]);
    });

    // Generic previews
    Route::get('/preview/{slug}/{page?}/{pageId?}',
      [
        "uses" => "PreviewController@loadPreview",
        "page" => "home"
    ]);

    // Quick
    Route::get('/quick', function() {
        return view('rockyeastman.quick')->with('path', 'rockyeastman');
    });

};
Route::group(['domain' => 'rockyeastman.com'], $rockyeastman);
Route::group(['domain' => 'rockyeastman.local'], $rockyeastman);
