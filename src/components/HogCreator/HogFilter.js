import React from 'react'

const HogFilter = ({
    isGreased, 
    setIsGreased, 
    setGreased, 
    hogs, 
    hogName, 
    setHogName, 
    setNamedHog
}) => {
    
    
    // filter hog data
    const filteredHogs = hogs.filter((hog) => hog.greased === true)
    const nameFilter = hogs.filter((hog) => hog.name === hogName)
  

    // handle Change/Click
  const handleCheck = () => {
    setIsGreased(isGreased => !isGreased)
    setGreased(filteredHogs)
  }

  const handleChange = (e) => {
    setHogName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setNamedHog(nameFilter)
  }

  return (
    <div>
         <form>
        <input type="text" placeholder='Filter Name...' onChange={handleChange}></input>
        <label>Filter Greased:
          <input type="checkbox" checked={isGreased} onChange={handleCheck}></input>
        </label>
        <input type="text" placeholder='Filter Weight...'></input>
        <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default HogFilter