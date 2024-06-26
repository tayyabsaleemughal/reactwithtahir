import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleFirstCapitalize = () => {
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
    props.showAlert("First letter of each word capitalized", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleReverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  
  return (
    <div>
      <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h2>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          value={text} 
          onChange={handleOnChange} 
          style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} 
          id="myBox" 
          rows="8"
        ></textarea>
      </div>
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFirstCapitalize}>First Capitalize</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>Reverse Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text for preview"}</p>
      </div>
    </div>
  );
}
