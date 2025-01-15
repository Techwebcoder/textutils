import React, { useState } from 'react';
export default function TextForm(props) {
  const [text, setText] = useState('Enter the text');
  const handleOnclick = ()=>{
    let  newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnclick2 = ()=>{
    let  newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnchange = (event)=> {
    setText(event.target.value)
  }
  return (
    <div>
      <div className="mb-3">
        <h1 className ="my-3">{props.heading}</h1>
        <textarea className="form-control mb-3" id="myBox" value={text} onChange={handleOnchange} rows="8"></textarea>
        <button type="button" class="btn btn-primary me-5" onClick={handleOnclick}>Change to Uppercase</button>
        <button type="button" class="btn btn-warning" onClick={handleOnclick2}>Change to Lowercase</button>
      </div>
    </div>
  );
}
