import React from 'react'

const UserPage = ({ params }: {params: {id: string}}) => {
    const { id } = params;
  return (
    <div>
      User detailes page for user {id}
    </div>
  )
}

export default UserPage
