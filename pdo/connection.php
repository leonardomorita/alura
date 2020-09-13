<?php

$databaseAbsolutePath = __DIR__ . '/database.sqlite';
$pdo = new PDO('sqlite:' . $databaseAbsolutePath);

echo "Connection is OK";