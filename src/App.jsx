import "./App.css";
import {useState} from "react";
import { Light } from "./Light";
import {useEffect} from "react";



export function App() {

  const [activeLight, setActiveLight] = useState("red");
  
  //change color purple
  const [isPurple, setIsPurple] = useState(false);

  //announcement
  const [announcement, setAnnouncement] = useState("");
  

  useEffect(() => {
    const interval = setInterval(() => {
      switch (activeLight) {
        case "red":
          setActiveLight("yellow");
          break;
        case "yellow":
          setActiveLight("green");
          break;
        case "green":
          if (isPurple) {
            setActiveLight("purple");
          } else {
            setActiveLight("red");
          }
          break;
        case "purple":
          setActiveLight("red");
          break;
        default:
          break;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeLight, isPurple]);


  const handleButtonClick = () => {
    
    switch (activeLight) {
      case "red":
        setActiveLight("yellow");
        break;
      case "yellow":
        setActiveLight("green");
        break;
      case "green":
        if(isPurple){
					setActiveLight("purple") 
				}else{
					setActiveLight("red");
				}	
				break;
			case "purple":
				setActiveLight("red");
				break;
    }
  };
  
  

  const handlePurpleButtonClick = () => {
    setIsPurple(true);
    setAnnouncement("new color added!");
  };

  return (
    <>
      <div className="stick" />
      <div className="trafficLight">
        <Light color="red" opacity={activeLight === "red" ? 1 : 0.1} />
        <Light color="yellow" opacity={activeLight === "yellow" ? 1 : 0.1} />
        <Light color="green" opacity={activeLight === "green" ? 1 : 0.1} />

        {isPurple && (<Light color="purple" opacity={activeLight === "purple" ? 1 : 0.1} />)}

      </div>
      <h1 style={{ width: "fit-content", margin: "auto", color:"white"}}>{activeLight}</h1>
      
      <div className="my_button">
        
          <button onClick={handleButtonClick} className="button backstyle someSpace">
            Alternate Color
           </button>
           <div>
              <button onClick={handlePurpleButtonClick} className="button backstyle someSpace">
                 Add Purple
                
              </button>
              
          </div>
          {announcement && <p>{announcement}</p>}
      </div>
    </>
  );
}

export default App;