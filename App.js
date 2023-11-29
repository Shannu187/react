import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => When we render this on to DOM, this becomes HTML element.
// JSX - is not HTML in JS; html/xml like syntax; transpiled before it reaches the JS engine which is done by Parcel's manager called Babel 
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render  )

// React Element
const title = (
    <h1 className="head" tabIndex="5">
        Namaste React JSX
    </h1>
);

// React Component
// Class Based Components - old way of writing code
// Functional Component - new way of writing code - is a funntion that returns some piece of JSX
//                       - JavaScript function that returns a React Element

// React functional component and Component composition
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // this is how we render react element
root.render(<HeadingComponent />) // this is how we render react functional component


// React Functional Component
// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         Namaste React JSX
//     </h1>
// );

// Rendering functional Component in a component 
// const HeadingComponent = () => (
//     <div>
//         <Title /> 
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );

// const elem = <span>React Element</span>

// React Element rendering element
// const title = (
//     <h1 className="head" tabIndex="5">
//         {elem}
//         Namaste React JSX
//     </h1>
// );
