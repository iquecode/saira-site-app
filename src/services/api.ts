import axios from 'axios';

const api = axios.create({
  baseURL: 'https://parseapi.back4app.com/functions',
  headers: {
    'X-Parse-Application-Id': process.env.NEXT_PUBLIC_PARSE_APP_ID || '',
    'X-Parse-REST-API-Key': process.env.NEXT_PUBLIC_PARSE_REST_KEY || '' ,
    'Content-Type': 'application/json'
  }
})


export default api