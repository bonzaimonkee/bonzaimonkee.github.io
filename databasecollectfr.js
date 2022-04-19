<script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
<script type='text/javascript'>    
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRgOIfbhR9gVScoYvJyGKJ_6CmH6ssMKol4x7QLFFcJEeGCDVjY2TUQIkUXGdkwiLeC6KsPUFIQp9ZT/pubhtml';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
for (var i = 0; i < data.length; i++) {
$(‘.post’).append(
‘<div class=”text”>’ +
‘<h1>’ + data[i].yourusername + ‘</h1>’+
‘</div>’);
  }
}
  window.addEventListener('DOMContentLoaded', init)
</script>