// import React from 'react'
// import axios from 'axios'
const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
albumFullData.data[0].slice(0, 19) 
console.log(albumFullData)

}).catch((error) => console.log(error))