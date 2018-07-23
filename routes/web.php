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

    // Login
    Route::get('/login', function() {
        return view('rockyeastman.login')->with('path', 'rockyeastman');
    });

    // Editor
    Route::get('/editor/{slug?}', function() {
        return view('rockyeastman.editor')->with('path', 'rockyeastman');
    });

    // Specific previews
    Route::get('/preview/schurman-law/{page?}', function() {
        return view('schurman-law.react')->with([
          "path" => "schurman-law",
          "assetsPath" => "/assets/schurman-law",
          "urlPath" => "/"
        ]);
    });

    // Generic previews
    Route::get('/preview/{slug}/{page?}/{pageId?}', function() {
        return view('rockyeastman.preview')->with('path', 'rockyeastman');
    });

    // Quick
    Route::get('/quick', function() {
        return view('rockyeastman.quick')->with('path', 'rockyeastman');
    });

};
Route::group(['domain' => 'rockyeastman.com'], $rockyeastman);
Route::group(['domain' => 'rockyeastman.local'], $rockyeastman);
