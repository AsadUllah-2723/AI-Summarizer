import React from 'react'
import Summary from "./components/Summary"
import Hero from "./components/Heading"

const App = () => {
  return (
    <main>
      <div className="main">
        <div className='gradient' />
      </div>

      <div className="app">
        <Hero />
        <Summary />
      </div>
    </main>
  )
}

export default App