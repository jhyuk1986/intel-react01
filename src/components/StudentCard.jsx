import React from "react";

function StudentCard({ student }) {
  return (
    <article className="score-card">
      <p>이름 : {student.name}</p>
      <p>
        점수 : {student.score} {student.score > 90 && "🏆"}
      </p>
    </article>
  );
}

export default StudentCard;
