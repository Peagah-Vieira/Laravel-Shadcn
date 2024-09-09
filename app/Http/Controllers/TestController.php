<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    public function profile(): Response
    {
        return Inertia::render('Dashboard/Profile/General');
    }

    public function profile_security(): Response
    {
        return Inertia::render('Dashboard/Profile/Security');
    }

    public function profile_advanced(): Response
    {
        return Inertia::render('Dashboard/Profile/Advanced');
    }

    public function home(): Response
    {
        return Inertia::render('Dashboard/Home');
    }

    public function users(): Response
    {
        return Inertia::render('Dashboard/Users', [
            'users' => User::all(),
        ]);
    }

    public function categories(): Response
    {
        return Inertia::render('Dashboard/Categories', [
            'categories' => Category::all(),
        ]);
    }

    /**
     * Handle an incoming category_store request.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function category_store(Request $request): RedirectResponse
    {
        Category::create([
            'category_name' => $request->category_name,
        ]);

        return redirect()->back();
    }

    /**
     * Update a category and redirect.
     *
     * @param Request $request
     * @param Category $category
     * @return RedirectResponse
     */
    public function category_update(Request $request, Category $category): RedirectResponse
    {
        $category->update([
            'category_name' => $request->category_name,
        ]);

        return redirect()->back();
    }

    /**
     * Delete a category and redirect.
     *
     * @param Category $category
     */
    public function category_destroy(Category $category): RedirectResponse
    {
        $category->delete();

        return redirect()->back();
    }
}
