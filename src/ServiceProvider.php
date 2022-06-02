<?php

namespace Arckinteractive\StatamicBardFontWeight;

use Illuminate\Support\Facades\Artisan;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/arckinteractive-bard-font-weight.js',
    ];
    
    protected $stylesheets = [
        __DIR__.'/../dist/css/arckinteractive-bard-font-weight.css'
    ];

    protected $publishables = [];

    public function boot()
    {
        parent::boot();

        Augmentor::addExtension('ArckfontWeight', new ArckFontWeight());

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/arckinteractive-bard-font-weight'),
        ], 'arckinteractive-bard-font-weight');

        Statamic::afterInstalled(function() {
            Artisan::call('vendor:publish --tag=arckinteractive-bard-font-weight');
        });
    }
}
