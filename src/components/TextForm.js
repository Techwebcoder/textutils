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
    document.getSelection().removeAllRanges();
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
    return text.split(/\s+/).filter(word => word !== '').length;
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
          <div>
            <button disabled ={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
              Change to Uppercase
            </button>
            <button disabled ={text.length===0} type="button" className="btn btn-warning mx-1 my-1" onClick={handleLoclick}>
              Change to Lowercase
            </button>
            <button disabled ={text.length===0} type="button" className="btn btn-dark mx-1 my-1" onClick={handleCapclick}>
              Change to Capitalize
            </button>
            <button disabled ={text.length===0} type="button" className="btn btn-secondary mx-1 my-1" onClick={handleExtra}>
              Remove Extraspace 
            </button>
            <button disabled ={text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={handleCopy}>
              Copy Text
            </button>
            <button disabled ={text.length===0} type="button" className="btn btn-danger mx-1 my-1" onClick={handleClearclick}>
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="container" style ={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{getWordCount()} Words and {text.replace(/\s+/g, "").length} Characters</p>
        <p>{(0.008 * getWordCount()).toFixed(3)} Minutes read</p>
      </div>
    </>
  );
}
