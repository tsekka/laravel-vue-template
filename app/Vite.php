<?php

namespace App;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;

class Vite
{
    public string $basePath = 'build/';
    public string $manifestPath = 'build/manifest.json';
    private $manifestCache = null;
    private string $separator = "\n  ";


    public static function assets(string $developmentHost = 'localhost'): HtmlString
    {
        $devServerIsRunning = false;
        $devServerIsTypescript = false;

        if (app()->environment('local') || app()->environment('staging')) {
            try {
                Http::get("http://{$developmentHost}:3000");
                $devServerIsRunning = true;
                try {
                    $devServerIsTypescript = Http::get("http://{$developmentHost}:3000/src/main.ts")->status() === 200;
                } catch (\Exception $e) {
                }
            } catch (\Exception $e) {
            }
        }

        if ($devServerIsRunning) {
            $extension = $devServerIsTypescript ? 'ts' : 'js';
            return new HtmlString(<<<HTML
          <script type="module" src="http://{$developmentHost}:3000/@vite/client"></script>
          <script type="module" src="http://{$developmentHost}:3000/src/main.{$extension}"></script>
        HTML);
        }

        $manifest = json_decode(file_get_contents(
            public_path('build/manifest.json')
        ), true);

        $isTypescript = array_key_exists('src/main.ts', $manifest);
        if ($isTypescript) {
            $manifestItem = 'src/main.ts';
        } else {
            $manifestItem = 'src/main.js';
        }
        $html = (new Self)->embed($manifestItem);
        return new HtmlString(<<<HTML
        {$html}
        HTML);
    }


    public function embed(string $entry): string
    {
        return implode($this->separator, [
            $this->cssImports($entry), $this->jsImports($entry), $this->jsPreloadImports($entry)
        ]);
    }

    private function getManifest(): array
    {
        if ($this->manifestCache) {
            return $this->manifestCache;
        }

        $content = file_get_contents(public_path($this->manifestPath));

        $this->manifestCache = json_decode($content, true);

        return $this->manifestCache;
    }

    private function jsImports(string $entry): string
    {
        $url = $this->productionAsset($entry);

        if (!$url) {
            return '';
        }
        return "<script type=\"module\" src=\"$url\"></script>";
    }

    private function jsPreloadImports(string $entry): string
    {
        $res = '';
        foreach ($this->preloadUrls($entry) as $url) {
            $res .= "<link rel=\"modulepreload\" href=\"$url\">";
        }
        return $res;
    }

    private function preloadUrls(string $entry): array
    {
        $urls = [];
        $manifest = $this->getManifest();

        if (!empty($manifest[$entry]['imports'])) {
            foreach ($manifest[$entry]['imports'] as $imports) {
                $urls[] = $this->asset($manifest[$imports]['file']);
            }
        }
        return $urls;
    }

    private function cssImports(string $entry): string
    {
        $tags = '';
        foreach ($this->cssUrls($entry) as $url) {
            $tags .= "<link rel=\"stylesheet\" href=\"$url\">";
        }
        foreach ($this->importCssUrls($entry) as $url) {
            $tags .= "<link rel=\"stylesheet\" href=\"$url\">";
        }
        return $tags;
    }

    private function cssUrls(string $entry): array
    {
        $urls = [];
        $manifest = $this->getManifest();

        if (!empty($manifest[$entry]['css'])) {
            foreach ($manifest[$entry]['css'] as $file) {
                $urls[] = $this->asset($file);
            }
        }
        return $urls;
    }

    private function importCssUrls(string $entry): array
    {
        $urls = [];
        $manifest = $this->getManifest();
        if (empty($manifest[$entry]['imports'])) return [];

        foreach ($manifest[$entry]['imports'] as $import) {
            $urls = array_merge($urls, $this->cssUrls($import));
        }
        return $urls;
    }

    private function productionAsset(string $entry): string
    {
        $manifest = $this->getManifest();
        if (!isset($manifest[$entry])) {
            return '';
        }

        return $this->asset($manifest[$entry]['file']);
    }

    private function asset(string $file): string
    {
        return asset($this->basePath . $file);
    }
}
