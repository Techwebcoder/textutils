import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React, { useState } from 'react';


function App() {
  const [mode ,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" abouttext="About Us" toggleMode = {toggleMode} mode = {mode} />
      <div className="container">
        <TextForm heading="Enter the text" mode = {mode} />
      </div>
    </>
  );
}
export default App;
