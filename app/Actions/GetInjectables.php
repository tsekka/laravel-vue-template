<?php

namespace App\Actions;

class GetInjectables
{
    public array $data = [];
    public string|null $route;

    public function handle(): array
    {
        $this->data['env'] = config('app.env');
        $this->route = request()->route()->getName();
        $this->data['page_routes'] = (new GetDynamicallyCreatedRoutes)->indexForFrontend();

        return $this->data;
    }
}
