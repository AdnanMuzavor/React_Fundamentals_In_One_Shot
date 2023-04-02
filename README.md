## React tutorials

### Introduction:
- React is used for making **single page applications**
- Using react it is possible to render the same page with changed components without **re-loading**.
- This can reduce load on server as it doesnt has to send the page specific data again and again.

### Installation:

- **npm install -g create-react-app** : This is like buying react permanently for your system.
- **npx create-react-app appname**: This is like you’re getting react for rent, using and returning it.
  - Here you're are not installing recat , still able to use it.
  - Just like you dont buy house but you stay in it for rent.
  - Another major advantage of npx is the ability to execute a package which wasn't previously installed.
  - Here package is react package.


## Fundamentals

### 1) JSX: JavaScript XML
- The code that we write in react is JSX 
- This Code bedore being rendered in form of web page is compile bt **babel** compiler.
- It does so using **React.createElement(element)**

### 2)  export Default Component_Name vs export {comp1,comp2,comp3}
- Incase of export Default Component name I can import component using any name from the file compoent has been exported
- Incase of second option While importing I have to apply structuring and call components by same name otherwise error will be    thrown
______________________________________________________________________________________
file1.js
export Default Home;

file2.js
var a="Hello"
var b="World"

file3.js
import Home from 'file.js'  => RIGHT
import HomeComp  from 'file.js' => RIGHT
import comp1 from 'file2.js' => WRONG as it's not defualt exported: => SOLN => import {comp1} from "file2.js"
import {comp1,comp2,comp3} from 'file2.js'
______________________________________________________________________________________

### 3) Boostrap in React.js
- There are two ways to get BS in your app
- 1) Copy paste the BS CSS & JS links from website
- 2) Install the bootstrap  using **npm i bootstrap@5.1.0** and import it in **app.js** as : **import 'bootstrap/dist/css/bootstrap.min.css'**
- Note: Incase of second, for JS you have to import necessary links from via **link** tag in **index.html** for js to work.
