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

--------------------------------------------------------------------------------------------------------------

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
--------------------------------------------------------------------------------------------------------------

### 3) Boostrap in React.js
- There are two ways to get BS in your app
- 1) Copy paste the BS CSS & JS links from website
- 2) Install the bootstrap  using **npm i bootstrap@5.1.0** and import it in **app.js** as : **import 'bootstrap/dist/css/bootstrap.min.css'**
- Note: Incase of second, for JS you have to import necessary links from via **link** tag in **index.html** for js to work.

--------------------------------------------------------------------------------------------------------------

### 4) props && propTypes ** c
- **props**
- Are properties that belong to component.
- for exmaple if I am rendering folwing component say:
______________________________________________________
<Navbar title="React-app" pages="5" />
______________________________________________________

- title, pages here are **props** of component **Navbar** and can be accessed as
______________________________________________________
const Navbar=(props)=>{
    return (
        <>
           <h1>{props.title}</h1>
           <p>Pages avaibale are: {props.pages}</p>
        <>
    )
}

--------------------------------------------------------------------------------------------------------------
### React Hooks

## useState
- This hook is used for handing state in react.
- The systax is as follows

---------------------------------------
const [text,setText]=useState("Hello")
---------------------------------------

**text** -> variable used for accessing the value of state
**setText** -> Is used to change the value of state which is referneced using text variable

## useEffect
- This hook is call back function called when page is reloaded or state mentione in call back criteria changes
- The systax is as follows:

--------------------------------------
useEffect(function,dependency)
--------------------------------------

Examples:
---------------------------------------
//This useeffect is call on every render
  useEffect(() => {
    setcount(8);
  });

  //This useeffect will be called as soon a spage reloads/loads for first time
  useEffect(() => {
    setcount(8);
  }, []);

  //This useeffect will be called as  soon as the state in [ changes ]
  useEffect(() => {
   console.log("The count has been changed")
  }, [count]);
---------------------------------------

## React Context
- React Context is a way to manage state globally.
- It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
- If this was not there qe would haqve to use prop driling where in prop state would ahve to be paased as prop to other component.
- In our mini app we have made user login with his name and that name has been set to NavBar component to display.
-  Simplest way: Wrap the entire app in an ContextProvider, so whatever state it has can be accessed by all components using      useContext Hook

React state has components + state
consider following
____________________________________________________________________________________________________
                      App.js
                       |                                    _________________
                       |                                    | Context login |
       --------------------------------------------         | CreateContext |
       |                      |                   |         -----------------
     SHOP                    Blogs               Offers                    |
       |                                          |                        |
   --------------                             ----------         _______UseContext(login)
   |            |                             |        |        |
  Clothing     Food                          O1        O2--------
                                                        \___> Login here wqe have login state which is true then accesing it at SHOP will be very complicated task
____________________________________________________________________________________________________
SOLN: L I F T    ____  T H E ____ S T A T E
- i.e we keep the entire state in app.js so that all components can access it
- But in that case we have to do prop drilling from App.js to respective component say o1
- Hnec e login=true will go from App.js -> Offers -> O2 while offers still has nothing to do with it.

VALID SOLN: Create a context and use context API
- Context is out side of app.js and can be used by any component there in. it's isolated from component 
  hierarchy as shown above


