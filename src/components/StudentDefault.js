import React from "react";

export default function StudentDefault({
  student,
  setBinaryStudents,
  setBCStudents,
  setDefaultStudents,
}) {
  const binaryBotsButton = () => {
    setBinaryStudents((binaryStudents) => [...binaryStudents, student]); // add the clicked student to the binary students list
    // remove the clicked student from the default list
    setDefaultStudents((defaultStudents) =>
      defaultStudents.filter((ele) => ele !== student)
    );
    setBCStudents((BCStudents) => BCStudents.filter((ele) => ele !== student));
  };

  const BCCrewButton = () => {
    setBCStudents((BCStudents) => [...BCStudents, student]);
    setDefaultStudents((defaultStudents) =>
      defaultStudents.filter((ele) => ele !== student)
    );
    setBinaryStudents((binaryStudents) =>
      binaryStudents.filter((ele) => ele !== student)
    );
  };

  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button className="button-24" onClick={() => binaryBotsButton()}>
          Binary Bots
        </button>
        <button className="button-24" onClick={() => BCCrewButton()}>
          BC Crew
        </button>
      </div>
    </div>
  );
}
