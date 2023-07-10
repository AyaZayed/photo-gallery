import React from 'react'

export default function Modal({ img, setImg }) {
    const handleBackdrop = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setImg(null)
        }
    }

    return (
        <div className='backdrop' onClick={handleBackdrop}>
            <img src={img} alt='enlarged pic' />
        </div>
    )
}
