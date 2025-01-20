import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React, { useState }from 'react';

import Alert from "./components/Alert.js";

function App() {
  const [mode ,setMode] = useState('light');
  const [alert ,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 500);
  }
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      setInterval(() => {
        document.title = "TextUtils-DarkMode";
      }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" abouttext="About Us" toggleMode = {toggleMode} mode = {mode} />
      <Alert alert= {alert}/>
      <div className="container">
        <TextForm showAlert = {showAlert} heading="Enter the text" mode = {mode} />
      </div>
    </>
  );
}
export default App;
