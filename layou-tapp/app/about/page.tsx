import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='p-3'>
     <h1 className='text-3xl font-thin'>About Us</h1> 
     <Link href={'/'}>Home</Link>
    </div>
  )
}

export default AboutPage
