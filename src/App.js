import "./App.css";
import MainContainer from "./components/MainContainer";
import { useState } from "react";
import adam from "./assets/adam.png";
import corey from "./assets/corey.png";
import jaye from "./assets/jaye.png";
import jess from "./assets/jess.png";
import mauro from "./assets/mauro.png";
import rokhaya from "./assets/rokhaya.png";
import vinny from "./assets/vinny.png";
import meg from "./assets/meg.png";
import peter from "./assets/peter.png";

function App() {
  const studentData = [
    { name: "adam", img: adam },
    { name: "corey", img: corey },
    { name: "jaye", img: jaye },
    { name: "jess", img: jess },
    { name: "mauro", img: mauro },
    { name: "rokhaya", img: rokhaya },
    { name: "vinny", img: vinny },
    { name: "meg", img: meg },
    { name: "peter", img: peter },
  ];
  const [defaultStudents, setDefaultStudents] = useState(studentData);
  const [BCStudents, setBCStudents] = useState([]);
  const [binaryStudents, setBinaryStudents] = useState([]);

  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button
        className="button-24"
        onClick={() => {
          setDefaultStudents(studentData);
          setBCStudents([]);
          setBinaryStudents([]);
        }}
      >
        Reset
      </button>
      <div className="App">
        <MainContainer
          defaultStudents={defaultStudents}
          BCStudents={BCStudents}
          binaryStudents={binaryStudents}
          setBinaryStudents={setBinaryStudents}
          setBCStudents={setBCStudents}
          setDefaultStudents={setDefaultStudents}
        />
      </div>
    </div>
  );
}

export default App;
