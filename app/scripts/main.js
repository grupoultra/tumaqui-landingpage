console.log('\'Allo \'Allo!');

$('#mailChimpModal').modal('show')

var queryString = window.location.search;

var linkMensual = document.getElementById('linkMensual');
linkMensual.setAttribute('href', linkMensual.getAttribute('href') + queryString);

var linkSemestral = document.getElementById('linkSemestral');
linkSemestral.setAttribute('href', linkSemestral.getAttribute('href') + queryString);

var linkAnual = document.getElementById('linkAnual');
linkAnual.setAttribute('href', linkAnual.getAttribute('href') + queryString);