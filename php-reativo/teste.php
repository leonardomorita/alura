<?php

use GuzzleHttp\Client;

require_once 'vendor/autoload.php';

$cliente = new Client();

$resposta1 = $cliente->get('http://localhost:8001/http-server.php');
$resposta2 = $cliente->get('http://localhost:8002/http-server.php');

echo 'Resposta 1: ' . $resposta1->getBody()->getContents();
echo 'Resposta 2: ' . $resposta2->getBody()->getContents();