import React from 'react'
import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/albums').then((albumFullData) => {
  console.log(object)
}).catch((error) => console.log(error);)