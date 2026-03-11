/*
Express.js 
=> It is Backend Web App Framework for Node.js. It Provides features Like Routing, Middleware SUpport, Http Utility MEthods. It is Scaleble, large Community Support.

// install express
`npm init -y`           // to set up new/existng npm package 
`npm install express`   // install & add as depemnndenc in package.json

// -----------------------------------

// nodemon :- 
=> iT is a tool that automatically restarts App when changes made
// install
`npm install nodemon -D ` or `npm install --save-dev nodemon` 
`npm i nodemon -D` or `npm i --save-dev nodemon`  // to save as devDeperndencey
//  must modify script section in package.json after install nodemon
"script" : { 
    "start/dev/deep" : "nodemon app.js"
}
// then to run type `npm run start/dev/deep`


// ------------------------------------------------

@Set up ES6 Module
=> Node.js did not support Directly ES6 module SYntax(import/export)
=> Enable ES6 by `"type" : "module"` in package.json or in silgle file use `.mjs` Extension.

// ----------------------------------------------
@Create basic server
//imports express module
import express from "express";
//initialize Express App
const app = express();       
//define route for "/dev" path for GET request
app.get("/dev", (request, response) => { 
    response.end("dev here")
    })
// starts the server and listen to specific port "3000" 
// app.listen(3000, () =>{ console.log("seevrer is runnning ") } );

// ----------------------------------------------------------
// @status code 
=> 1XX : information
=> 2XX : Success
I) 200 : ok : request was successful
II) 201 : created : new resource is created
III) 204 : No content : request SUccess but No Content found
=> 3XX : redirectin 
=> 4XX : client Errors 
I) 400 : Bad Request : the request in invalid
II) 401 : Unauthorized : Authentication Required
III) 403 : FOrbidden : Client Dosent Have Permisssion To access
IV) 404 :Not Fount : request Resource not Exists
=> 5XX : server Error
I) 500 : Internal Server Error : Indicates server failure
II) 502 : Bad Gateway : Server receied Invalid Responce From upstream server
III) 503 : Service Unavilable / Under Maintainace

// --------------------------------------------
@Routing : 
=> defines App responds to request at specific endpointsm and http request Methods(GET(retrive), POST(submit/create Data), PUT(Update existing resource, also use to cretae it), PATCH(used to apply partial Modification ro existing ones), Delete ),all(handles request for any methdod also use for applying middleware), use(appluy middleware)

=> "Router" is Class Express.js Creates Mountable ROute HAndles act as Mini app 

const dev = express.Router(); //to Initialize
dev.get('/:userId', (req, res) => {
    res.json(req.params)
  });
dev.post('/submit', (req, res) => {
    res.send('Form submitted!');
});
dev.put('/update', (req, res) => {
    res.json(req.params.dev);
});
dev.delete('/delete', (req, res) => {
    res.send('Data deleted!');
});
app.use("/", dev);  // To Use


=> app.get("/:id/:name
/:age?",(r,res)=>{ 
    let name = r.params.name; id = r.params.id;
    let age = r.params.age || "Optional Parametr";
    })

// ------------------------------------------------

@Static FIle in Express
=> to serve Static Fles like Images, CSS, JS file express use express.static("public")
=> `app.use( express.static("public") )`


// ----------------------------------------------


req (Request): The request object containing details about the incoming request.
res (Response): The response object used to send a response to the client.
next (Next): A function to `pass control` to the next middleware or route handler.

@Middleware
=> it is functions that have access to the request objct, responce object, and the next function in  request-reponce cycle. 
=> Middleware can do execute code, MAke Chnages to Request, Responce Object, End the request-responce Cycle, Call next Middleware In Stack.
=> app.use("specificPAth", (req,res,next)=>{} ) :- method used to Register Middleware that handles requests in express.js. you can use app.use to appy middleware globally or to specific path.
=>Middleware functions executes in order they are defined

=> Types
I) Application Level :- app.use()/HTTp_Method()

II) ROuter Level :- Use Instance Of express.Router()

III) Error-Handling :-  app.use((err, req, res, next) => c.loog(err.stack) res.status(500).send("server Error"))

IV) Built-in Middleware :- 
->express.static("public"), 
->express.json() :- parse incomeing request with JSON; 
->express.urlencoded( { extended : true } ) :- parse request in URL encoded data and extended(true) allow aprse nested array anmd ojects

V) Third Party Midlleware :- 
->body-parser :- for JSON,URL encoded Dtaa
->helmet :- security enhancement
-> cors : CROSS-ORIGIN Resource Sharing
-> cookie-parser : Parsing& Managing Cookies
->compression : for comporessing response bodies
=> CORS : CROSS ORIGIN RESOURCE SHARING :
-Security Mechanism Implemeted by brousers to restricts web pages from mmakig request to differnt domain than the one that served web page
app.use( cors() )


// middlewares declarations
const firstMidleware =  (req, res, next) => {
    console.log('LOGGED') 
    next()
 }
const secondMiddleware =  (req, res, next) => {
    console.log('LOGGED') 
    next()
 }

//globally apply middleware
//evevry time logs("Logged") on each requests
app.use(myLogger);

//apply on speciofic path
//Pass control to the next handler
app.use('/admin',myLogger);

// Apply multiple middleware functions runs sequencially
app.use(firstMiddleware, secondMiddleware);




// ------------------------------------------------------

@Responce Methods
=> res.download() => prompt file to be downloaded.
=> res.end() => end the responce Process.
=> res.json() => send a Json rsponce.
=> res.redirect() => redirect the request.
=> res.render() => render a view template.
=> res.send()/sendFile() => send a responce of various types.

@Request Object Property
=> req.baseUrl , req.cookkies, req.host,  req.hostname, req.ip, req.originalUrl, req.path, req.protocol
=> req.body  //contains key value pairs of what submitd in request body
=> req.fresh => retuerns boolean if still frsh in clients cache ;
=> req.params.name / req.params[1]=> itc ontains value of "/:name" 
=> req.route : contains matched path

//-----------------------------------------------

@Sessions 
-> to use session install package "express-session" then import it & Sesion data stored on serverside while session-Id sent to client cookie when actial data associated with that Session-ID resides in session store on server.

const session = require('express-session');

// to initialize and configer express-session 
app.use(session({
    secret: process.env.COOKIE_SECRET,  // sign sessionID coockie
    resave: false,    // bool determines session saved if hasn't been modfied
    saveUninitialized: true,  
    store: memoryStore, 
    cookie: { secure: false, maxAge : 3600000  }
}));

// to set or get (use) session using request object
//set
 req.session.userId = user.id;
 console.log( req.session.userId )

=>
req.session.regenrate(callback) : to regenrate session
req.session.destroy(callback)/reload(callback)/save(callback)
req.session.touch() ; updates last access time in session store

// ----------------------------------------------

@ Cookies
-> it is simple Small files sent to client with server request and stored in client side. on every website load cookie sent with request, user track, session managemnet(Sesion id), personlization
-> to use cookies install middleware `cookie-parser` or setHeader method

const cookieParser = require('cookie-parser');
app.use(cookieParser());

//set req.cookie("name","dev") using responce object
res.cookie('myCookie', 'cookie_value', { maxAge: 3600000, httpOnly: true});

//get req.cookies  using request object
 const myCookieValue = req.cookies.myCookie;
//clear
res.clearCookie('myCookie');

// -----------------------------------------------------------------

@ Dependencies :- 
=> Contains Package Necessary for Application in Production.
=>Installed & bundles Wth App WHen Deployed
eg. Express, DB Connectors, Libraries & App Core Logic


@ devDependencies
=> Contains Package That Used FOr DEvelopment & Testing Purpose
=> these Not require to run app in productin.
eg. Testing FRamework(Jest,Mocha), Task RUnners(Grunt,Gulp), Compilers(BAbel, ypescript), Linters(ESLint), COde Formatters(Prettier)


// ----------------------------------
Advantages : Fast & Light Weight, Flexible  Strcture, large Community SUpport, Full JS, Perfect For API

DisAdvantages : Lack of Authentication, Validaton FEturs Only via middleware or thjird Party libraries
// -----------------------------------------




// ---------------------------------------
MVC Folder Structure
|-- src
|   |-  middleware
|   |
|   |-  model
|   |   |- index.js
|   |   |- studentModel.js
|   |   |- usersModel.js
|   |   
|   |-  controller
|   |   |- studentController.js
|   |   |- usersController.js
|   |
|   |-  routes
|   |   |-index.js
|   |   |-userRoutes.js
|   |   |-studentRoutes.js
|
|- app.js
|-.env
|- package.json
// -----------------------------------------------------------------------------

// how to use routes
// // index.js use `router.use("path",routefile)`
import { Router } from 'express';
import employeeRoutes from './employeeRoutes.js';
import studentRoutes from './studentRoutes.js';

const router = Router();

router.use('/employees', employeeRoutes);
router.use('/students', studentRoutes);

export default router;
-------
// // Employee.js / Users.js  ROute File
import { Router } from 'express';
import {  getAllEmployees,  getEmployeeById,  createEmployee,  updateEmployee,  deleteEmployee,} from '../controllers/employeeController.js';

const router = Router();

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;


// // --------------------
// // how to use model.js
// index.js 
import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';
import EmployeeModel from './employeeModel.js';

const Employee = EmployeeModel(sequelize, DataTypes);

// Sync the models (optional, in production use migrations)
await sequelize.sync();

export { Employee };



// ------------------------------------------

Important NOtes :- 
when You write read from fs modlues in express uses give file path root as projectMain Folder & 


*/


