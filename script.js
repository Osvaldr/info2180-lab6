// JavaScript File
$(document).ready(function() {
  
  let searchBtn = $('#search');
  let query =$('#value');
  let result = $('#result');
  
  searchBtn.click(function(){
    $.ajax({
      type: 'get',
      url: 'request.php',
      data: { q: query.val()},
      success: function(data){
        result.html(data);
      }
    })
  })
});