import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='p-3'>
      <h1 className="text-3xl font-thin ">Dashboard</h1>


      
      <Link href={'/dashboard/users'}>Users</Link>
      <br />
      <Link href={'/dashboard/analytics'}>Analytics</Link>
      <br />
      <Link href={'/'}>Home</Link>
    </div>
  )
}

export default DashboardPage
