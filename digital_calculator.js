$(document).ready(function() {
    let display=$("#display");
    $(".number,.operator").click(function() {
        let value=$(this).text();
        display.val(display.val()+value)
    });
    $("#equals").click(function(){
        try{
            display.val(eval(display.val()))
        }catch(error){
            display.val("Error")
        }
    });

    $("#clear").click(function(){
        display.val("");
    });

    $("#backspace").click(function(){
        let currentValue=display.val();
        len=currentValue.length;
        display.val(currentValue.slice(0,len-2))
    });

    $("#sqrt").click(function(){
        let currentValue=parseFloat(display.val());
        display.val(Math.sqrt(currentValue));
        
    });

    $("#pi").click(function(){
        let v=Math.PI.toFixed(5);
        display.val(v);
    });
});