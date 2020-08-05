// import React from 'react'
// import axios from 'axios'
const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/albums').then((albumFullData) => {
  console.log(albumFullData)
}).catch((error) => console.log(error))