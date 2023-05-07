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

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [
//             React.createElement("h1",{},"Im h1 tag : Nithin Shetty"),
//             React.createElement("h1", {}, "Im h1 tag : 2")
//         ]
//     )
// )
// console.log(parent);
// root.render(parent);

//Note: => "parent" is React Element not a tag.
//      => react element becomes HTML object which browser understands.


//JSX - HTML like syntax not HTML

// react element
// const jsxHeading = <h1>learn react 1</h1>;

// react componenet
// class based and function component

// const OneMoreComponent = () => {
    // return <h1>this is one more component</h1>
// }
// const JsxHeading2 = () => (
    // <>
        // <h1>this is react component</h1>
        {/* <OneMoreComponent/> */}
        // {OneMoreComponent()}
    // </>
// )


// root.render(<JsxHeading2/>)


const Header = () => {
    return (
        <div class="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0RPYYJ7153PKbXx6P_rvOrEQpuL53mZ7PaAazZM8&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contant</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor:"grey"}}>
            <img src="https://mariasindiankitchen.com/wp-content/uploads/2023/01/chicken-biriyani-3.jpg"/>
            <div className="details">
                <div>Dum Biriyani</div>
                <div>south indian</div>
                <div>4.4</div>
                <div>20min</div>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<AppLayout/>)
