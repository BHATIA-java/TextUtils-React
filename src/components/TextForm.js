import React , {useState} from 'react'



export default function TextForm(props) {
  //for uppercase
  const handleUpClick =()=>{
    let newUpText=text.toUpperCase();
    setText(newUpText);
    props.showAlert("Converted to UpperCase","success");
  }

  //for lower case
  const handleLowClick=()=>{
    let newLowText=text.toLowerCase();
    setText(newLowText);
    props.showAlert("Converted to LowerCase","success");
  }
  //for clear
  const handleClearClick =()=>{
    setText("");
    props.showAlert("Text Cleared","success");
  }
  // for removing extra spaces
  const handleSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Unwanted spaces removed","success");

  }
  //for Copying the text
  const handleCopy =()=>{
    var text= document.getElementById("InputText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard","success");
  }
  //allow to type
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  //creating user state and keeping the value
  const [ text,setText]= useState('');
   
  //text="new text" it is the wrong way to change text
  //setText("new text");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>{props.MainText}</h2>
    <div className="mb-3">
    <textarea class="form-control" onChange={handleOnChange} value ={text} id="InputText"  style={{
  backgroundColor: props.mode === 'dark' ? props.themeColor : 'white',
  color: props.mode === 'dark' ? 'white' : '#042743',
  caretColor: props.mode === 'dark' ? 'white' : 'black',
  transition: 'all 0.3s ease'
}} rows="8" />
  <button  class="btn btn mx-2 my-2" style={{
    backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
    color: 'white',
border: props.mode === 'dark' ? '1px solid white' : 'none',
    outline: 'none',
    borderRadius: '5px'  }}onClick={handleUpClick}>Uppercase</button>
  <button  class="btn btn mx-2 my-2"style={{
    backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
    color: 'white',
border: props.mode === 'dark' ? '1px solid white' : 'none',
    outline: 'none',
    borderRadius: '5px'  }} onClick={handleLowClick}>Lowercase</button>
    <button  class="btn btn mx-2 my-2"style={{
    backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
    color: 'white',
border: props.mode === 'dark' ? '1px solid white' : 'none',
    outline: 'none',
    borderRadius: '5px'  }} onClick={handleClearClick}>Clear</button>
      <button  class="btn btn mx-2 my-2"style={{
    backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
    color: 'white',
border: props.mode === 'dark' ? '1px solid white' : 'none',
    outline: 'none',
    borderRadius: '5px'  }} onClick={handleCopy}>Copy Text</button>
            <button  class="btn btn mx-2 my-2"style={{
    backgroundColor: props.mode === 'dark' ? props.themeColor : '#0d6efd',
    color: 'white',
   border: props.mode === 'dark' ? '1px solid white' : 'none',
    outline: 'none',
    borderRadius: '5px'
  }} onClick={handleSpace}>Remove Extra Spaces</button>



    </div></div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>your Text Summary</h2>
<p>
  {
    text.trim().split(/\s+/).filter((element) => element.length !== 0).length
  } words and {text.length} characters
</p>
      <p>{0.008*text.split("").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something preview here"}</p>
    </div>
    </>
  )
}
 