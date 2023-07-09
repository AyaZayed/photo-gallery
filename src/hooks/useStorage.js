import { useState, useEffect } from "react";
import {
    storage, ref, uploadBytesResumable, getDownloadURL, Timestamp, doc, addDoc, db, collection
} from "../data.js";

function useStorage(file) {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // references
        const storageRef = ref(storage, file.name)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref)
            const createdAt = Timestamp.now()
            // add image with random id
            await addDoc(collection(db, 'images'), { url, createdAt })
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage