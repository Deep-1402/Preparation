/*
- Js ENgine Is Responsible fot executing Js Script
- Node.js is runtime envioronment used to build server side application
- JS Engine Consist of tWo Things 
    1.Call Stack(holds Current Execution and Its Related Primitive Datatypes) 
    2.Heap Memory(Stores all Object,Function And Array need for App)

1. Call Stack Where Actually JS Executed using Execution Context.
- There Are Two Execution Context
 (i).Global Execution Context   
 (ii).Function Execution Context
 
(i).GEC (Default and Base Execution Context) 
 =>Created (only Once) When Engine Loads Script 
 =>Varibles and Functions Mostly Declared Globally Resides In GFC.
 
(ii).FEC (Created Every time Function Invokes)
 => their Own Scope of Variable ANd Inner Function 
 => Execution Context COnsist of Two Main Phase 
    1.Creation 
    2.Execution

1.Creation Phase
=>Varibale Environment :- Stores Variable and Function Declaration as key value Pairs values like Undefind for Variables (Hoisting)
=>Laxical Envirobnments :- Defined Scope of variables/Functions and a Reference of Outer Lexical Environment. (Scope Chain : When Variable is accessed The Engine firsr Search in current Laxical Scope and then the Outer Laxical SCope and So on Untill Founs Global Scope)
=>this binding : This keyword Value Is determind during This Phase 

2.Execution Phase 
 =>JS is SIngle Threaded Language So It Executes Line By Line 
 =>in this Phase VAriable Are Assigend to actual Values ans Function call (executed)
 ==>Call Stack (LIFO Approch) :-  A Data Structure Use By JS To keep Track of Execution Context. 
 - When Execution Starts First Global Execution Context Push on top Of The Stack  and Starts Execution.
 - And WHen Function Called As Discussed It Creates Function Execution Context And Pushes To top Call Stack and Starts Execution.
 - and When Inner Function Called JS again Creates FEC and Pushes to Top of Stack
 - means WHen Inner function Finishes Execution Then It Poped off and then Outer Function Finishes Exceution and Poped off the Stack and finally GEC finishes Execution and Poped of the stack. and if Callback Queue is have any FUnction left then Event loop pushes it to Call Stack.



*/
