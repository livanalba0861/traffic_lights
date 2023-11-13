import "./App.css";
import {useState} from "react";
import { Light } from "./Light";
import {useEffect} from "react";

export function App() {

  const [activeLight, setActiveLight] = useState("red");

  useEffect(()=>{
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

  function highlightActiveColor() {
    const activeLight = document.querySelector('.traffic-light .active');
    if (!activeLight) {
      // No active light found, so highlight the first light
      const firstLight = document.querySelector('.traffic-light .light:first-child');
      firstLight.style.borderColor = '#add8e6'; // Light blue color
    } else {
      // Active light found, highlight it
      activeLight.style.borderColor = '#add8e6'; // Light blue color
    }
  }

  
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
      <button onClick={highlightActiveColor}>Highlight Active Color</button>
    </>
  );

}

export default App;
