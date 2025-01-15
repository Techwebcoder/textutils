import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapclick = () => {
    let newText = text
      .split(' ')
      .filter(word => word !== '') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
  };
  const handleClearclick = () => {
    let newText ='';
    setText(newText);
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
          <h1 className="my-5 text-center">{props.heading}</h1>
          <textarea
            className="form-control mb-3"
            id="myBox"
            value={text}
            onChange={handleOnchange}
            rows="8"
          ></textarea>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary mx-5 my-3" onClick={handleUpclick}>
              Change to Uppercase
            </button>
            <button type="button" className="btn btn-warning mx-5 my-3" onClick={handleLoclick}>
              Change to Lowercase
            </button>
            <button type="button" className="btn btn-dark mx-5 my-3" onClick={handleCapclick}>
              Change to Capitalize
            </button>
            <button type="button" className="btn btn-danger mx-5 my-3" onClick={handleClearclick}>
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>{getWordCount()} Words and {text.length} Characters</p>
        <p>{(0.008 * getWordCount()).toFixed(3)} Minutes read</p>
      </div>
    </>
  );
}
