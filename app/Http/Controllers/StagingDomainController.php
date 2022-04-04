<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StagingDomainController extends Controller
{

    public function __invoke(Request $request)
    {
        if (config('app.env') !== 'staging') return;
        exec('git fetch && git pull');
        return redirect()->route('Home');
    }
}
