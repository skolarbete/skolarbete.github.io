var hover = function() {
    $(".video").mouseenter(function() {
        $(this).css("box-shadow", "1px 1px 1px #d3d1d1"); 
    });
       
 $(".video").mouseleave(function(){
      $(this).css("box-shadow", "none");
    });

};

$(document).ready(hover);
