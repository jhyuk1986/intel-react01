import React from "react";
import StudentCard from "./StudentCard";

function StudentList() {
  const students = [
    { id: 1, name: "김철수", score: 85 },
    { id: 2, name: "이영희", score: 92 },
    { id: 3, name: "박민수", score: 78 },
    { id: 4, name: "정수진", score: 95 },
  ];

  return (
    <>
    <section className="score-board">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>

    <div>
      
    </div>
    </>
  );
}

export default StudentList;
