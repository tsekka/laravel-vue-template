<?php

namespace App\Actions;

use Illuminate\Support\Facades\App;

/** @typescript Injectables **/
class GetInjectables
{
    public string $env;
    public array $page_routes;

    public function __construct()
    {
        $this->page_routes = (new GetDynamicallyCreatedRoutes)->indexForFrontend();
        $this->env = config('app.env');
    }

    public function handle(): self
    {
        return $this;
    }
}
