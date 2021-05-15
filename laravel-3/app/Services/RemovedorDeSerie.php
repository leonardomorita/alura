<?php
namespace App\Services;

use App\{Serie, Temporada, Episodio};
use App\Events\SerieApagada;
use App\Jobs\ApagarCapaSerie;
use Illuminate\Support\Facades\DB;
use Storage;

class RemovedorDeSerie
{
    public function removerSerie(int $serieId): string
    {
        $nomeSerie = '';
        DB::transaction(function () use ($serieId, &$nomeSerie) {
            $serie = Serie::find($serieId);
            $objetoSerie = (object) $serie->toArray();

            $nomeSerie = $serie->nome;

            $this->removerTemporadas($serie);
            $serie->delete();

            // $evento = new SerieApagada($objetoSerie);
            // event($evento);

            ApagarCapaSerie::dispatch($objetoSerie);
        });

        return $nomeSerie;
    }

    /**
     * @param $serie
     */
    private function removerTemporadas(Serie $serie): void
    {
        $serie->temporadas->each(function (Temporada $temporada) {
            $this->removerEpisodios($temporada);
            $temporada->delete();
        });
    }

    /**
     * @param Temporada $temporada
     */
    private function removerEpisodios(Temporada $temporada): void
    {
        $temporada->episodios->each(function (Episodio $episodio) {
            $episodio->delete();
        });
    }
}
