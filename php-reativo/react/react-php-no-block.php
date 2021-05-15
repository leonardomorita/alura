<?php

use React\EventLoop\Factory;
use React\Stream\DuplexResourceStream;
use React\Stream\ReadableResourceStream;

require_once '../vendor/autoload.php';

$loop = Factory::create();

$listaDeStream = [
    new ReadableResourceStream(stream_socket_client('tcp://localhost:8003'), $loop),
    new ReadableResourceStream(fopen('../arquivos/arquivo1.txt', 'r'), $loop),
    new ReadableResourceStream(fopen('../arquivos/arquivo2.txt', 'r'), $loop),
];

$duplexStream = new DuplexResourceStream(stream_socket_client('tcp://localhost:8001'), $loop);
$duplexStream->write('GET /http-server.php HTTP/1.1' . PHP_EOL . PHP_EOL);
$duplexStream->on('data', function (string $data) {
    $posicaoFimHTTP = strpos($data, "\r\n\r\n");
    echo substr($data, $posicaoFimHTTP + 4);
});

foreach ($listaDeStream as $stream) {
    $stream->on('data', function (string $data) {
        echo $data . PHP_EOL;
    });
}

$loop->run();
