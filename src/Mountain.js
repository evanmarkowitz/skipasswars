import React from 'react'

const Mountain = props => {
  const dispCard = () => {
    let cName = 'mtn--card'
    if (props.mtn.name === undefined) {
      cName = 'hide'
    }
    return cName
  }

  const setCurrMtn = event => {
    props.setCurrMtn({})
  }

  return(
    <article className={dispCard()} >
      <h3>{props.mtn.name}</h3>
      <ul className="mtn--card--list">
        <li>Peak Elevation: {props.mtn.peakElevation} ft</li>
        <li>Base Elevation: {props.mtn.baseElevation} ft</li>
        <li>Vertical Drop: {props.mtn.verticalDrop} ft</li>
        <li>Skiable Acerage: {props.mtn.skiAbleAcerage} acres</li>
        <li>Total Trails: {props.mtn.totalTrails}</li>
        <li>Total Lifts: {props.mtn.totalLifts}</li>
        <li>Average Snow: {props.mtn.avgSnow} inches</li>
      </ul>
      <button onClick={setCurrMtn}>x</button>
    </article>
  )
}

export default Mountain