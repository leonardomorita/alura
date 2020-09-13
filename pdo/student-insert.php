<?php

use Alura\Pdo\Domain\Model\Student;

require_once 'vendor/autoload.php';

$databaseAbsolutePath = __DIR__ . '/database.sqlite';
$pdo = new PDO('sqlite:' . $databaseAbsolutePath);

$student = new Student(null, 'Student 1', new \DateTimeImmutable('2000-02-17'));
$insert = "INSERT INTO students (name, birth_date) VALUES ('{$student->name()}', '{$student->birthDate()->format('Y-m-d')}');";
// exec() -> retorna o números de registros afetados por determinado comando executado
var_dump($pdo->exec($insert));