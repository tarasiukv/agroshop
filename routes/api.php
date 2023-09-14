<?php

use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\CategoryController;
use App\Http\Controllers\Api\v1\ImagesController;
use App\Http\Controllers\Api\v1\ProductsController;
use App\Http\Controllers\Api\v1\UsersController;
use Illuminate\Support\Facades\Route;

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
Route::resource('users', UsersController::class);
//Route::resource('products', ProductsController::class);
//Route::resource('categories', CategoryController::class);


Route::get('categories', [CategoryController::class, 'index']);
Route::get('categories/{category}', [CategoryController::class, 'show']);

Route::get('products', [ProductsController::class, 'index']);
Route::get('products/{product}', [ProductsController::class, 'show']);

Route::group(['middleware' => 'auth'], function ($router) {
    Route::get('categories/create', [CategoryController::class, 'create']);
    Route::post('categories', [CategoryController::class, 'store']);
    Route::get('categories/{category}/edit', [CategoryController::class, 'edit']);
    Route::put('categories/{category}', [CategoryController::class, 'update']);
    Route::delete('categories/{category}', [CategoryController::class, 'destroy']);

    Route::get('products/create', [ProductsController::class, 'create']);
    Route::post('products', [ProductsController::class, 'store']);
    Route::get('products/{product}/edit', [ProductsController::class, 'edit']);
    Route::put('products/{product}', [ProductsController::class, 'update']);
    Route::delete('products/{product}', [ProductsController::class, 'destroy']);
});


/** Auth route with JWT */
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

