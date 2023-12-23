// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // const removebodyclass = ()=>{
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  // }
 
  const toggleMode = (cls)=>{
    // removebodyclass();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success");

    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }

    // if(cls === 'primary'){
    //   setMode("dark")
    //   document.body.style.backgroundColor = 'primary'
    //   showAlert("Primary Mode has been enabled", "Primary");
    // }
    // else if(cls === 'danger'){
    //   setMode("dark")
    //   document.body.style.backgroundColor = 'danger'
    //   showAlert("Danger Mode has been enabled", "danger");
    // }
    // else if(cls === 'success'){
    //   setMode("dark")
    //   document.body.style.backgroundColor = 'success'
    //   showAlert("Success Mode has been enabled", "success");
    // }
    // else if(cls === 'warning'){
    //   setMode("dark")
    //   document.body.style.backgroundColor = 'warning'
    //   showAlert("Warning Mode has been enabled", "warning");
    // }
  }



  return (
    <>
    <Router>
      <Navbar title = "TEXTUTILS" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm showAlert ={showAlert} heading = "Enter text to analyze" mode={mode}/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
