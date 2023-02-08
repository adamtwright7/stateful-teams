import React from "react";
import StudentBinary from "./StudentBinary";

export default function BinaryBots({
  binaryStudents,
  setBinaryStudents,
  setBCStudents,
  setDefaultStudents,
}) {
  return (
    <div className="binarybots">
      <h1>Binary Bots</h1>

      {binaryStudents?.map((student) => (
        <StudentBinary
          student={student}
          setBinaryStudents={setBinaryStudents}
          setBCStudents={setBCStudents}
          setDefaultStudents={setDefaultStudents}
        />
      ))}
    </div>
  );
}
