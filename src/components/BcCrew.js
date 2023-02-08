import React from "react";
import StudentBC from "./StudentBC";

export default function BcCrew({
  BCStudents,
  setBinaryStudents,
  setBCStudents,
  setDefaultStudents,
}) {
  return (
    <div className="bc-crew">
      <h1>BC Crew</h1>

      {BCStudents?.map((student) => (
        <StudentBC
          student={student}
          setBinaryStudents={setBinaryStudents}
          setBCStudents={setBCStudents}
          setDefaultStudents={setDefaultStudents}
        />
      ))}
    </div>
  );
}
