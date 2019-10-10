import React from 'react';

const DogCard = props => {
  return (
    <div>
  <img src = {props.message}/>
  <p>Woof woof... Grrr grrr...</p>
  </div>
  )
  
}

export default DogCard;