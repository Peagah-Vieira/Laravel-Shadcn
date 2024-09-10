<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Content;
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

    public function contents(): Response
    {
        return Inertia::render('Dashboard/Contents', [
            'contents' => Content::all(),
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
     * Handle an incoming content_store request.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function content_store(Request $request): RedirectResponse
    {
        Content::create([
            'content_title' => $request->content_title,
            'content_description' => $request->content_description,
            'content_type' => $request->content_type,
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
     * Update a content and redirect.
     *
     * @param Request $request
     * @param Content $content
     * @return RedirectResponse
     */
    public function content_update(Request $request, Content $content): RedirectResponse
    {
        $content->update([
            'content_title' => $request->content_title,
            'content_description' => $request->content_description,
            'content_type' => $request->content_type,
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

    /**
     * Delete a content and redirect.
     *
     * @param Content $content
     */
    public function content_destroy(Content $content): RedirectResponse
    {
        $content->delete();

        return redirect()->back();
    }
}
