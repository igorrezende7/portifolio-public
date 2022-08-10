import axios from 'axios';
const Api = axios.create({baseURL:'https://apiport.herokuapp.com/'});
export default Api;