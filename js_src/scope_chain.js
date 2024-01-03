function a(){   // global and GEC
    var b=10;
    c();
    function c(){   // has access to global and its lexical parent i.e a();
        console.log(b);
    }
}
a();


// scope -> where we can access thee variable

// lexical enviroment is basically where the piece of code is places 

// LexicalEnviroment -> executionContext of local memory + refrence to lexical enviroment of its parent 