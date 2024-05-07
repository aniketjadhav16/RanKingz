import { useState } from 'react'
import './App.css'

//components
import Images from './components/Images';
import UploadButton from './components/UploadButton';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
