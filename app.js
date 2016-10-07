var hover = function() {
    $(".video").onmouseover(function() {
        $(this).css("border", "solid grey 1px;"); });
       
 $(".vidoo").mouseleave(function(){
      $(this).css("border", "none")
    });

};

$(document).ready(hover);