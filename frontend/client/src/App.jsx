import { useState } from 'react'
import './App.css'

//components
import Images from './components/Images';
import UploadButton from './components/UploadButton';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Images />
      <UploadButton />
    </>
  )
}

export default App
