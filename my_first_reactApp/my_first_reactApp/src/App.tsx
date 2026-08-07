import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header' 
 



function App() {
 

  return (
    <>
        <p>Meow</p>
        <Header></Header>

         <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <button type="submit">Submit</button>
      </form>
        
    </>
  )
}

export default App
