import {useState, React} from 'react'
import HogAttributes from './HogAttributes'
import "./HogTile.css"

const HogTile = ({dataObj: {name, image , specialty, weight, greased, "highest medal achieved":highestMedalAchieved}}) => {

   const [isActive, setIsActive] = useState(false)
   
 

  const handleSubmit = () => {
    setIsActive((isActive) => !isActive)
  }

  function activeAttributes(){
      if(isActive === true){
        return (
        <HogAttributes specialty={specialty} weight={weight} greased={greased} highestMedalAchieved={highestMedalAchieved}/> )
      }
  }

  return (
      <div className='ui eight wide column' onClick={handleSubmit}>
        <article className='pigTile'>
          <h1>{name}</h1>
          <img src={image} alt={name} className="minPigTile"/>
          {activeAttributes()}
        </article>
      </div>
  

  )
}

export default HogTile