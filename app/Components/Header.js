import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='h-10 bg-green-500 text-white flex items-center justify-between'>Logo
      <div className='flex gap-8'>
        <Link href="/About">About</Link>
        <Link href="/Courses">Courses</Link>
        <Link href="/Product">Product</Link>
      </div>
    </div>
  )
}

export default Header