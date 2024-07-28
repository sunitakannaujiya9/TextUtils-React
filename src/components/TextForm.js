import React, {useState} from "react";

export default function TextForm(props){

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = ('');
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const[text, setText]=useState('Enter text here');
    return (
        <>
        <div className="container">
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

        </div>

        <div className="container my-3">
            <h4>Your Text Summary</h4>
            {/* <p>3234 words, 25456 characters</p> */}
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split().length} Minutes read</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}