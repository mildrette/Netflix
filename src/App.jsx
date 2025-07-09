import React from 'react'
import Header from './components/Header';
import HeroBanner from "./components/HeroBanner";

import './App.css'

function App() {

  return (
    <>
      <Header /> 
      <HeroBanner
  background="/banner.jpg"
  title="Lupin"
  description="A gentleman thief and master of disguise sets out to avenge his father’s death."
/>
    
    </>
  )
}

export default App
