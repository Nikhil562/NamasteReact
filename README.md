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




