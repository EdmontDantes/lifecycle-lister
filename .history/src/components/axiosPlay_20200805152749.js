// import React from 'react'
// import axios from 'axios'
const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
let new album data = albumFullData.data.slice(0, 19) 
console.log(albumFullData)

}).catch((error) => console.log(error))