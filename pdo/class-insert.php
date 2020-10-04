<?php

use Alura\Pdo\Domain\Model\Student;
use Alura\Pdo\Infrastructure\Persistence\ConnectionCreator;
use Pdo\Alura\Infrastructure\Repository\PdoStudentRepository;

require_once __DIR__ . '/vendor/autoload.php';

$connection = ConnectionCreator::createConnection();
$studentRepository = new PdoStudentRepository($connection);

$connection->beginTransaction();

$aStudent = new Student(
    null,
    'A',
    new DateTimeImmutable('1990-02-01')
);
$studentRepository->save($aStudent);

$bStudent = new Student(
    null,
    'B',
    new DateTimeImmutable('1990-02-01')
);
$studentRepository->save($bStudent);

$connection->commit();