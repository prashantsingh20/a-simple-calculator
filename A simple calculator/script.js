function getHistory(){
    var a = document.getElementById("history-value").innerText;
    if (a=="undefined")
    {
        return "";
    }
    return a;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
 }
function output(){
    return document.getElementById("output-value").innerText;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num!=""){
    document.getElementById("output-value").innerText=num;
 }
 else{
     document.getElementById("output-value").innerText=getFormattedNumber(num);
     //document.getElementById("output-value").innerText="";
   }
 }
function getFormattedNumber(num){
    if(num=="-"){
        return"";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function reverseNumberFormet(num){
    return Number(num.replace(/,/g,""));
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormet(getOutput());
            if(output){// if output has a value 
                output=output.substr(0,output.length-1);
                printOutput(output);
             }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output=="" &&history!="") {
                if(isNaN(history[history.length-1])){
                    history=history,substr(0,history.length-1);
            }
                }
        }
        if((output!=""||history!="") && this.id!="backspace"){
             output= output==""? output:reverseNumberFormet(output);
             history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("")
                }
            
        }
          
    });
}
var number = document.getElementsByClassName("number");
for (var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormet(getOutput());
        if(output!=NaN){//if output id a number
            output=output+this.id;
            printOutput(output);
        }
    });
}