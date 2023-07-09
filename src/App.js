import UploadForm from './components/UploadForm'
import './css/App.css'
import ImagesList from './components/ImagesList'

export default function App() {
  const headerSvg = new URL('../public/header.svg', import.meta.url).href
  return (
    <div className="App">
      <img src={headerSvg} alt="firegram" className="header" />
      <p>Feel free to add your own images</p>
      <UploadForm />
      <ImagesList />
    </div>
  )
}
