import React from "react";

export default function About(props) {
  let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#152238':'white',
  }



  return (
    <div className="container">
      <h1 className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>About News Express</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>News Express </strong>allows you to read news from all domains weather it is Business, Entertainment, General, Health, Science, Sports and Technology. This News App software works in any web browser such as Chrome
              , Firefox ,Internet Explorer ,Safari,Opera etc.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>About Me</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>I, Md Ibrahim Sikander</strong> A dedicated and energetic
              individual Experienced Specialist with a demonstrated history of working in
              the marketing and advertising industry. Skilled in C, Java,
              Python, C++, SME, Advertising, and Graphic Design. Strong
              professional with a Bachelor of Technology - BTech focused in
              Information Technology from Meghnad Saha Institute of Technology
              (Techno India).
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Contact Me</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/mdibrahimsikander/" target="_blank" rel="noreferrer"> www.linkedin.com/in/mdibrahimsikander</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
