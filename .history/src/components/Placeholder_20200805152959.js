import React from 'react'
import axios from 'axios'

// axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
// let newAlbumData = albumFullData.data.slice(0, 20) 
// console.log(newAlbumData)
// return newAlbumData;
// }).catch((error) => console.log(error))

const PlaceHolder = () => {
  return(
    <div>
    {axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
      let newAlbumData = albumFullData.data.slice(0, 20) 
      console.log(newAlbumData)
      return newAlbumData;
      }).catch((error) => console.log(error))}
    </div>

  )

}

export default PlaceHolder;