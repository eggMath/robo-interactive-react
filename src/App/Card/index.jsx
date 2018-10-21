import React from 'react'

 const Card = () => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow'>
        <img alt="robot" src="https://robohash.org/test?200*200"/>
        <div className='tc'>
             <h2>the Iron man</h2>
             <p>ironMan@gmail.com</p>
        </div>
    </div>
  )
}

export default Card