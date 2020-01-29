export default function getBaseUrl (){
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://whispering-springs-68474.herokuapp.com/'; // '/' can be a hosted real api app https://shrouded-refuge-41310.herokuapp.com
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
