<?php

require_once 'vendor/autoload.php';

$databaseAbsolutePath = __DIR__ . '/database.sqlite';
$pdo = new PDO('sqlite:' . $databaseAbsolutePath);

$delete = 'DELETE FROM students WHERE id = ?;';
$statement = $pdo->prepare($delete);
$statement->bindValue(1, 2, PDO::PARAM_INT);
$statement->execute();