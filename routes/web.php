<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::controller(TestController::class)->group(function () {
        // GET ROUTES
        Route::get('dashboard', 'home')->name('dashboard');
        Route::get('dashboard/users', 'users')->name('dashboard.users');
        Route::get('dashboard/categories', 'categories')->name('dashboard.categories');
        Route::get('dashboard/contents', 'contents')->name('dashboard.contents');

        // POST ROUTES
        Route::post('dashboard/categories', 'category_store')->name('category.store');
        Route::post('dashboard/contents', 'content_store')->name('content.store');

        // PUT|PATCH ROUTES
        Route::put('dashboard/categories/{category}', 'category_update')->name('category.update');
        Route::patch('dashboard/contents/{content}', 'content_update')->name('content.update');

        // DELETE ROUTES
        Route::delete('dashboard/categories/{category}', 'category_destroy')->name('category.destroy');
        Route::delete('dashboard/contents/{content}', 'content_destroy')->name('content.destroy');
    });

    Route::controller(ProfileController::class)->group(function () {
        // GET ROUTES
        Route::get('dashboard/profile', 'profile')->name('profile');
        Route::get('dashboard/profile/security', 'profile_security')->name('profile.security');
        Route::get('dashboard/profile/advanced', 'profile_advanced')->name('profile.advanced');

        // PUT|PATCH ROUTES
        Route::patch('dashboard/profile/update', 'update')->name('profile.update');

        // DELETE ROUTES
        Route::delete('dashboard/profile/destroy', 'destroy')->name('profile.destroy');
    });
});

require __DIR__ . '/auth.php';
