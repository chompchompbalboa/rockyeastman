<?php

use Illuminate\Http\Request;

/*
* User
*
* An example of the 
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
* Rocky Eastman
*
* rockyeastman.com
*/
$rockyeastman = function() {

    Route::get('/invitations/businesses', 'BusinessController@index');
    Route::get('/invitations/businesses/uploaded', 'BusinessController@getUploaded');
    Route::get('/invitations/businesses/built', 'BusinessController@getBuilt');
    Route::put('/invitations/businesses/next', 'BusinessController@getNext');
    Route::put('/invitations/businesses/{business}', 'BusinessController@update');
    Route::get('/invitations/businesses/{business}/seed', 'BusinessController@getSeed');

    Route::get('/invitations/send/email-defaults', 'InvitationsController@getEmailDefaults');
    Route::put('/invitations/send/schedule-email', 'InvitationsController@scheduleEmail');
};
Route::group(['domain' => 'rockyeastman.com'], $rockyeastman);
Route::group(['domain' => 'rockyeastman.local'], $rockyeastman);
