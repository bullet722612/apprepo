import './App.css'; 
import { useState } from "react"; 
const Student = () =>{ 
 const [name, setName] = useState("Shashank"); 
 const changeName = () =>{ 
 setName("SHASHANK KUMAR") 
 } 

 return( 
 <div id="cruz">
 <h1>My name is - {name}</h1>
 <button type="button" onClick={changeName} id='h'>click me</button>
 </div>


 ) 
} 
//importing the component
function App() { 
 return ( 
 <div className="App">
 {/* rendering components */}
 <Student/>
 </div>
 ); 
} export default App;