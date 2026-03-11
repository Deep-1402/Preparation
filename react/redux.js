/*
@@ Redux
@@ React Redux()
@@ Redux Toolkit
Redux Toolkit (RTK): This is a set of tools and best practices that simplifies Redux development. It includes utilities like configureStore for setting up the store, createSlice for defining reducers and actions, and RTK Query for data fetching and caching. It aims to reduce boilerplate code and make Redux easier to use.
React Redux: This is the official set of React UI bindings for Redux. It provides the Provider component and hooks like useSelector and useDispatch to connect your React components to the Redux store. React Redux works seamlessly with both "plain" Redux and Redux Toolkit. 
Redux (core library): This is the fundamental state management library that Redux Toolkit builds upon. While you can still use the core Redux library directly, Redux Toolkit is designed to streamline its usage and implement best practices.

---------------------------------------------------------------------------------------------------------
@@ Redux Toolkit
- Redux Toolkit is recommanded, batteries-included way to write Redux Logic. it reduces boilerplate, includes good default(like redux-thunk and DevTools), & Provides helper utilities(slices, entry adapters, async helpers, RTK Query).
- It Simplifies The complex Process Of State management in React Application by Providing Standerdized &  opinionated Configuraton.
- Install redux toolkit you have to install Two Libraries First one is `@reduxjs/toolkit` and second one peer dependency is `react-redux`.
- `@reduxjs/toolkit` and `react-redux` are described as peer dependencies, it means that `react-redux` is a dependency required by `@reduxjs/toolkit` to function correctly in a React application,
- Redux-Toolkit Have Basic Concepts That Simplfies the state Management like Slices, Store, Reducers.
(i) Store :-
- It Holds Entire State of your application. and With redux-toolkit you can configure the store using `configureStore`, Which Set up the store with Default Settings
eg.
// store.js
import { configureStore } from "@rduxjs/toolkit"
import devReducer from "./feature/devSlice"
import hridayamReducer from "./feature/HridayamSlice"
const store = configureStore({
    reducer : {
        dev : devReducer,
        hridayam : hridayamReducer
    }
})
export store;
// app.js
import { Provider } from "react-redux"
import { store } from "./store.js"
ReactDOM.reateRoot(document.getElementBYId('root')).render(
<Provider store={store}>
    <App />
</Provider>
)

(ii) Slices :-
- It is A Collection of Redux reducer logic and Actions for a Single (specific) Feature of the Application.
- it have The State, Reducers, actions realated to that feature which all are defiend in single file making it easier to manage and manintain the code.
eg.
// devSlice.js
import { createSlice } from "@reduxjs/toolkit";
const devSlice = createSlice({
    name : "dev",       //String that serves as the name of slice & used to generate action types automatically("dev/incremant")
    initialState : {
        value : 0,
        name : "dev"
    },          // initial state value fro this perticular Slice of Redux Store.
    reducers : {
        increment : (state) => {
                state.value += 1;
            },
        decrement : (State) => {
                state.value -= 1;
            },
        increamentBySpecific : (state, action) => {
                state.value += action.payload
            },
    }
});
export const { increment, decrement, incrementByAmount } = devSlice.actions;
export default devSlice.reducer;     

// How To Use In Components 
import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { increment, decrement, incrementBySpecfic } from "./devSlice.js"
const Home = () => {
    const count = useSelector( (state) => state.dev.value );
    const name = useSelector( (state) => state.dev.name );
    const dispatch = useDispatch();
    
    return (<>
        <h5>{ name } : { count }</h5>
        <button onclick={ () => dispatch( increment() ) }>Increment</button>
        <button onclick={ () => dispatch( decrement() ) }>Decrement</button>
        <button onclick={ () => dispatch( incrementByAmount(10) ) }>Increment 10 </button>
    </>);    
}


(iii) Reducers :- 
- Reducers are `Pure Functions` that Specifies how The Application's State Changes(Features Logic) in responce to actions.
- You can Easily Create Reducer Using Redux-Toolkit `createSlice` function. and when you define plural used `reducers:{}` and when you export it use Singular like `export default slice.reducer`
- simple reducer example is defined Upward & now when action have multiple payload there are Two Ways (1) Object (2) `prepare` callback with multiple parameters
eg. 
(1) Object
- Here in Dispatch You Can use only in Object 
// userSlice.js
import { createSlice } from "@reduxjs/toolkit"
const userSlice = createSlice({
    name : "user",
    initialState : {
        name : "", 
        age : 0,
        email : ""
    },
    reducers : {
        infoUpdate : (state, action) => {
                //  action.payload will be an object like  { name: 'Dev Patel', age: 23, email: 'hridayam@dev.com' }
                state.name = action.payload.name;
                state.age = action.payload.age;
                sate.email = action.payload.email;
            },
    }
})
export const { infoUpdate } = userSlice.actions;
export default userSlice.reducer

// in component WHen Dispatch action 
dispatch( infoUpdate( {name : "Dev", age : 23, email : "Hridayam@Dev.com" } ) )
-------
(2) `prepare` Callback
- Here in Dispatch You Can use Multiple Parameter
// userSlice.js
import { createSlice } from "@reduxjs/toolkit"
const userSlice = createSlice({
    name : "user",
    initialState : {
        name : "", 
        age : 0,
        email : ""
    },
    reducers : {
        infoUpdate : {
            reducer : (state, action) => {
                    const {name, age, email} = action.payload;
                    state.name = name;
                    state.age = age;
                    state.email = email;
                },
            prepare : (name, age, email) => {
                    return {
                        payload : {name ,age, email}
                    }
                }
        }
    }
})
export const { infoUpdate } = userSlice.actions;
export default userSlice.reducer
// in component when Dispatch 
dispatch( infoUpdate("Dev Patel", 23, "Hridayam@dev@gmail.com") )


=> Features 
-> Simplified Configuration : Redux-toolkit Simplifies the `Store` configuration by Providing sensible defaults and integrating commonly used middleware. with the configureStore functions. you can set up `store` without Worrying about boilerplate.
-> bulit-in Middleware : Redux-toolkit includes middleware like `redux-thunk` for handling asynchronous actions and `redux-devtools-extension` for state inspection for debugging.
-> Enhanced Reducer Management : 
- crsting reducers with redux toolkit with createSLice function. which allos you to define reducers

*/
