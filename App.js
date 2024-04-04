import React from 'react';
import ReactDOM from 'react-dom/client'


const heading1 = React.createElement("h1", {
        id: "title", 
        key:"h1",
}, "Heading 1 from parcel");

 const heading2 = React.createElement("h2", {
        id: "title",
        key:"h2"
}, "Heading 2");


// React.createEl gives a obj which is converted into html and puts into DOM by react 



 const container = React.createElement('div', 
       {
        id:"container",
        hellow:"World"
        // We can put etg here not necessarily tags , react calls it props 
       } ,
[heading1, heading2]
); 


const root = ReactDOM.createRoot(document.getElementById('root')); // Fixed typo

 root.render(container);

