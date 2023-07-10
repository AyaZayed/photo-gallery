import React from 'react'
import { db, query, collection, orderBy, onSnapshot } from '../data.js'
import { useEffect, useState } from 'react'

export default function ImagesList({ setImg }) {
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        async function getDocsFromFirestore() {
            const q = query(collection(db, 'images'), orderBy('createdAt', 'desc'))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const documents = []
                querySnapshot.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id })
                })
                setImgs(documents)
            })
            return unsubscribe
        }
        getDocsFromFirestore()
    }, [])

    return (
        <div className='imgs-list'>
            {imgs && imgs.map(img => (
                <div className='img-wrap' key={img.id} onClick={() => setImg(img.url)} >
                    <img src={img.url} alt='uploaded pic' />
                </div>
            ))}
        </div>
    )
}
