<?php

namespace Alura\Pdo\Domain\Repository;

interface StudentRepository
{
    public function allStudents(): array;
    public function studentsBirthAt(\DateTimeInterface $birthDate): array;
    public function save($student): bool;
    public function remove($student): bool;
}