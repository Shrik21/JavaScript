let i=0;
function show(){
   // console.log("Hi "+i);
    i++;
    if(i<11)
        show();
    
}

show();

// factorial using recursion
function fact(n) {
    
   if(n>=1) 
     return n * fact(n-1);
   
    else
        return 1; 
        
}

console.log(fact(6));