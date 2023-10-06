import React, { useState, useMemo } from 'react'

import './App.scss'

export function App(): JSX.Element {
  const [counter, setCounter] = useState(0)

  const isEven = useMemo(() => counter % 2 === 0, [counter])

  return (
    <div className="App">
      <h1>react-boilerplate</h1>
      <div>
        Counter: {counter} is {isEven ? 'even' : 'odd'}
      </div>
      <div className="increment" onClick={() => setCounter((c) => c + 1)}>
        Add One
      </div>
    </div>
  )
}
