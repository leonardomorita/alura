<?php

namespace App\Providers;

use App\Events\NovaSerie;
use App\Events\SerieApagada;
use App\Listeners\ApagarCapaSerie;
use App\Listeners\EnviarEmailNovaSerie;
use App\Listeners\LogNovaSerie;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        NovaSerie::class => [
            EnviarEmailNovaSerie::class,
            LogNovaSerie::class
        ],
        // SerieApagada::class => [
        //     ApagarCapaSerie::class
        // ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
