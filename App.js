import React from 'react';
import ReactDOM from 'react-dom/client'

 const heading2 = React.createElement("h2", {
        id: "title",
        key:"h2"
}, "Heading 2");

/* <div class="header">
    <h1>Namaste React</h1>
    <ul>
        <li>About Us</li>
        <li>Support</li>
        <li>Home</li>
    </ul>
 </div>
 */  ///How to create this using react.createElement
/*
Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

 const header = React.createElement(
        "div",
        {
          className: "Title",
          key: "title",
        },
        [
          React.createElement(
            "h1",
            {
              key: "h1",
            },
            "This is h1 Tag"
          ),
          React.createElement(
              "h2",
              {
                key: "h2",
              },
              "This is h2 Tag"
            ),
            React.createElement(
              "h3",
              {
                key: "h3",
              },
              "This is h3 Tag"
            )
        ]
      ); It will be a huge mess , so we use JSX
 
*/


//JSX:-
const heading = <h1> Namaste React</h1>
// if we want to give it key and id
const heading1 = <h1 id="title" key="h2"> Namaste React</h1>


/*
JSX is not HTML inside JS , its a HTML like syntax 
in html to write tab index (padding left)=>
 <h1 id="title" key="h2" tab-index="1"> Namaste React</h1>  
but in jsx tabIndex="1" this is a convention of js 
similarly class and className
*/



const heading8= <h1> Namaste React</h1> //  this code won't work in browser bs it dont hv babel
/*
JSX-> uses (React.createElement)->then its converted to obj -> then obj is converted to HTML(DOM)
(Babel is doing this)
babel comes along with parcel

there is another package-lock.json indside node_modules to maintain versions of node_modules 

when we install a npm module so package.json was created on running it package-lock.json was created 
which consists of exact versions of all depnedencies of modules what what about the transitive dependencies
 so its kep inside node_modules's package-lock.json


 React.createElement(
            "h1",
            {
              key: "h1",
            },
            "This is h1 Tag"
          )                  --->  element in React 
*/

// Create the same element using JSX
const header = (
  <div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')); // Fixed typo

 root.render(container);


//  React component:-
// 1)functional components
// its just a js function that returns a piece of JSX / react el/ component itself
const HeaderComponent=()=>{
        return <h1>First functional component</h1>
}//func compo or any component name always start with a Capital letter (convention , not mandatory)

const HeaderComponent=()=>{
        return (<div>
                <h1>Namste React</h1>
                <h2>Func component</h2>
               </div>
        );  //for multiple lines always use paranthesis . not necessary to write return  so
}

const HeaderComponent=()=>//its also returning JSX 
        (
         <div>
                <h1>Namste React</h1>
                <h2>Func component</h2>
         </div>
);  





const heading =(
        <h1 id='title' key="h2">
                namaste
        </h1>
)
when we hv to render this react el we write root.render(heading)
but for rendering func comp we hv to write root.render(<HeaderComponent/>)

const heading =(
        <h1 id='title' key="h2">
                namaste
        </h1>
) //its a react el if we do ()=> which returns the JSX it becomes func comp
const heading =()=>(
        <h1 id='title' key="h2">
                namaste
        </h1>
)
// react el is a obj  , func comp is a fun


// How to use react el inside component:-
const heading =(
        <h1 id='title' key="h2">
                namaste
        </h1>
);
const HeaderComponent=()=>//its also returning JSX 
(
 <div>
        {heading}
        <h1>Namste React</h1>
        <h2>Func component</h2>
 </div>
);  
//component inside component

const Heading =()=>(
        <h1 id='title' key="h2">
                namaste
        </h1>
);
const HeaderComponent=()=>//its also returning JSX 
(
 <div>
        {/* <Heading/> or {Heading()} */}
        <Heading/> 
         {/*Component composition */}
        <h1>Namste React</h1>
        <h2>Func component</h2>
 </div>
);  

const HeaderComponent=()=>//its also returning JSX 
(
 <div>
        {insde {} u can write any piece of js code }
        <h1>Namste React</h1>
        <h2>Func component</h2>
 </div>
);  


const data=api.getData() //lets say this api returned some malicious data 
const HeaderComponent=()=>//its also returning JSX (cross site scripting Attack)//some hacker put their data in api by hacking so If I run it they can get my IP , location , pwd , cookies  etc 
(
 <div>
        {data }
        {/* But js taked care of this attacks , JSX OP, on taking data JSX does sanitization */}
        <h1>Namste React</h1>
        <h2>Func component</h2>
 </div>
);  


// 2)class based components
