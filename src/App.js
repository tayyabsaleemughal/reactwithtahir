import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';

function App() {
  // Define state variables mode and alert using useState
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Define showAlert function to set alert state and clear it after 1500ms
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const Removebodyclasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  };
  // Define toggleMode function to toggle between light and dark mode
  const toggleMode = (cls) => {
    // Toggle mode and update document body background color and title
    Removebodyclasses();
    if (cls !== 'default') {
      document.body.classList.add('bg-' + cls);}
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Dark mode is running';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Light mode is running';
    }
  };

  // Return JSX containing Navbar, Alert, Textform, and About components
  
  return (
    <div>
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
   <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route path="/About" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
