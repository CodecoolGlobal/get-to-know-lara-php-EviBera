<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\RegistrationController;
use App\Models\Mail;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function(){
     Route::post('/mail/compose', [MailController::class, 'store']);

});

    //Route::get('/registration',);
    Route::post('/registration', [RegistrationController::class, 'register']);

    Route::post('/login',[UserController::class,'index']);

    Route::get('/mail/inbox', [MailController::class, 'index']);
    Route::get('/mail/sent', [MailController::class, 'getOutgoingMail']);

    Route::get('/mail/view/{id}', [MailController::class, 'show']);
    Route::patch('/mail/mark-as-unread/{id}', [MailController::class, 'update']);

