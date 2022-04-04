<?php

namespace App\Http\Controllers;

use App\Vite;
use Exception;
use SeoAnalyzer\Analyzer;
use Illuminate\Http\Request;
use App\Models\PortfolioItem;
use App\Traits\IsSimpleAction;
use App\Actions\GetInjectables;
use MadeITBelgium\SeoAnalyzer\Seo;
use Illuminate\Support\Facades\Storage;
use App\Actions\MovePortfolioFilesFromGitignoredToKnownPath;

class TestController
{

    public function __invoke(Request $request)
    {
        return [new GetInjectables];
    }
}
