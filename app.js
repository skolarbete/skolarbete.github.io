var hover = function() {
    $(".video").mouseenter(function() {
        $(this).css("border", "solid green 5px"); 
    });
       
 $(".video").mouseleave(function(){
      $(this).css("border", "none");
    });

};

$(document).ready(hover);
