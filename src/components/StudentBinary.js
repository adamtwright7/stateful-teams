import React from "react";

export default function StudentBinary({
  student,
  setBinaryStudents,
  setBCStudents,
  setDefaultStudents,
}) {
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
        <button className="button-24" onClick={() => BCCrewButton()}>
          BC Crew
        </button>
      </div>
    </div>
  );
}
