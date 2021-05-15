<?php
// IO não bloqueante

$listaDeStream = [
    stream_socket_client('tcp://localhost:8001'),
    stream_socket_client('tcp://localhost:8003'),
    fopen('arquivos/arquivo1.txt', 'r'),
    fopen('arquivos/arquivo2.txt', 'r'),
];

// Faz a requisição
fwrite($listaDeStream[0], 'GET /http-server.php HTTP/1.1' . PHP_EOL . PHP_EOL);

foreach ($listaDeStream as $stream) {
    // Usando o valor 'false', não vai ser bloqueado o processador
    stream_set_blocking($stream, false);
}

// O arquivo está pronto para ler?
// Padrão 'Event Loop'
do {
    $copiaListaStream = $listaDeStream; // cópia do array
    $numeroStreamsProntos = stream_select($copiaListaStream, $write, $except, 0, 200000);

    if ($numeroStreamsProntos === 0) {
        // Não tem nenhum stream pronto para ser lido, realiza outra tarefa
        continue;
    }

    foreach ($copiaListaStream as $chave => $stream) {
        $conteudo = stream_get_contents($stream);
        $posicaoFimCabecalhoHTTP = strpos($conteudo, "\r\n\r\n");
        if ($posicaoFimCabecalhoHTTP !== false) {
            echo substr($conteudo, $posicaoFimCabecalhoHTTP + 4);
        } else {
            echo $conteudo;
        }
        unset($listaDeStream[$chave]);
    }
} while (!empty($listaDeStream));

echo 'Li todos streams' . PHP_EOL;
