import React from 'react'
import axios from 'axios'


let savedAlbumData = []

axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
let newAlbumData = albumFullData.data.slice(0, 20)
savedAlbumData = newAlbumData
console.log(newAlbumData)
return savedAlbumData;
}).catch((error) => console.log(error))

const PlaceHolder = () => {
  return(
    <div>

      <div>
      {savedAlbumData.map((element, idx) => {
        return(
          
          <div key={idx}>
          <img src={element[0].thumbnailUrl} alt='...' />
            <div>
              <span>{element.title}</span>
            </div>
            </div>

        ) 
      })}
    </div>
      <div></div>
    </div>

  )

}

export default PlaceHolder;