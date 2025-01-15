import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" abouttext = "About Us"/>
      <div className="container">
      <TextForm heading = "Enter the text"/>
      </div>
    </>
  );
}
export default App;


