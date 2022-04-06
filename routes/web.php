<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ShowFrontsideController;
use App\Http\Controllers\StagingDomainController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::get('/test', TestController::class);
Route::get('/pull', StagingDomainController::class);

if (!Schema::hasTable('users'))
    return;


Route::prefix(LaravelLocalization::setLocale())->group(function () {
    Route::middleware(['localization'])->group(function () {
        /**
         * This list of all routes should be manually kept  sync with frontside's routes.js.
         * We can use route name to inject appropriate data before rendering the frontside.
         **/
        foreach (ShowFrontsideController::getRoutePathsAndNames() as $path => $name) {
            Route::get($path, ShowFrontsideController::class)->name($name)/* ->middleware('prerender'); */;
        }

        Route::fallback([ShowFrontsideController::class, 'notFound'])->name(404);
    });
});
