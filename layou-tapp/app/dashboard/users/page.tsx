import Link from 'next/link'
import React from 'react'

const UsersDashboardPage = () => {
  return (
    <div className='p-3'>
        <h1 className="text-3xl font-bold">
     Users Dashboard 
        </h1>
        <Link href={'/dashboard'}>Dashboards</Link>
    </div>
  )
}

export default UsersDashboardPage
