import React from 'react'
import useStorage from '../hooks/useStorage'
import ProgressBar from './ProgressBar'

export default function UploadForm() {
    const [file, setFile] = React.useState(null)
    const types = ['image/png', 'image/jpeg']
    const [error, setError] = React.useState(null)

    const handleAdd = (e) => {
        const file = e.target.files[0]
        if (file && types.includes(file.type)) {
            setFile(file)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }
    return (
        <form className='upload-form'>
            <label htmlFor='file'>
                +
                <input type="file" id='file' accept={types} onChange={handleAdd} />
            </label>
            <div className="output">
                {file && <div className='name'>{file.name}</div>}
                {error && <div className='error'>{error}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
