import axios from 'axios'

const jsonWebToken = localStorage.getItem('token') || null
console.log("JWT: ", jsonWebToken)

let apiUrl

const apiUrls = {
  production: 'https://tech-blogger-app.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${jsonWebToken}`,
    'Access-Control-Allow-Origin': '*'
  }
})

export default api