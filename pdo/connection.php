<?php

$databaseAbsolutePath = __DIR__ . '/database.sqlite';
$pdo = new PDO('sqlite:' . $databaseAbsolutePath);

echo "Connection is OK";

$pdo->exec('CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, birth_date TEXT);');