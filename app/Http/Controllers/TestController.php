<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Dashboard/Users');
    }
}
