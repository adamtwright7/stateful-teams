import BcCrew from "./BcCrew";
import BinaryBots from "./BinaryBots";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({
  defaultStudents,
  BCStudents,
  binaryStudents,
  setBinaryStudents,
  setBCStudents,
  setDefaultStudents,
}) {
  return (
    <>
      <BcCrew
        BCStudents={BCStudents}
        setBinaryStudents={setBinaryStudents}
        setBCStudents={setBCStudents}
        setDefaultStudents={setDefaultStudents}
      />
      <DefaultTeam
        defaultStudents={defaultStudents}
        setBinaryStudents={setBinaryStudents}
        setBCStudents={setBCStudents}
        setDefaultStudents={setDefaultStudents}
      />
      <BinaryBots
        binaryStudents={binaryStudents}
        setBinaryStudents={setBinaryStudents}
        setBCStudents={setBCStudents}
        setDefaultStudents={setDefaultStudents}
      />
    </>
  );
}
