import React from 'react'



const PlaceHolder = (props) => {

    return(
      <div>
        <div>
        {props.data.map((element, idx) => {
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

