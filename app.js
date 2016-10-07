var hover = function() {
    $(".video").mouseenter(function() {
        $(this).css("border", "solid grey 2px"); 
    });
       
 $(".video").mouseleave(function(){
      $(this).css("border", "none");
    });

};

$(document).ready(hover);
