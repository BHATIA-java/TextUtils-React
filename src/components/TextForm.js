import React, { useState } from 'react';

export default function TextForm(props) {
  // For uppercase
  const handleUpClick = () => {
    let newUpText = text.toUpperCase();
    setText(newUpText);
    props.showAlert("Converted to UpperCase", "success");
  };

  // For lowercase
  const handleLowClick = () => {
    let newLowText = text.toLowerCase();
    setText(newLowText);
    props.showAlert("Converted to LowerCase", "success");
  };

  // For clear
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  // For removing extra spaces
  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Unwanted spaces removed", "success");
  };

  // For copying the text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard", "success");
  };

  // Allow to type
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Creating user state and keeping the value
  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2 className='my-2'>{props.MainText}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="InputText"
            style={{
              backgroundColor: props.mode === 'dark' ? props.themeColor : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
              caretColor: props.mode === 'dark' ? 'white' : 'black',
              transition: 'all 0.3s ease'
            }}
            rows="8"
          />
          <button disabled={ text.length===0} className="btn btn mx-2 my-2" style={{
            backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
            color: 'white',
            border: props.mode === 'dark' ? '1px solid white' : 'none',
            outline: 'none',
            borderRadius: '5px'
          }} onClick={handleUpClick}>Uppercase</button>

          <button disabled={ text.length===0} className="btn btn mx-2 my-2" style={{
            backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
            color: 'white',
            border: props.mode === 'dark' ? '1px solid white' : 'none',
            outline: 'none',
            borderRadius: '5px'
          }} onClick={handleLowClick}>Lowercase</button>

          <button disabled={ text.length===0} className="btn btn mx-2 my-2" style={{
            backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
            color: 'white',
            border: props.mode === 'dark' ? '1px solid white' : 'none',
            outline: 'none',
            borderRadius: '5px'
          }} onClick={handleClearClick}>Clear</button>

          <button disabled={ text.length===0} className="btn btn mx-2 my-2" style={{
            backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
            color: 'white',
            border: props.mode === 'dark' ? '1px solid white' : 'none',
            outline: 'none',
            borderRadius: '5px'
          }} onClick={handleCopy}>Copy Text</button>

          <button disabled={ text.length===0} className="btn btn mx-2 my-2" style={{
            backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
            color: 'white',
            border: props.mode === 'dark' ? '1px solid white' : 'none',
            outline: 'none',
            borderRadius: '5px'
          }} onClick={handleSpace}>Remove Extra Spaces</button>
        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>
          {
            text.trim().split(/\s+/).filter((element) => element.length !== 0).length
          } words and {text.length} characters
        </p>
        <p>
          {
            (0.008 * text.trim().split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)
          } Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  );
}
