<?php

namespace App\Listeners;

use App\Events\NovaSerie;
use App\User;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class EnviarEmailNovaSerie implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NovaSerie  $event
     * @return void
     */
    public function handle(NovaSerie $event)
    {
        $usuarios = User::all();

        foreach ($usuarios as $indice => $usuario)
        {
            $multiplicador = $indice + 1;

            $email = new \App\Mail\NovaSerie(
                $event->nomeSerie,
                $event->quantidadeTemporadas,
                $event->quantidadeEpisodiosTemporada
            );

            $email->subject = 'Nova Série Adicionada';
            $quando = now()->addSecond($multiplicador * 10);

            \Illuminate\Support\Facades\Mail::to($usuario)->later(
                $quando,
                $email
            );
        }
    }
}
