<?php

namespace Alura\Pdo\Infrastructure\Persistence;

use PDO;

class ConnectionCreator
{
    public static function createConnection(): \PDO
    {
        $databaseAbsolutePath = __DIR__ . '/../../../database.sqlite';
        $pdo = new PDO('sqlite:' . $databaseAbsolutePath);

        return $pdo;
    }
}