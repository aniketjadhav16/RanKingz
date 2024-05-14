import { useState } from 'react'
import './App.css'

//components
import Images from './components/Images';
import UploadButton from './components/UploadButton';


function App() {
  

  return (
    <>
      <div>
        <h1>Welcome to RanKingz</h1>
        <h4>Here you can vote for photos and get them at the top of the leaderboard</h4>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px' }}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Images />
          <UploadButton />
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Images />
          <UploadButton />
        </div>
      </div>
    </>
  )
}

export default App
