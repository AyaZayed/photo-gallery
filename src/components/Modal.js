import React from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

export default function Modal({ img, setImg }) {
    const handleBackdrop = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setImg(null)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className='backdrop' onClick={handleBackdrop}>
            <AnimatePresence>
                <motion.img initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ duration: .3 }} src={img} alt='enlarged pic' />
            </AnimatePresence>
        </motion.div>
    )
}
