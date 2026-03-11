/*
// React ( .js/.jsx(vite uses) )
- React is JS Libary devloped bY Meta. Used For Building User Interfaces.
- It allows you towrite reuseable componets that can be diplayed and updated on some criteria.
- react is library so you have to import it
`import React from "react";
check version : `React.version`
=>Advantages
- Virtual DOM, Componet Based Architecture, Declarative Programming, Strong Community, SEO friendly SSR, Cross Palatform
=> Disadvantages
- Steep Learning Curve(an activity is difficult to learn, and much effort to increases Experties a little at the beginning once Mastered then flow is straight),
- Relies On Third Party Library, JSX Syntax, Incomplete Documentation(due to rapid Evalition)

---------------------------------------------------------------------------------------------------------
@VITE
- Vite is Build Tool Designed For Spped, Efficiency, When Working With JS Framework like react.
- Why : Instant Server Start, Fast Ho Module Replacemnet(See Real time Updates), Optimized Production Builds(Code Splitting), Support for Mordern Tools(TypeScript, JSX, SASS)
`npm create vite@latest my-react-app --template react`
- creates ` vite.config.js` configurations for Vite(plugins, base path, server(port, host, open, proxy),css) : it allows developers to customize and extend the default behavior of Vite for their specific project need

---------------------------------------------------------------------------------------------------------
//@Create Element dynamically
1) DOM
let element = document.createElement("h2")
element.style = "color: red; background-color: blue";   //inline style
element.className = "text--regular color--primary";             //add class name
element.id  = "dev";             //add id
document.body.appendChild(leemnt)   // insert into dom
2) React Package
syntax : React.createElement(elementNAme, {attributes(key:val)}, text/content)
React.createElement("h1", {className: "center", id: "headline"}, "This is Header")

---------------------------------------------------------------------------------------------------------
// @versions Check React Latest Version on NPM official
`npm view react version`
// check react current version or list in local machine
`npm list react`
// install Desirable Version
`npm install --save-exact react@letest react-dom@latest`
to create Project : `npx create-react-app@latest project-name`
to install rouer : `npx create-react-router@latest`


// you havce to install both react & react-dom saparately because `react` package contains core react library which have fundamental concepts like Components, JSX, State & Props And `react-dom` package is the renderer for web environmnet provides specific methods need to interact with browser's DOM and Render React Components into HTML elemnts.
---------------------------------------------------------------------------------------------------------

// BoilerPlate Code
-> Boiler Plate Code Referes To Sections Of code that Are Repetedly Included in Various Parts Of projects with Little to No Modifications.
-> This Code SErve As Foundational Structure or Template Providing Starting Point for Common Programming Tasks & ensurs Consistancy in Project Setup.

---------------------------------------------------------------------------------------------------------

// Prerequisites for learning react
1.  HTML (tags, attributes, form elements, basic styling & bootrap)
2. JAvascripts (let & const, template string, array&object, array high order functions, array & object destruction, ES module(import & export), dynamic Imports, arrow functions, promises, Fetch apis, basics Operations with DOM)

// chnaged Attributes
class => `className`
for => `htmlFor`
---------------------------------------------------------------------------------------------------------
@DOM & Virtual-DOM
1) DOM (Document Object Model)
- DOM is Logical tree.Each tree branch terminates in `node` which holds `Objct`.
- DOM is programming Interface for HTML & XML. provides Way to Access & Manipulate Elemnts, Attributes & COntent.
-When Page IS Loaded Browser Creates DOM tree Representing Structure of the Page Which Can Be Manipulated By JS(called Dynamic Web PAge)

2)Virtual-DOM
- Virtual DOM aim Is Make updates To DOM More Efficiently Bacause Changes made In WebPageVirtual DOm creates Copy Of Tree And Compares to Previous One (tree) & determines Difrence B/w Two Trees & updates only Nessasary Part.
=> How It Works
I) State Management : when state Changes React Updates the virtual dom first.
(II) Diffing Process : React then creates New Virtual DOM Tree and COmpares it To Previous POne Through Process Called DIffing(Algorithm that Identifies the changes B/w Two Trees)
(III) Selective rendering : React Updates Only tHe parts Of actual DOM that Have changed Rather than Re-renders Entire section Of the Page

@JSX(JavaScript XML)
- allws Dev to write HTML code to Js files.
---------------------------------------------------------------------------------------------------------
@Component
- Bulding Block Of React App. Two Types (I)Class componnet (II)Functional Components
(I) Class Componenmts(Depricated) :
- Based On ES6 Module it Requires the `render()` method which returns JSX
- In life cycle Uses Methods.
(II) Functional Components :
- Like JS Functions Accepts Props As Arguments & Return JSX as UI & this Keyyword is not used
-In Lifecycle It Uses Hooks

---------------------------------------------------------------------------------------------------------
@Life Cycle Component 
=> React Life Cycle Is Set Of Built In Methods(in class Component) and behaviours(in Function Component Using Hooks) that runs during Component Creation Updation and Destruction.
- There Are Three Phases In Life Cycle Mounting,Updating,Unmounting.
I)  Mounting : When Component Is Being Created and Inserted In DOM
II) Updating : When Component is Being Re-Renderd Due To Change In props or state.
III)Unmounting : When The Component Is Being Removed From DOM.

=>IN Class Component : 
- Mounting : constructor(),getDerivedStateFromProps(props,state), render(), componentDidMount()
- Updating : getDerivedStateFromProps(), shouldComponentUpadte(nextProp,nextState), render(), componentDidUpdate(prevProps,prevstate,Snapshot)
- Unmounting : componentWillUnmount()

=>Function Component : 
- Mounting : useEffect( () => {}, [])
- Updating : useEffect( () => {}, [count])
- Unmounting : useEffect( () => { return ()=>{} }, [])

---------------------------------------------------------------------------------------------------------

@ Props(Properties)
- props used to pass Data from Parent Component To child Component Which Is only read only.
- Child component Can Change Props.
function parent(){
    return <child title="Dev\'s" content="Mern Stack Developer"
}
function child( props ){
    return (
    <div>
        <p>
            title : {props.title},
            content : {props.content}
        </p>
    </div>
    )
}
---------------------------------------------------------------------------------------------------------
@@ Hooks
@ useState()
- State used To Manage data Within A Component That Can Change Over Time When State Change, React "re-renders" The Component to reflect the updated Data. must import `useState` from recat
- the useState(defaultValue) hook allows you to add the state to functional components.it takes initial value as argument & returns the array with currentState & function to UpdateState.
- sometimes you need to update the state based on previous state in that case pass the function to updateState function. this function first receives previous state & retuns new one
-NOtes:
I)Updates Array : 
    let [items, setItems] = useState( [2,4,6,8,10] )
    setItem(previousValue => {
            returns [...previousValue, 12, 14, 16]
        });
II)Object : 
    let [users, setUsers] = useState( {name:"dev",age:"23", department:"MERN STack Devlopment"} )
    setUsers( previousOne =>  ({ ...previousOne, name: "jigo"}) )
eg.
`import React,{useState} from 'react';`
function Dev(){
    const [age, setAge] = useState(0);
    let increment = () => {
            setAge( previousAge => previousAge + 1 )
        }
    return (    
            <div> age={age}        
                <button onclick={ increment }>add age by 1</button>        
            </div>
        )
}
---------------------------------------------------------------------------------------------------------
@useEffect() 
- The UseEffect hook enables you to do side effects in functional Components. useEffect() replaces lifecycle methods like componentDidMount, ComponentDdUpdate, componentWillUnmount
- It Runs Side Effect in Component like fetching data,Changing DOM Manually,Cleaning up before component unmounts etc..., must import `useEffect`
- useEffect(callback,[list_of_dependencies]) takes two parameters first one is callback function & second one is dependency arrray (prps or states value that will be changed in future)
- useEffect()  will every time called whenever dependency array's item(state/props) will change.
- you can declare in three Way which ever you need use that one
(I) useEffct() runs Evevry Time Component Renders which have only one Argument only callback function
`useEffect( () = > {} )`
(II) useEffect() runs Only once after initial(first) rendering and it takes both arguments but scond one ius empty dependecy array
`useEffect( () => {}, [] )`
(III) useEffect runs only on first initial renders &  When Dependency Arrays's Item(State/props) changed
`useEffct( () => {}, [state1, ...,stateN] )`
---------------------------------------------------------------------------------------------------------
@propDriling : it happens WHen You Pass Data though props and through multiple intermidiate components that actually dont need data for themselves.(tree)
------------------------------------------------------------------
@ useContext()
- useContext() hook simplofies sharing of Data(global state value) b/w components using contexObjevt.provider and useContext() 
- how to Use It
(I) Initialize contextObject using `createContext` 
`import { createContext } from "react";
const DevContext = createContext();
(II) initiolize some state or global variable and provide it to `contextObject.Provider value={value}`
let author = "Dev Patel";
let [book, setBook] = useState("Hridyam");
return (
    <>
        <DevContext.Provider value={ {author, book,setBook} }
            <FirstBookComponent/>
            <SecondBookComponent/>
        </DevContext.Provider/>
    </>
)
(III) Use DevContext's Values usingg `useContext(contextObject)` in child Component (which must Be initialize in ContextObject.Provider tag in Patrent Component)
//FirstBookComponet(child1)
`import { useContext } from "react";`
`import DevContext as "./DevContext"
let {author, book, setBook} = useContext(DevContext);
setBook(book => book = "Hridayam : Next Shipment")
return (
    <>
        <p>
            book : {book} 
            author : {author}
        </p>
    </>
)

//SecondBookComponent(child1)
`import { useContext } from "react";`
`import DevContext as "./DevContext"
let {author, book, setBook} = useContext(DevContext);
setBook(book => book = "Hridayam : part 3")
return (
    <>
        <p>
            book : {book} 
            author : {author}
        </p>
    </>
)
---------------------------------------------------------------------------------------------------------
@ useRef()
- useRef() hook returns mutable `ref` object with single `cuurrent` property. when you change the `currnt` prperty of useRef Object Component Didn't Rerender
- You can access/Manipulate  DOM elements & Store Values B/w renmders(PreviousState or timers) without re-renders components
eg
(I) DOM access
`import React, { useRef, useEffect } from 'react'`
let DomAccess = () => {
    let element = useRef(null);
    useEffect( () => { element.current.focus(); console.log(element.current) } , []); //on initial mount
    return (<>
        <input ref={element} type="text" value="dev" placeholder="Enter Hridaym" />
    </>)
    
}
(II) PreviousState value 
`import React, {useEffct, useState, useRef} from "react";
let PreviosData = () => {
    let [values, setValues] = useState();
    let previousValue = useRef();
    useEffect( () => { previousValue.current = values } ,[values])    
    let valueChaned = e => setValues(e.target.value);
    return (<>
        <input value={values} onChange={valueChanged} placeholder="dev"/>
        <p>Keybord Current VAlue : {values} And Prevous One : {previousValue.current}</p>
    </>)
}
---------------------------------------------------------------------------------------------------------
NOtes : "Memoize"is a specific optimization technique in computer programming where the results of expensive function(`function that consumes a significant amount of computational resources (CPU time and/or memory) during its execution`) calls are stored (cached) to avoid redundant(no loger Needed) calculations. 
---------------------------------------
@ useMemo() : the Value Memoizer
- hook That Retruns `only memoized Value`. It HAve Two Arguments First One Is Expensive Function And Second One Is Array Of Dependencies(Which is Used In Expensive Function)
- It oNly Calls Expoensive Functions Whenever The array of Dependecy Changes nOt EVery Time Component Rerenders.
- It is Mostly Use for Performance Optimisation.but dont use useMemo too often so it can Harm the performance becuse more hooks allocates more memory.
syntax
`import {useMemo} from "react";
let memoizedValues  = useMemo( () => { dataProcess(data) }, [data] )
let dataProcess = (data) => {
    let sum = data.reducfe((total,num)=> total+num, 0);
    let avaegrage = sum/data.length;
    return {sum,average}
}`
return (<>
    <p>sum : {memoizedValues.sum} average:{memoizedValues.average}
</>)
---------------------------------------
@ useCallback() : the function Memoizer
- Hook that Memoize the FUnctions. this Stores The reference of The Function To avoid Creating New functions on Each renders. This Hooks Uses When you Need to Pass Function from Prent to child componets

---------------------------------------
- @When To USe 
- useCallback() : need To memoize function to prevent unnessary re-creatin of fucntion especially when pass function ass props.
- useMemo() : when you wnat to memoize the result of expensive computation to avoid redundant calculations.
---------------------------------------------------------------------------------------------------------
@folder Structure 

---------------------------------------------------------------------------------------------------------
@ react-router-dom(v7)
- install react-router-dom(latest)
`npm i react-router-dom`
-steps
(I) configure the routres in index

---------------------------------------------------------------------------------------------------------
@ Api Crud Using Fetch()
- `fetch(url,{
    method : "post/get/put/delete/patch",
    headers : { 
                "content-type" : "application/json",
                "accept" : "application/json",
                "Authorizatlion" : "token"
            }
})`
Addtional Information parameters :
- Headers : "application/json", "application/x-www-form-urlencoded", "text/plain"
- body : JSON.stringify({}), "Dev here Simple Text", 
-for file 
let input = documeht.quesryselector("input[type='file']")
let file = input/files[0];
fetch("path",{method : "post", body : file})


@ Api Crud Using Axios()
- `npm i axios`
- Creae Axios Instance and use evevry where
```
// apiInstance.js
const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/",
    timeout : 2000,
    headers : { 
        "Content-Type" : "application/json",
        "AUthorization" :  `Bearear ${token}`    // Don't use In Instance becouse It Becomes Static To Use Dynamic Token On Each Reques Use `interceptors` 
    }
});
// each request get token with below code 
api.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
            return Promise.reject(error)
        }
);
export default api;

Note : if You Want Intercepter(Middleware) b/w Request & Responce then use 
// for Request
axios.interceptors.request.use(config=>{
        //any request logic
        console.log(`Request Sent at ${new Date.toISOString()}`)
        return config
    }, error => Promise.reject(error));`


// for Responce 
`
axios.interceptors.responce.use(responce => {
        //any Responce Logic
        console.log(`Responce is Received : `, responce)
        return responce;
    }, error => Promise.reject(error))

`

// In component 
import api from "./apiInstance.js"
// Get Request
api.get("todos",{
    params : {
        userId : id,
        status : status
    },
    headers : {},
    timeout : 5000, 
})
.then(responce => console.log(`Responce : ${responce}, Data : ${responce.data}`))
.catch( error => console.log(error,`Server Error : ${error.responce.status}, if No Responce : ${error.request}, if any Setup Error : {error.message}` ) )

try { 
    // Post Request
    api.post(
            "sign-up",
            { name : "Dev Patel", email : "dev@Hridayam.in", age : 23 },
            { headers :  { }, timeout : 5000  }
    );
    
    // Patch/Put
    api.put/patch(
            "product/${id}",
            { name : "Dev's Just", Price : 26 },
            { headers :  { }, params : { id : productId }, timeout : 5000  }   
    );

    // Delete
    api.delete(
            "product",
            { headers : {}, data : { }, params : {} }
    )
}catch(error){
    console.log(`error.response(server Error) => data : ${error.response.data} , status : ${error.responce.status}`)
    console.log(`error.request(No Response) => ${error.request}`)
    console.log(`Someing Unexpected : ${error.message}`)
}
```


---------------------------------------------------------------------------------------------------------
@Formik ( useFormik() )
`import { useFormik } from "formik";`
`import * as Yup from "yup"`
let formik = useFormik({
    initialValues : {
        name : "",
        email : "",
        password : ""
    },
    validationSchema : Yup.object().shape({
        name : yup.string().min(3,"username 3 chart long").required("Cant Left Blank"),
        email : Yup.string().email("please enter Valid Email").required("REequired");
    }),
    onSubmit : values => { console.log("values") },

})
<form className="form" onSubmit={formik.handleSubmit}>
    <div className="field">
        <label htmlFor="email">Email Address</label>
        <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
    </div>
    {formik.touched.email && formik.errors.email ? (
        <span className="error">{formik.errors.email}</span>
    ) : null}
    <div className="field">
        <label htmlFor="password">Password</label>
        <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        />
    </div>
    {formik.touched.password && formik.errors.password ? (
        <span className="error">{formik.errors.password}</span>
    ) : null}
    <button type="submit" className="submit-btn">
        Login
    </button>
</form>
-
BrouserRoutes
routes
route
navigate
link,navlink
prefix
segment

---------------------------------------------------------------------------------------------------------
@@@ React Core Algorithms 
@@ Reconciliation (before React V16 Version)
-> When State Changes React Must Determines What Updates Are Neccesory For Real DOM. This Is Where Reconcilliation Comes into Play, Ensuring Performance & Smooth User Experience.
=> How It Works
- Diffing Process : React Compares Current DOM With Updated DOM. this Process Identifies Diffrences B/w Two. Insted Of Immediately Writing Changes To Real DOM, React Uses The Strategy To Determine The Optimal Update Path
- Efficient DOM Updates : Insted of Updating Entire Tree React Applies Only Necessary Changes.
- Optimization : this ALgorithm is Designed to Minimize the Number of Operations Needed, Optimizing Both Speed & Performance
=> Reconciliation Process
1) ROOT Element Comparison : 
- if root elements of old and New Trees Are DIffrent, Then React Wil Tear Down The Old Tree and Build A New one.
- if the Root Elemnts Are The Same Type React WIll Only Updates The CHanged Attributes.
2) Child Elemnt Diffing : 
- as The Algorithm Recurs Through Componets Tree.It applies The Diffing Algorithm To Child Elemnts 
- For Lists React Uses The Key Prop to match Children in Old and new Trees(keys Helps o indetify WHich Item is CHnaged, Added Or Removed).
- if elemnts are same type and have same key react wil compare their props and state to determuine what has changed

@@ React Fiber
- React fiber is React core algoritm Introduced in React-16.
- React-Fiber is reimpementation of React-Reconciliation(before Version 16) algorithm. 
- The Primary Goal of React Fiber is to enable increamental Rendering of Virtual DOM. This Allows React To Split the rendring Work into Chunks And Spread it out Ove Multiple Frames Making Updates More efficient And Interactibe Experiences Smoother, increasing suitability for features like gustures and layouts and allowing React to Pause, Resume or Prioritize Rendering Tasks.
=> Features 
(I) Incremental Rendering
(II) Concurrency
(III) Prioritization & Scheduling
(Iv) Improved Error Handling
(V) Fragments & Portals
(VI) Asynchronous Rendering & Suspense

(I) Incremental Rendering :-
- React-Fiber Allows React To Break Down Rendring Work into Smaller units called "Fibers" and this allows React to Yeild COntrol back to he Browser During Rending, making application feel more responsive.
- This Prevents Large Update From Blocking The main Thread ANd making UI unresponsive, leading to a smoother user experince, especially in complex applications with animations and gestures.

(II) Concurrency :-
- Fiber introduces the ability to pausr and resume rendering task. this enables React to prioritize critical updates Over Less Important Ones Are Deferred, Ensuring That time Sensitive Tasks Get Attention First.

(III) Prioritization & Scheduling : 
- Fiber Can Assign Differrent Priorities to Various Updates. So High-Priority Updates Are Processed Quickeyly While lower Priority Ones are Deferred(Delayed Or Postponed) ensuring That Time-Sensitive Tasks get Attention First.

(IV) Improved Error Handling :-
- Fiber Allowes Better error Boundries Which Are a New Error Handling Mechanism.these Boundries catch errors in component tree and display a fallback UI and Preventing FULL APP CRASH.

(V) Fragments & Portals :-
- Fiber Brought Support for Returning Multiple Elements from a render function without adding extra DOM nodes because Of Fragments.
- It ENhances the ability to render subtrees into diffrent DOM nodes using Portals.

(VI) Asynchronous Rendering & Suspense :- 
- These Features, Enabled By Fiber Architechture, Allow For Asynchronous Handling of Components, Such as Delaying of non-critical parts of the UI until They are needed, imporoving Performance and User Experience.

---------------------------------------------------------------------------------------------------------
@@ Debouncing(Custom Hooks)


---------------------------------------------------------------------------------------------------------
@@ React-Query 
- React Query is a powerful library for fetching data and managing state in React applications.
- React Query Library Simplifies The Interaction With APIs By Providing Caching, Synchronization, Server State Management out of the Box.
=>> Features 
- Data Caching : it will Store the Fetched Data Automatically and use it to avoid Redundant API calls.
- Error Handling : Manages Errors Internally for Eacy interaction with APIs.
- State Management : Doesn't Require using manually maintained state handling Like "useEffect(()=>{},[])"
- To use React-Query You have to install `@tanstack/react-query` & `axios`
- if you want to use Dev tools `@tanstack/react-query-devtools`
```
// app.js
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

<QueryClientProvider client={ queryClient }>
    <App />
<QueryClientProvider>
```
---------------------------------------------------------------------------------------------------------

@@ Worker Threads
@@ React Query
    @ Pagination 
    @ Load More Content 
*/

