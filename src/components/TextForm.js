import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Upper case was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleDownClick = ()=>{
        console.log("lowercase button was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "success");
    }
    
    const handleClear = ()=>{
        console.log("clear button was clicked");
        let newtext = "";
        setText(newtext);
        props.showAlert("Text Cleared", "success");
    }
    
    const handleCopy = ()=>{
        console.log("copy button was clicked");
        let newtext = document.getElementById("MyBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        document.getSelection().removeAllRanges() ;
        props.showAlert("Copied to Clipboard", "success");
    }
    
    const handleInverse = ()=>{
        console.log("inverse button was clicked");
        let newtext = "";
        for (let index = 0; index < text.length; index++) {
            if(text[index] === text[index].toLowerCase()){
                newtext += text[index].toUpperCase();
            }
            else{
                newtext += text[index].toLowerCase();
            }
        }
        setText(newtext);
        props.showAlert("Every character is inverted", "success");
    }

    const handleExtraSpace = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleOnChange = (event)=>{
        console.log("on change clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    // text = "asddasd"//wrong way to change state
    // setText("asfsdf")// right way to change state
  return (
    <>
    <div className="container" style={{color : props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="MyBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#13466e':'white', color : props.mode === 'light'?'black':'white'} } placeholder='Enter text here' id="MyBox" rows="10" />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleInverse}>InVeRsE CaSe</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{ return element.length!==0}).length} minutes is required to read the whole text</p>

        <h2>Preview</h2>
        <p>{text.length >0 ? text : "Enter text above to preview"}</p>
    </div>
    </>
  )
}
