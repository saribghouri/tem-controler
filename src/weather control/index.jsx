


import React,{useState} from "react";

const TemControl = () => {
    const [temperatureValue, setTemperatureValue] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState("cold")
  
    const increaseTemperature = () => {
    if (temperatureValue === 30) return;

    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 15){
    setTemperatureColor('hot');
    }
    setTemperatureValue (newTemperature) ;
    };
    const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 15){
    setTemperatureColor('cold');
    
}
setTemperatureValue (newTemperature) ;
    }
    return(
        

        <div className='app-container'>
        <div className='temperature-display-container'> 

<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
            
        </div>
        <div className='button-container'>
       
         <button className="button1" onClick={() => increaseTemperature()}>+</button> 

        <button className="button2" onClick={() => decreaseTemperature ()}>-</button>
        </div> 
        </div> 
        
      

    )
}
    export default  TemControl;