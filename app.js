// Dashiell

$(document).ready(function() {
 
 $('body').on("click", ".circle", function(e) {
   console.log(e.target)
   $(e.target).toggleClass("check")
});

$('body').on("click", ".delete", function(e) {
   console.log(e.target)
   $(e.target).parent()
   .detach()
});

$('#enter').click(function(e) {
  // select #text written inside #input
  var text = $('#text').val()
  console.log(text)
  // create new "list-item"
  var newitem = '<li class="list-item"><div class="circle">&nbsp;</div><div class="title">'+text+'</div><div class="delete">&nbsp;</div><div class="movebutton">&nbsp;</div></li>'  
  // title "list-item" w/ #text
  $('#list1').append(newitem)
  // clear text in #input
  $('input:text').focus(
    function(){
        $(this).val('');
    });
})

}); 