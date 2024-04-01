import Link from 'next/link'
import React from 'react'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink';

const navitems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' }
];

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link className='flex items-center' href="/"><span>
        <HomeIcon className='mr-2' />
        Home</span></Link>
      <div className='flex flex-1' />
      {
        navitems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}
