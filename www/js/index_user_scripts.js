/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #reset */
    $(document).on("click", "#reset", function(evt)
    {
        var valueInput = document.getElementById("textInput");
        var valueResult = document.getElementById("textResult");
        valueInput.value = "";
        valueResult.textContent = "| Resultado |";
    });
    
        /* button  #calculate */
    $(document).on("click", "#calculate", function(evt)
    {
        var valueInput = document.getElementById("textInput");
        var valueResult = document.getElementById("textResult");
        
        var startTime = new Date().getTime();
        for (var i=0; i<parseInt(valueInput.value); i++);
        var endTime = new Date().getTime();
        
        valueResult.textContent = "Resultado: "+(endTime-startTime);
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
