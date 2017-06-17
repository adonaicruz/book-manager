<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function() use ($app) {
    return "Helous Mundis";
});
 
 
$app->group(['prefix' => 'api/v1'], function($app)
{
    $app->get('loan','LoanController@index');
  
    $app->get('loan/{id}','LoanController@get');
      
    $app->post('loan','LoanController@create');
      
    $app->put('loan/{id}','LoanController@update');
      
    $app->delete('loan/{id}','LoanController@delete');


    $app->get('book','BookController@index');
  
    $app->get('book/{id}','BookController@getbook');
      
    $app->post('book','BookController@createBook');
      
    $app->put('book/{id}','BookController@updateBook');
      
    $app->delete('book/{id}','BookController@deleteBook');
});