// import React from 'react'
// import axios from 'axios'
const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
albumFullData.slice(0) 
console.log(albumFullData)

}).catch((error) => console.log(error))