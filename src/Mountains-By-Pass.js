import React from 'react';
import Mountain from './Mountain.js'
import './mountain-by-pass.scss'
// import App from './app.js'

const MountainsByPass = ({mountains, title, adultCost, childCost, setCurrMtn}) => {

  const displayMtnSpec = event => {
    let clckdMtn = mountains.find(m => m.id == event.target.id)
    setCurrMtn(clckdMtn)
  }

  const showMountains = mountains.map(mountain => {
    return <p onClick={displayMtnSpec} className="mountain-button" id={mountain.id} key={mountain.id}>{mountain.name}</p>
  })
  return (
    <article className="mtn-by-pass">
      <img src = {title} alt='logo' className='logo'/>
      <h3>Adult price: {adultCost}</h3>
      <h3>Child price: {childCost}</h3>
        <h3>Resorts</h3>
        {showMountains}
    </article>
  )
}

export default MountainsByPass 