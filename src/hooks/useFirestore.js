// import { db, getDocs, query, collection, orderBy, onSnapshot } from '../data.js'
// import { useEffect, useState } from 'react'

// function useFirestore(collectionName) {
//     const [imgs, setImgs] = useState([])
//     useEffect(() => {
//         async function getDocsFromFirestore() {
//             const q = query(collection(db, 'images'), orderBy('createdAt', 'desc'), limit(12))
//             const unsubscribe = onSnapshot(q, (querySnapshot) => {
//                 const documents = []
//                 querySnapshot.forEach((doc) => {
//                     documents.push({ ...doc.data(), id: doc.id })
//                 })
//                 setImgs(documents)
//             })
//             return unsubscribe
//         }
//         const unsubscribe = getDocsFromFirestore()
//         return () => unsubscribe()
//     }, [collectionName])
// }

// export default useFirestore