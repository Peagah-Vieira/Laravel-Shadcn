<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('test', [TestController::class, 'home']);
Route::get('test/profile', [TestController::class, 'profile'])->name('profile');
Route::get('test/profile/security', [TestController::class, 'profile_security'])->name('profile.security');
Route::get('test/profile/advanced', [TestController::class, 'profile_advanced'])->name('profile.advanced');
Route::get('test/users', [TestController::class, 'users']);
Route::get('test/categories', [TestController::class, 'categories']);
Route::post('test/categories', [TestController::class, 'category_store'])->name('category.store');
Route::match(['PUT', 'PATCH'], 'test/categories/{category}', [TestController::class, 'category_update'])->name('category.update');
Route::delete('test/categories/{category}', [TestController::class, 'category_destroy'])->name('category.destroy');

require __DIR__ . '/auth.php';
