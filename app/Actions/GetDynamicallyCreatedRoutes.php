<?php

namespace App\Actions;

use Illuminate\Database\Eloquent\Collection as ElequentCollection;;

class GetDynamicallyCreatedRoutes
{
    private ElequentCollection|null $pages = null;

    public function handle(): array
    {
        return $this->toSimpleArray();
    }

    public function toSimpleArray(): array
    {
        $results = [];
        foreach ($this->getPages() as $page) {
            $results['/' . $page->slug] = $page->title;
        }

        return $results;
    }

    public function indexForFrontend(): array
    {
        $results = [];

        foreach ($this->getPages() as $page) {
            $results['/' . $page->slug] = [
                'title' => $page->title,
                'slug' => $page->slug,
            ];
        }

        return $results;
    }

    public function getPages(): ElequentCollection
    {
        if ($this->pages !== null)
            return $this->pages;

        $this->pages = /* Schema::hasTable('pages')
            ? Page::orderBy('position')->get()
            : */ new ElequentCollection();
        return $this->pages;
    }
}
