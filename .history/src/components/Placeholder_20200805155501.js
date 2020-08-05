import React from 'react'
import axios from 'axios'


const PlaceHolder = async () => {
  try {
    
    let savedAlbumData = [];
    
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((albumFullData) => {
    let newAlbumData = albumFullData.data.slice(0, 20)
    savedAlbumData = [...newAlbumData]
    // console.log(savedAlbumData)
    return newAlbumData;
    }).then((newNewAlbumData) => {
      savedAlbumData = newNewAlbumData.slice()
      return savedAlbumData;
    }).catch((error) => console.log(error))
    
    console.log(savedAlbumData)
    return(
      <div>
        <div>
        {savedAlbumData.map((element, idx) => {
          return(
            
            <div key={idx}>
            <div>
            <span>{element.title}</span>
            <img src={element.thumbnailUrl} alt='...' />
              </div>
              </div>
  
          ) 
        })}
      </div>
  
      </div>
  
    )
  } catch {

  }

}

export default PlaceHolder;