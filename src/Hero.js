import React, { useState } from "react";
import "./Hero.css";
const Hero = ({isDark}) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handledownClick = () => {
    let neWText = text.toLowerCase();
    setText(neWText);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleCountword = () => {
    let wordLength = text.trim().split(" ").filter(Boolean).length;
    let charLength = text.length;
    setCharCount(charLength);
    setWordCount(wordLength);
    // let charLenght = text.length;
  };

  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [text, setText] = useState("Enter text here!");
const mynewStyle={
  backgroundColor: isDark ?   "white" : "#212529",
  color:isDark ?  "black":"white"
  // height:"1000px"
}
const mycontStyle={
  backgroundColor: "white",
  padding:"0px 0px",
  // border:"10px",
  color:isDark ?  "black":"black", 

  // height:"1000px"
}
const mytextStyle={
  backgroundColor:isDark?"white":"#212A3E",
  color:isDark?"Black":"#ffffff",
  outline:"none",
  border:"none",
  borderShadow:"-4px 2px 8px -2px rgba(37, 43, 72, 1)"
}
const myttextStyle={
  backgroundColor:isDark?"white":"#212A3E",
  color:isDark?"Black":"#ffffff"
}
  return (
    <div style={mynewStyle}>
      <div className="container" >
        <h2 className="naa">Enter the text for analysis.</h2>
        <div className="mb-3">
          <textarea
            className="form-control ok"
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            value={text}
            name="content"
            style={mytextStyle}
          ></textarea>
        </div>
        <div className="butcont">
          <div className="btn btn-primary mx-3 butt" onClick={handleUpClick}>
            Convert to upperCase
          </div>
          <div className="btn btn-primary mx-3 butt" onClick={handledownClick}>
            Convert to lowerCase
          </div>
          <div className="btn btn-primary mx-3 butt" onClick={handleCountword}>
            Word Count
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text preview:</h2>

        <div className="container " style={mycontStyle}>
          <p className="wordCont my-2 " style={myttextStyle} >{text}</p>
        </div>
      </div>
      <div className="container contwordinfo ">
        <p className="wordinfo mx-3">
          {" "}
          words:{wordCount} Characters: {charCount}
        </p>
        <p className="wordinfo mx-3">{0.08 * wordCount} Minutes read</p>
      </div>
    </div>
  );
};

export default Hero;
