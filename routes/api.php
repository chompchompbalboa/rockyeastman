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

    Route::get('/quick/initial-data', 'QuickController@initialData');
    Route::put('/quick/save', 'QuickController@save');
    Route::put('/quick/status/{status}/{business}', 'QuickController@updateStatus');

    Route::any('/editor/initial-data', 'EditorController@getInitialData');
    Route::any('/editor/save/{preview?}', 'EditorController@saveData');

    Route::any('/preview/initial-data', 'PreviewController@getPreviewData');
};
Route::group(['domain' => 'rockyeastman.com'], $rockyeastman);
Route::group(['domain' => 'rockyeastman.local'], $rockyeastman);
