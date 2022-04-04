<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actions\GetInjectables;
use Illuminate\Support\Facades\Response;
use App\Actions\GetDynamicallyCreatedRoutes;

class ShowFrontsideController extends Controller
{

    public static function getRoutePathsAndNames(): array
    {
        $staticRoutes = [
            '/' => 'Home',
            '/listing/{slug}' => 'PortfolioItem',
        ];

        return array_merge(
            $staticRoutes,
            (new GetDynamicallyCreatedRoutes)->handle(),
        );
    }

    public function __invoke(Request $request)
    {
        return view(
            'frontside',
            [
                'injectables' => (new GetInjectables)->handle(),
            ]
        );
    }

    public static function notFound(Request $request)
    {
        return Response::view(
            'frontside',
            [
                'injectables' => (new GetInjectables)->handle(),
            ],
            404
        );
    }
    
}
