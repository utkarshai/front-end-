

/* 
    
    try{
    aleert("Hello User"); 
}
catch(err){
 document.getElementById("test").innerHTML = err.message;   
} */
    
    
    
//-- my own error -->

function myError(){
    var msg, x;
    msg=document.getElementById("msg");
    
//this above code is only to selct that id 
    
    
    msg.innerHTML= "";
    //<!-- making sure that it is empty -->
    
    x= document.getElementById("some").value;
    try{
        if(x=="") throw("please choose a number");
        if(isNaN(x)) throw("only numbers are allowed");
        if(x<4) throw("choopse a number less han 4");
    }
        catch(err){
            msg.innerHTML="Error is " + err;
        }
        finally{
            document.getElementById("some").value = "";
        }
            
    
    
    
    
}