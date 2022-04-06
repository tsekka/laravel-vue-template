<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actions\GetInjectables;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Response;

use App\Actions\GetDynamicallyCreatedRoutes;

class ShowFrontsideController extends Controller
{


    public static function getRoutePathsAndNames(): array
    {
        $staticRoutes = [
            '/' => 'Home',
            'products' => 'Products',
            'requisition' => 'Requisition',
            'offerings' => 'Offerings',
        ];

        return array_merge(
            $staticRoutes,
            (new GetDynamicallyCreatedRoutes)->handle(),
        );
    }

    public function __invoke(Request $request)
    {
        return Response::view('frontside', $this->getViewProperties());
    }

    public function notFound(Request $request)
    {
        return Response::view('frontside', $this->getViewProperties(), 404);
    }

    private function getViewProperties()
    {
        return [
            'injectables' => (new GetInjectables)->handle(),
            'routePrefix' => $this->getRoutePrefix()
        ];
    }

    private function getRoutePrefix()
    {
        return App::getLocale() === config('business.default_locale')
            ? '/'
            : '/' . App::getLocale() . '/';
    }
}
