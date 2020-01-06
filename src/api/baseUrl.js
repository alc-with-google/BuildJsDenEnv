export default function getBaseUrl (){
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/' : '/'; //let's assume '/' is the real api, it might be https://shrouded-refuge-41310.herokuapp.com
  }
