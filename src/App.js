import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils is Amazing Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
    <div className="container my-3" >
    <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
    </div>
    </>
  );
}

export default App;



// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// // import About from './components/About.1';
// import Alert from './components/Alert';
// import React,{ useState } from 'react';
// function App() {
//   const [mode, setMode] = useState('dark'); //wheather dark mode is enable or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//       setAlert = ({
//         msg: message,
//         type: type
//       })
//   }

//   const toggleMode = () => {
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = 'grey';
//       showAlert("Dark mode been enable"," success");
//     }
//     else{
//       setMode('light')
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode been enable", "success");

//     }
//   }
//   return (
//     <>
//       <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
//       {/* <Navbar /> */}
//       {/* <Navbar title= "TextUtils"/> */}
//       <Alert alert={alert}/>
//       <div className="container my-3" >
//       <TextForm  heading="Enter the text to Analyze below" mode={mode}/>
//           {/* <About />  */}
//       </div>
//     </>
//   );
// }
// export default App
