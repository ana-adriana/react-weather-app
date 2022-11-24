import React from "react";
import Weather from "./Weather";
export default App;

function App() {
  return (
    <div className="App">
      <div className="container">
   
    <Weather defaultcity="New York"/>
     <footer>This project is coded by {""}
      <a href="https://gleeful-yeot-054adb.netlify.app/index.html"target="_blank"rel="noreferrer">
        AAL
        </a> 
        
        <a href="https://github.com/ana-adriana/react-weather-app" target="_blank" rel="noreferrer">
        {""} and is open-sourced on GitHub.
      </a>
      </footer> 
      </div>
    </div>
  );
}


