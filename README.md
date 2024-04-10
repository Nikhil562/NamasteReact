yarn is another alternative of npm
npm install -D parcel ( As we dont want parcel on production , we want parcel on developer machine , -D=> Dev Dependency , implies we are installing parcel as a dev dependency )
or --save-dev

in package.json:-
Dependency => All the packages that a project needs
devDependencies: "^2.8.2"  => ^ implies will upgrade project itself  whenever there will be a updated version( for minor versions for major versions ~ is used)
^ =>  Autoupgrade

but it wil auto upgrade with new updates , to know what exact version we need to use to production we use package.lock.json
(It tells what version of the library we are using) , its a proff of the version we used 

Node_modules:-
WhenEver we install stg it's install in our node_modules so its kind of DB for NPM


Problem with cdn links:-
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
This link is for 18 version what if react updated to 19 then we hv to again copy paste links
also fetching data from other's servers wont be a optimized approach

so npm i react ( will install react in dependencies not in dev-dependencies)
npm i react-dom

to run :- npx parcel index.html

parcel :-
HMR-> hot module Reloading ( parser does this and keeps a track of every file if we change )
how it knows the changes -> through file watcher Algo written in c++ all this happens in parcel-cached folder

dist folder:- when we do npx parcel index.html dist creates a faster dev version of our project servers it on the server (locahost://1234)
if I want to make a production built :- using build command :- npx parcel build index.html 

while doing this ( both for production and non-production)  it does a lot of things all happens inside dist folder 
//parcel:-
//  HMR
// File Watcher Algo
// BUNDLING
// minify
// Cleaning our code
// Dev And Prodcution Build
// Super Fast Build Algo
// Image Optimization
// Caching while development 
// File Compression
// Compatble with older versions of  browsers
// gives functionality to build App on https 
// (HTTP) on dev-> run npx parcel index.html--https your app will run on https
// Always put parcel-cache in .gitignore 
//In package.lock.json :- pacel has its dependecies , its dependencies has its corresponding sobordinate dependencies , (Transitive dependencies)
//its a Zero config(install and give run and it will do things itself)


/*4th April */ 

npx-> npm run 

npm run start/ npm start 

<!-- Talk is Cheap , show me the code -->
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/