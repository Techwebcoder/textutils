import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }
  const handleExtra = () => {
    let  newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed", "success");
  }
  const handleCapclick = () => {
    let newText = text
      .split(' ')
      .filter(word => word !== '') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
    props.showAlert("Covered to Capitalize words", "success");
  };
  const handleClearclick = () => {
    let newText ='';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const getWordCount = () => {
    return text.split(' ').filter(word => word !== '').length;
  };

  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className="my-5 text-center"  style ={{color : props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
          <textarea
            className="form-control mb-3"
            id="myBox"
            style ={{backgroundColor : props.mode==='light'?'white':'grey' ,color : props.mode==='light'?'#042743':'white'}}
            value={text}
            onChange={handleOnchange}
            rows="8"
          ></textarea>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary mx-4 my-3" onClick={handleUpclick}>
              Change to Uppercase
            </button>
            <button type="button" className="btn btn-warning mx-4 my-3" onClick={handleLoclick}>
              Change to Lowercase
            </button>
            <button type="button" className="btn btn-dark mx-4 my-3" onClick={handleCapclick}>
              Change to Capitalize
            </button>
            <button type="button" className="btn btn-secondary mx-4 my-3" onClick={handleExtra}>
              Remove Extraspace 
            </button>
            <button type="button" className="btn btn-info mx-4 my-3" onClick={handleCopy}>
              Copy Text
            </button>
            <button type="button" className="btn btn-danger mx-4 my-3" onClick={handleClearclick}>
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="container" style ={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{getWordCount()} Words and {text.length} Characters</p>
        <p>{(0.008 * getWordCount()).toFixed(3)} Minutes read</p>
      </div>
    </>
  );
}
