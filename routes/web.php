<?php
/*
* Rocky Eastman
*
* rockyeastman.com
*/
$rockyeastman = function() {

    Route::get('/', function() {
        return view('rockyeastman.home')->with('path', 'rockyeastman');
    });

    Route::get('/invitations/view', 'InvitationsController@viewEmail');
    Route::get('/invitations', function() {
        return view('rockyeastman.invitations')->with('path', 'rockyeastman');
    });

    Route::get('/login', function() {
        return view('rockyeastman.login')->with('path', 'rockyeastman');
    });

    Route::get('/previews/{slug}/{page?}',
      [
        "uses" => "PreviewController@loadPreview",
        "page" => "home"
    ]);

};
Route::group(['domain' => 'rockyeastman.com'], $rockyeastman);
Route::group(['domain' => 'rockyeastman.local'], $rockyeastman);
