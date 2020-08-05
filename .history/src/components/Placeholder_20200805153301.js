import React from 'react'
import axios from 'axios'

// axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
// let newAlbumData = albumFullData.data.slice(0, 20) 
// console.log(newAlbumData)
// return newAlbumData;
// }).catch((error) => console.log(error))

const PlaceHolder = () => {
  let savedAlbumData = []
  return(
    <div>
    {axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
      let newAlbumData = albumFullData.data.slice(0, 20) 
      console.log(newAlbumData)
      savedAlbumData = newAlbumData
      return savedAlbumData;
      }).catch((error) => console.log(error))}
      <div>
      {this.state.list.map((element, idx) => {
        return <li key={idx}>{element.name}</li>
      })}
    </div>
      <div></div>
    </div>

  )

}

export default PlaceHolder;