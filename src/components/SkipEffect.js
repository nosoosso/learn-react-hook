import React, {useState, useEffect} from 'react'

export const SkipEffect = () => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log('updated to ' + num)

    return () => {
      console.log('cleaned up')
    }
  }, [num])

  const handleClick = (selectedNumber) => (ev) => {
    setNum(selectedNumber)
  }

  return (
    <div>
      <div>
        current: {num}
      </div>
      <button onClick={handleClick(0)}>0</button>
      <button onClick={handleClick(1)}>1</button>
    </div>
  )
}
