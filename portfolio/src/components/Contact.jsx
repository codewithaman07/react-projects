import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -70 }}
        transition={{ duration: 1 }}
        className='my-20 text-center text-4xl'>
          Contact 
          <span className='text-neutral-500'> Me</span>
      </motion.h2>

      <div className="text-center tracking-wide">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'>
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='my-4'>
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='my-4 border-b'>
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  )
}

export default Contact
