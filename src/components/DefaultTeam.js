import React from "react";
import StudentDefault from "./StudentDefault";

export default function DefaultTeam({
  defaultStudents,
  setBinaryStudents,
  setBCStudents,
  setDefaultStudents,
}) {
  return (
    <div className="defaultteam">
      <h1>Default</h1>

      {defaultStudents?.map((student) => (
        <StudentDefault
          student={student}
          setBinaryStudents={setBinaryStudents}
          setBCStudents={setBCStudents}
          setDefaultStudents={setDefaultStudents}
        />
      ))}
    </div>
  );
}
