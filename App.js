/**
 * <div class="main-parent">
    * <div id="parent">
    *   <div id="child">
    *      <h1>I'm h1 tag</h1>
    *      <h1>this is another h1 tag</h1>
    *   </div>
    *   <div id="child2">
    *      <h1>I'm h1 tag</h1>
    *      <h1>this is another h1 tag</h1>
    *   </div>
    * </div>
    * <div id="parent2">
    *   <div id="child">
    *      <h1>I'm h1 tag</h1>
    *      <h1>this is another h1 tag</h1>
    *   </div>
    *   <div id="child2">
    *      <h1>I'm h1 tag</h1>
    *      <h1>this is another h1 tag</h1>
    *   </div>
    * </div>
 * </div>
 * 
 * 
 * ReactElement(Object) => HTML(Browser understands)
 * 
 */

import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement(
   "div",
   {class: "main-parent"},
    [
        React.createElement(
            "div",
            {id: "parent"},
            React.createElement(
                "div",
                {id: "child"},
                [
                    React.createElement(
                        "h1",
                        {},
                        "I'm h1 tag"
                    ),
                    React.createElement(
                        "h1",
                        {},
                        "this is another h1 tag Rithesh1"
                    ),
                ]
            )
        ),
        React.createElement(
            "div",
            {id: "parent2"},
            React.createElement(
                "div",
                {id: "child"},
                [
                    React.createElement(
                        "h1",
                        {},
                        "I'm h1 tag"
                    ),
                    React.createElement(
                        "h1",
                        {},
                        "this is another h1 tag"
                    ),
                ]
            )
        ),
        React.createElement(
            "div",
            {id: "parent3"},
            React.createElement(
                "div",
                {id: "child"},
                [
                    React.createElement(
                        "h1",
                        {},
                        "I'm h1 tag"
                    ),
                    React.createElement(
                        "h1",
                        {},
                        "this is another h1 tag"
                    ),
                ]
            )
        )

    ]
);
console.log(parent);

const heading = React.createElement(
    "h1",
    {id: "heading", class: "heading-class", attr:"ddddd"}, 
    "This is hello world from React !"
);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
