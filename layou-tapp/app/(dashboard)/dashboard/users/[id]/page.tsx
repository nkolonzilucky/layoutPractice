import React from 'react'

const  UserPage = async ({ params }: {params: {id: string}}) => {
    const { id } = await params;
  return (
    <div>
      User detailes page for user {id}
    </div>
  )
}

export default UserPage
