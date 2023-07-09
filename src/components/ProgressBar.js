import React from 'react'
import useStorage from '../hooks/useStorage'

export default function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file)

    React.useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <div className='progress-bar' style={{ 'width': `${progress}%` }}></div>
    )
}
