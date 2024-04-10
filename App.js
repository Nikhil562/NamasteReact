// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
// import FoodFireLogo from "../Images/Food Fire Logo.png";

const Title=()=>(
        <h1 id="title" key="h2">
                Food Villa
        </h1>
);
const HeaderComponent=()=>{
        return(
                <div className="header">
                
                <Title/>
                <div className="nav-items">
                <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                </ul>
                </div>
                </div>
        )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>)