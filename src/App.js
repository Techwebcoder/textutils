import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import React, { useState }from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
      document.title = "TextUtils-DarkMode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-LightMode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About Us" toggleMode = {toggleMode} mode = {mode} />
      <Alert alert= {alert}/>
      <div className="container">
        <Routes>
            <Route exact path="/about"
              element = {<About mode = {mode}/>} />
            < Route exact path="/"
              element = {<TextForm showAlert = {showAlert} heading="Enter the text" mode = {mode} />}
              />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
