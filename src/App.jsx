import "./App.css";
import {useState} from "react";
import { Light } from "./Light";
import {useEffect} from "react";

export function App() {

  const [activeLight, setActiveLight] = useState("red");
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{

    if (!isActive) return

    const interval = setInterval(()=>{
      switch(activeLight){
        case "red":
          setActiveLight("yellow");
          break;
          case "yellow":
            setActiveLight("green");
            break;
            case "green":
              setActiveLight("red");
      }

    },3000);

    return ()=> clearInterval(interval)

  })


  return (
    <>
      <div className="stick"/>
      <div className="trafficLight">
        <Light color="red"opacity={activeLight === "red" ? 1:0.4} />
        <Light color="yellow" opacity={activeLight === "yellow" ? 1:0.4} />
        <Light color="green" opacity={activeLight === "green" ? 1:0.4} />
      </div>
      <h1 style={{width: "fit-content", margin: "auto"}}>
        {activeLight}
      </h1>
      <button onClick={()=> setIsActive(!isActive)}>Highlight Active Color</button>
    </>
  );

}

export default App;
