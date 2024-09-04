<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    public function test(): Response
    {
        return Inertia::render('Dashboard/Home');
    }
}
