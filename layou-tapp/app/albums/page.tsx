import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface AlbumType {
    userId: number;
    id: string;
    title: string;
}

const AlbumsPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    if(!res) throw new Error('NO ALBUMS FOUND')
    const albums: AlbumType[] = await res.json();

  return (
    <div>
        <h1>Albums</h1> 
        <div className='mt-10 pl-5'>
            <ul className='flex space-x-2'>
                {albums.map((album) => <Album key={album.id} album={album} />)}
            </ul>
        </div>
        <Link href={'/'}>Home</Link>
    </div>
  )
}

export default AlbumsPage

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
}
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
} 

interface Geo {
    lat: string;
    lng: string;
}

async function Album({ album }: { album: AlbumType}) {
    const albumWithImage = { imageUrl: 'https://dummyjson.com/image/150', ...album }
    const { id, title, userId, imageUrl } = albumWithImage;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user: User = await res.json();

    return (
        <li>
            <div className='relative'>
                <Image 
                    src={imageUrl}
                    width={150}
                    height={150}
                    alt='Album Cover'
                />
                <span className='absolute top-0 left-0'>{id}</span>
            </div>
            <h3 className='font-thin'>{title}</h3>
            <h3>{user.username}</h3>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>


        </li>
    );
}