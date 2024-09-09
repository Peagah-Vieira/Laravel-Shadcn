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
        Route::get('dashboard/users', 'users');
        Route::get('dashboard/categories', 'categories');
    });

    Route::controller(ProfileController::class)->group(function () {
        // GET ROUTES
        Route::get('dashboard/profile', 'profile')->name('profile');
        Route::get('dashboard/profile/security', 'profile_security')->name('profile.security');
        Route::get('dashboard/profile/advanced', 'profile_advanced')->name('profile.advanced');

        // POST ROUTES
        Route::post('test/categories', 'category_store')->name('category.store');

        // PUT|PATCH ROUTES
        Route::put('test/categories/{category}', 'category_update')->name('category.update');
        Route::patch('dashboard/profile/update', 'update')->name('profile.update');

        // DELETE ROUTES
        Route::delete('dashboard/profile/destroy', 'destroy')->name('profile.destroy');
        Route::delete('test/categories/{category}', 'category_destroy')->name('category.destroy');
    });
});

require __DIR__ . '/auth.php';
