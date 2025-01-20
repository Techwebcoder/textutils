import React from "react";

export default function About(props) {
  return (
    <>
      <h1
        className="heading my-3 text-center"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div
        className="accordion accordion-flush my-5 "
        id="accordionFlushExample"
      >
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Text Analysis
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              The TextUtils app provides a powerful text analysis tool. This
              feature allows users to perform various analyses, such as word
              count, character count, and sentence count. Additionally, it can
              evaluate text complexity, detect the readability level, and
              identify common keywords and phrases. This helps users better
              understand their text and enhance its quality.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Text Transformation
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              The TextUtils app offers a variety of text transformation options.
              Users can convert text to uppercase, lowercase, or capitalize each
              word. They can also reverse the text, remove extra spaces, and
              replace certain words or phrases with others. These
              transformations are useful for quickly formatting text to meet
              specific requirements or standards.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Text Utilities
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Beyond analysis and transformation, the TextUtils app includes
              several handy utilities for working with text. Users can find and
              highlight specific words or phrases, sort lines alphabetically or
              by length, and even generate random text for testing purposes.
              These utilities simplify many common text manipulation tasks,
              making the app a versatile tool for anyone who works with text
              regularly.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
