// JavaScript File
$(document).ready(function() {
  let searchBtn = $('#search');

  searchBtn.on('click', function() {
    $.ajax({url:'request.php?q=definition',
      method: 'GET'
    }).done(function(response) {
      alert($(response).text());
    }).fail(function() {
      alert('There was a problem with the request.');
    });
  });
});