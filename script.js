///////////////////////////////////////
// Lecture: Hoisting

/////////////////////////////////////////
//How Our Code is Executed: JS Parsers and Engines 

    //JS is always hosted on an enviroment like a browser
    //this is where JS runes
    //others are nodejs server 
    //this lec foces on browser 



    //When we are running our code there is a lot going on behind the scenes 

    //Hosts have JavaScript engines that take our code and exicutes it
    //JS engines are programs the exicutes JS

        //1st. code is parsed through a parser
        //this reads code line by line and cheaks if the syntix of code is correct 
        //2nd. Parser produces a data structer known as Abstract Syntax Tree
        //3nd Then it is translated into machine code 
        //4th finally code runs and does its work

/////////////////////////////////////////////
//Execution Contexts and The Execution Stack 

    //The order in which code is run

    //Execution Context - a JS enviroment 
    //Execution Context - a box or container, or a wrapper which a piece of our code is evaluated and executed 


    //The Defult execution context is the global execution context
    //code that is not inside any function
    //associated with the global object
    //In the browser, that's the windoe onject

    //ex.
    // var lastName === window.lastName
    //true

    //code that is inside of function 
    //it gets its own exection context 


///////////////////////////////////////////////
//Execution Contexts in Detail: Creation and Execution Phases and Hosting 


    //when a function is called a new exection context is put on top of the execution stack
    //This happens in two phases
    //1. Creation Phasa 
        //A) Creation of the Variable Object (VO)
        //B) Creation of the scope chain 
        //C) Determine the value of the 'this' variable 

    //2. Execution Phase
        //The code of the funtion that generated the current exection context is ran by line 

    //Creation of the Variable Object 
        //The argument object is created, containing all the arguments that were passed into the function 
        //The Code is scanned for FUNCTION DECLARATIONS: for each function, a property is 
            //created in the Variable Object, pointing to the function 
            //Code is scanned for variable declaration: for each variable, a property is created in the variable Oject,
            //and set to undefined 
            //funtion and variable declarations are known are Hoisting  
        //Hoisting means that the functions and var are availible before a function before exection phase starts

        //the difference is functions are already defined before the execution phase starts 


/////////////////////////////////////////////////////////////////////////////////////////
//Hoisting in practice 

        // calclateAge(1920);

        // function calclateAge(year){
        //     console.log(2018 - year);
        // }    

        // calclateAge(2000);

        //Hoisting allows the function call to work even though it is before the function
        //in the creation phase of the exection context in this case the global execution context 
        //the function delaration calcuteAge is stored in the var object even before the code is executed
        //that is why the code above works bc the calculateAge function is already available 


        //this only works for function declarations 
        //with function expresstions

        //retirment(1920);


        // var retirment = function(year){
        //     console.log(65 - (2016-year));

        // }

        // retirment(2000);

        //calling the function above in this ex does not work
        //hoisting does not work for function expresstions 

    //Hoisting also happens with variables but in a diffrent way 

        // console.log(age);

        // var age = 23;


        //in this example age is undefined 
        //in the creation phase code is scanned for variable declarations 
        //and the variables are then set to undefined 
    // var age = 23;

    // function foo(){
    //     var age = 63;
    //     console.log(age);
    // };
    // foo();
    // console.log(age);

        //the console logs come out diffrent bc the gobal vs local execution context object. 
        //the var have the same name but they are diffrent variables


    //biggest take away is we can use function declarations before we use them in our code 



///////////////////////////////////////
// Lecture: Scoping and the Scope Chain
    
    //This is a lecture about the creation of the scoping chain

    // Scoping answers the question "Where can we access a certain variable?"

    //Each new function creates a scope: the space/enviroment, in which the variable it defines
    //are accessible.

    //the only we have to create a new scope is to write a new function 

    //Lexical scoping: a functon that is lexically within another function gets access to the scope of the outer function
    //lexical means where something is written in the code


        //First scoping example


        // var a = 'Hello!';
        // first();

        // function first() {
        //     var b = 'Hi!';
        //     second();

        //     function second() {
        //         var c = 'Hey!';
        //         console.log(a + b + c);
        //     }
        // }

        //lexical scoping allows the first function the have access the its parents scope and all the var and functions it defines
        //the second function has aceess to the scope in the function is lexically so it has access to its parents and granparents var
        //this is called a scope chain 
        //if the JS does not find the var anywhere it throws an error 
        //This chain does not work backwards
        //the global scope has no access to function second and function first's variables
        //unless we return the values of the function 


        //how does this work behind the scences 
        //in the creation phase each execution context object will get the the exact scope chain 




    // Example to show the differece between execution stack and scope chain

        /*
        var a = 'Hello!';
        first();

        function first() {
            var b = 'Hi!';
            second();

            function second() {
                var c = 'Hey!';
                third()
            }
        }

        function third() {
            var d = 'John';
            console.log(a + b + c + d);
        }
        */

        //function 3 can only access variables in global function
        //in this c is not defined 
        //function 3 cannot acces var c bc execution stack is diffrent than scope stack 
        //scope stack only goes in one direction 




///////////////////////////////////////
// Lecture: The this keyword


    
    //last step of the creation phase is determining and setting of the 'this' variable or keyword
    //'this' is stored in the exection context object 

    //Regular function call: the this keyword points at the global object,
    //(the window object, in the browser).

    //Method call: the this variable points to the object that is calling the method

    //the this keyword is not assigned a value intil a function where it is defined is actually called 

    

























