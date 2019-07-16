import React, {useState, useEffect} from 'react'

export const Main = () => {
  const [state, setState] = useState({
    count: 0,
  })

  const increment = () => {
    setState({
      ...state,
      count: state.count + 1,
    })
  }

  useEffect(() => {
    console.log('count is ' + state.count)
  })

  return (
    <div>
      <div>
        count: {state.count}
      </div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
