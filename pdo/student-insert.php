<?php

use Alura\Pdo\Domain\Model\Student;

require_once 'vendor/autoload.php';

$databaseAbsolutePath = __DIR__ . '/database.sqlite';
$pdo = new PDO('sqlite:' . $databaseAbsolutePath);

$student = new Student(null, "Student 6", new \DateTimeImmutable('2000-02-17'));

// Comando de inserção inseguro
// $insert = "INSERT INTO students (name, birth_date) VALUES ('{$student->name()}', '{$student->birthDate()->format('Y-m-d')}');";

// Comando de inserção com parâmetros
$insert = "INSERT INTO students (name, birth_date) VALUES (?, ?);";
$statement = $pdo->prepare($insert);

// bindValue -> passa apenas o valor da variável
// bindParam -> passa a referência (variável), ou seja, caso modificar o valor da referência antes de executar o statement, será modificado o valor que foi passado a instrução
$statement->bindValue(1, $student->name());
$statement->bindValue(2, $student->birthDate()->format('Y-m-d'));

$result = $statement->execute();

// // exec() -> retorna o números de registros afetados por determinado comando executado
// var_dump($pdo->exec($insert));

if ( $result ) {
    echo "O aluno foi adicionado.";
}