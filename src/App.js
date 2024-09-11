
import { Alert } from 'bootstrap';
import './App.css';
import Nav from "./components/Nav.js";
import Box from './components/Box.js';
import About from './components/About.js';
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/Form.js';


function App()
{
  const [alert,setAlert]=useState(null);
  const showAlert=((messasg,ty)=>
  {  
    setAlert({msg:messasg,type:ty})
    
  })
  //for dark blue background
  const [mode,setMode]=useState('light')
  const toggleblue=((eve)=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#3C3D37';
      showAlert("dark mode has been enabled","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }

    setTimeout((msg,type) => {
      showAlert(' ',' ');
      
    }, 1500);
     
  })

  return(
    <>
  
        <div>
            <Nav mode={mode} toggleblue={toggleblue}/>;
             <Box alert={alert}/>
            
            
            <div className='container my-5 '>
              {/* <Router>
                <Routes> */}
                    <Form heading="Try-Textutils to analyze & manupulate your text" mode={mode}/>
                {/* </Routes>
              </Router> */}
            </div> 
          </div>
      
    
     
    </>
 
  );
}

export default App;