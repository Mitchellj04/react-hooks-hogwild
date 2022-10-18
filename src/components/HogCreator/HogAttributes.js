import React from 'react'

const HogAttributes = ({specialty, weight, greased, highestMedalAchieved}) => {
  return (
    <div>
      <ul>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight} lbs</p>
        <p>Greased: {greased ? "greasy" : "clean"}</p>
        <p>highest Medal: {highestMedalAchieved}</p>
      </ul>
    </div>
  )
}

export default HogAttributes