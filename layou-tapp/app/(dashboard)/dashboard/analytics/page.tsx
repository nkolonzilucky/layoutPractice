import Link from 'next/link'
import React from 'react'

const AnalyticsDashboard = () => {
  return (
    <div className='p-3'>
        <h1 className="text-3xl font-bold">
     Analytics Dashboard 
        </h1>
        <Link href={'/dashboard'}>Dashboards</Link>
    </div>
  )
}

export default AnalyticsDashboard
