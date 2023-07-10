import UploadForm from './components/UploadForm'
import './css/App.css'
import ImagesList from './components/ImagesList'
import Modal from './components/Modal'
import { useState } from 'react'

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  const headerSvg = new URL('../public/header.svg', import.meta.url).href
  return (
    <div className="App">
      <img src={headerSvg} alt="firegram" className="header" />
      <p>Feel free to add your own images</p>
      <UploadForm />
      <ImagesList setImg={setSelectedImg} />
      {selectedImg && <Modal img={selectedImg} setImg={setSelectedImg} />}
    </div>
  )
}
