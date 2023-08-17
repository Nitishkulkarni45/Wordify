import React, { useState } from "react";
import "./About.css";
import Navbar from "./Navbar";

const About = ({isDark,setDark}) => {
  
  const handleMode = () => {
    setDark(!isDark);
  };
  const myStyle = {
    color: isDark ? "#212529" : "white",
    backgroundColor: isDark ? "white" : "#212529",
  };
  const myaccStyle = {
    backgroundColor:isDark?"#FFFFFF":"#212A3E",
    color:isDark?"Black":"#ffffff"
  };
  const myacccStyle = {
    backgroundColor:isDark?"#FFFFFF":"#132C33",
    color:isDark?"Black":"#ffffff"
  };
  const myButStyle = {
    boxShadow:isDark?"-4px 2px 8px -2px rgba(37, 43, 72, 1)":"-5px 3px 9px -2px rgba(255, 255, 255, 1)"
  };
  
  return (
    <div>
      <Navbar />
      <div className="cont" style={myStyle}>
        <div className="accordion acc" id="accordionExample">
          <div className="accordion-item" style={myacccStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myaccStyle}
              >
                Our mission
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myacccStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myaccStyle}
              >
                New releases
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myacccStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myaccStyle}
              >
                Open sources
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="btn btn-primary my-2 butt" style={myButStyle} onClick={handleMode}>
          {isDark ? "Dark Mode" : "Light Mode"}
        </div>
      </div>
    </div>
  );
};

export default About;
