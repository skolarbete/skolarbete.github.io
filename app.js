var hover = function() {
    $(".video").mouseenter(function() {
        $(this).css("border", "solid green 1px;"); });
       
 $(".video").mouseleave(function(){
      $(this).css("border", "none")
    });

};

$(document).ready(hover);
