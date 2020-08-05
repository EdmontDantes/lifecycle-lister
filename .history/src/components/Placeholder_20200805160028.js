import React from 'react'
import axios from 'axios'


const PlaceHolder = async () => {

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

}

export default PlaceHolder;