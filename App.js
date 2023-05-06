import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom .createRoot(document.getElementById("root"));

//Example 1:

/* <h3 id="heading3">"Hello React.js"</h3> */
/*
const reactHeading = React.createElement("h3", {id: "heading3"}, "Hello React.js");
console.log(reactHeading);// this returns an object not the html tag
reactRoot.render(reactHeading);
*/




// Example 2: Signle Child
/* 
<div id="parent">
    <div id="child">
        <h1>"Im h1 tag"</h1>
    </div>
</div>
*/

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement(
//             "h1",
//             {},
//             "Im h1 tag"
//         )
//     )
// )
// console.log(parent);
// root.render(parent);

//Note: => "parent" is React Element not a tag.
//      => react element becomes HTML object which browser understands.






// Example 3: Multiple children
/* 
<div id="parent">
    <div id="child">
        <h1>"Im h1 tag : 1"</h1>
        <h1>"Im h1 tag : 2"</h1>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement("h1",{},"Im h1 tag : Nithin Shetty"),
            React.createElement("h1", {}, "Im h1 tag : 2")
        ]
    )
)
console.log(parent);
root.render(parent);

//Note: => "parent" is React Element not a tag.
//      => react element becomes HTML object which browser understands.
