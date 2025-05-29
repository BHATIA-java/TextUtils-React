import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [themeColor, setThemeColor] = useState('#042743');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const applyThemeColor = (color) => { 
    setThemeColor(color);
    setMode('dark');
    document.body.style.backgroundColor = color;
    document.body.style.color = 'white';
    showAlert("Dark mode enabled with new theme color", "success");
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#042743';
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
     {/* <Router> */}
      <Navbar title="TEXTUTILS" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} applyThemeColor={applyThemeColor} />
      <Alert alert={alert} />
      <TextForm MainText="Enter The Text TO Analyse Below" showAlert={showAlert} mode={mode} themeColor={themeColor} />
      {/* <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm MainText="Enter The Text TO Analyse Below" showAlert={showAlert} mode={mode} themeColor={themeColor} />} />
        </Routes>
      </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
