'use client'
import React from 'react'
const GlobalError = (
    {error,} : {error: Error & {digest?: string}}
) => {
  return (
    <div>
      Global error
    </div>
  )
}

export default GlobalError
