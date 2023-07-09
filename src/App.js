import UploadForm from './components/UploadForm'
import './css/App.css'
import ImagesList from './components/ImagesList'

export default function App() {
  return (
    <>
      <h1>Photo Gallery</h1>
      <div className="App">
        <UploadForm />
        <ImagesList />
      </div>
    </>
  )
}
