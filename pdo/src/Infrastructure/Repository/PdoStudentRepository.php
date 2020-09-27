<?php

namespace Pdo\Alura\Infrastructure\Repository;

use Alura\Pdo\Domain\Model\Student;
use Alura\Pdo\Domain\Repository\StudentRepository;
use PDO;

class PdoStudentRepository implements StudentRepository
{
    private $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function allStudents(): array
    {
        return $this->hydrateStudentList($this->connection->query('SELECT * FROM students;'));
    }

    public function studentsBirthAt(\DateTimeInterface $birthDate): array
    {
        $select = "SELECT * FROM students WHERE birth_date = ?";
        $statement = $this->connection->prepare($select);
        $statement->bindValue(1, $birthDate->format('Y-m-d'));
        $statement->execute();
        
        return $this->hydrateStudentList($statement);
    }

    private function hydrateStudentList(\PDOStatement $statement): array
    {
        $studentInfoList = $statement->fetchAll(PDO::FETCH_ASSOC);

        $studentList = [];
        foreach ( $studentInfoList as $studentInfo ) {
            $studentList[] = new Student($studentInfo['id'], $studentInfo['name'], new \DateTimeImmutable($studentInfo['birth_date']));
        }

        return $studentList;
    }

    public function save($student): bool
    {
        $insert = "INSERT INTO students (name, birth_date) VALUES (?, ?);";
        $statement = $this->connection->prepare($insert);
        $statement->bindValue(1, $student->name());
        $statement->bindValue(2, $student->birthDate()->format('Y-m-d'));

        $result = $statement->execute();
        if ( !$result ) {
            return false;
        }
        return true;
    }

    public function update($id, Student $student): bool
    {
        $statement = $this->connection->prepare('SELECT * FROM students WHERE id = ?;');
        $statement->bindValue(1, $id, PDO::PARAM_INT);
        
        if ( $statement->execute() ) {
            $statementUpdate = $this->connection->prepare('UPDATE students SET name = ?, birth_date = ? WHERE id = ?');
            $statementUpdate->bindValue(1, $student->name());
            $statementUpdate->bindValue(2, $student->birthDate());
            $statementUpdate->bindValue(3, $id, PDO::PARAM_INT);
            
            if ( !$statementUpdate->execute() ) {
                return false;
            }
            return true;
        }

        return false;
    }

    public function remove($student): bool
    {
        $delete = 'DELETE FROM students WHERE id = ?;';
        $statement = $this->connection->prepare($delete);
        $statement->bindValue(1, $student->id, PDO::PARAM_INT);
        
        $result =  $statement->execute();
        if ( !$result ) {
            return false;
        }
        return true;
    }
}