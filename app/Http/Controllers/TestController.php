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
     * Handle an incoming Category Store request.
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
     * Delete a category and redirect.
     */
    public function category_destroy(Category $category)
    {
        $category->delete();

        return redirect()->back();
    }
}
