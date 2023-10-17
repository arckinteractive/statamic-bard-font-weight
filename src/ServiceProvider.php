<?php

namespace Arckinteractive\StatamicBardFontWeight;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/arckinteractive-bard-font-weight.js',
    ];
    
    protected $stylesheets = [
        __DIR__.'/../dist/css/arckinteractive-bard-font-weight.css'
    ];

    protected $publishables = [

    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addExtension('ArckFontWeight', new ArckFontWeight);

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/arckinteractive-bard-font-weight'),
        ], 'arckinteractive-bard-font-weight');
    }
}
