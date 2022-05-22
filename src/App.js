import React, { useState } from 'react'
import Button from './components/Button'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Profile text={`Current count is: ` + count} />
      <button className="custom-btn btn-16" onClick={() => setCount(count + 1)}>+</button>
      <button className="custom-btn btn-16 ml" onClick={() => { if (count !== 0) setCount(count - 1) }}>-</button>
      <Button setCount={setCount} buttonText='RESET' />
    </>
  )
}

export default App