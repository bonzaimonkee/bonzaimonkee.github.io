function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRgOIfbhR9gVScoYvJyGKJ_6CmH6ssMKol4x7QLFFcJEeGCDVjY2TUQIkUXGdkwiLeC6KsPUFIQp9ZT/pubhtml', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)
          }
        })
window.addEventListener('DOMContentLoaded', init)