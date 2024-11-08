import Link from 'next/link'
import React from 'react'

interface User {
    name: string
}

const users: User[] = [
    { name: 'User 1'},
    { name: 'User 2'},
    { name: 'User 3'},
    { name: 'User 4'},
]

function Auser ({ name }:{name: string}) {
    const id = name.split(" ")[1]
    return (<li>
        <Link href={"/dashboard/users/"+id}>
        {name}
        </Link>
        </li>);
}

const UsersDashboardPage = () => {
  return (
    <div className='p-3'>
        <h1 className="text-3xl font-bold">
     Users Dashboard 
        </h1>
        <ul className='mt-1 pl-5'>
            {users.map((user) => <Auser key={user.name} name={user.name} />)}
        </ul>


        <Link href={'/dashboard'}>Dashboards</Link>
    </div>
  )
}

export default UsersDashboardPage
