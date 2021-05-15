<?php

use Alura\Pdo\Domain\Model\Student;
use Alura\Pdo\Infrastructure\Persistence\ConnectionCreator;

require_once 'vendor/autoload.php';

$pdo = ConnectionCreator::createConnection();

$pdoStatement = $pdo->query('SELECT * FROM students;');
// Retorna os registros encontrados dentro de um array que contém com índice com nomes (associativo) e números (índice) ao executar o comando
// $studentList = $pdoStatement->fetchAll();

// Retorna os registros encontrados dentro de um array associativo; Instanciar cada registro retornado do banco para um array; Forma 1
$studentInfoList = $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
$studentList = [];
foreach ( $studentInfoList as $studentInfo ) {
    $studentList[] = new Student($studentInfo['id'], $studentInfo['name'], new DateTimeImmutable($studentInfo['birth_date']));
}

// Retornar uma coluna específica da tabela
// var_dump($pdoStatement->fetchColumn(1)); exit;

// Retorna um registro por vez; Instanciar esse registro retornado; Forma 2 - Quando no banco de dados tiver muitos dados, assim, podendo comprometer a memória
// while ( $studentInfo = $pdoStatement->fetch(PDO::FETCH_ASSOC) ) {
//     $student = new Student($studentInfo['id'], $studentInfo['name'], new DateTimeImmutable($studentInfo['birth_date']));

//     echo $student->age() . PHP_EOL;
// }

var_dump($studentList);