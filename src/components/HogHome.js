import { render } from '@testing-library/react'
import React , {useState} from 'react'
import HogTile from './HogCreator/HogTile'
import HogFilter from './HogCreator/HogFilter'

const HogHome = ({hogs}) => {

  // useState
  const [greased, setGreased] = useState([])
  const [namedHog, setNamedHog] = useState([])
  const [isGreased, setIsGreased] = useState(false)
  const [hogName, setHogName] = useState("")

  // Map hog data
  const renderHog = hogs.map(data => <HogTile dataObj={data} key={data.name}/>)
  const greasedHog = greased.map(data => <HogTile dataObj={data} key={data.name}/>)
  const nameSearch = namedHog.map(data => <HogTile dataObj={data} key={data.name}/>)
     

  // Render Hogs dependent on changes
  const greasedHogs = () => {
    if(isGreased === true){
      return greasedHog
    }
    else if(namedHog.length > 0){
      return nameSearch
    }
    else{
      return renderHog
    }
  }

    return (
    <>
        <HogFilter 
          isGreased={isGreased} 
          setIsGreased={setIsGreased} 
          setGreased={setGreased} 
          hogs={hogs}
          hogName={hogName}
          setHogName={setHogName}
          setNamedHog={setNamedHog}/>

      <div className='ui grid container'>
          {greasedHogs()}
      </div>
    </>

    )}

export default HogHome