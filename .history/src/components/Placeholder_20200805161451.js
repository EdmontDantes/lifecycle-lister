import React from 'react'



const PlaceHolder = (props) => {

    return(
      <div>
        <div>
        {props.data.map((element, idx) => {
          return(
            
            <div key={idx} style={{border: '1px solid black'}}>
            <div>
            <span>{element.title}</span>
            <a href={element.url}>(element</a>
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

