import { useState } from 'react'
import './App.css'
import ResizableDiv from './components/ResizableDiv'
import TopBar from './components/TopBar'
function App() {

  return (
    <>
      <TopBar/>
      <ResizableDiv/>
    </>
  )
}

export default App
