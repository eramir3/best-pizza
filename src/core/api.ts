import axios from 'axios';

export default axios.create({
  baseURL: 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json'
});