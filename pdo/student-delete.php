<?php

use Alura\Pdo\Infrastructure\Persistence\ConnectionCreator;

require_once 'vendor/autoload.php';

$pdo = ConnectionCreator::createConnection();

$delete = 'DELETE FROM students WHERE id = ?;';
$statement = $pdo->prepare($delete);
$statement->bindValue(1, 2, PDO::PARAM_INT);
$statement->execute();