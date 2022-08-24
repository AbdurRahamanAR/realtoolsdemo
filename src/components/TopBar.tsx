import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const navItems = [
  {label: 'Active Listings', url: '/listing'},
  {label: 'Sell your Self Storage', url: '/sell'},
  {label: 'Free Evaluation', url: '/free_evaluation'},
  {label: 'Learn', url: '/learn'}
]

export default function TopBar() {
  return (
      <div className='bg-primary flex justify-center' >
        <div className='flex justify-between w-full max-w-screen-xl p-[30px]'>
          <Logo type='secondary' /> 
          <ul className='flex gap-x-10 items-center'>
            {navItems.map(navItem=> 
              <li key={navItem.label} className="text-white text-lg font-normal leading-5">
                <Link to={navItem.url}>{navItem.label}</Link>
              </li>
            )}
            <li className='bg-secondary text-sapphire font-medium text-lg rounded-[10px] py-2 px-[18px]'>
              Contact
            </li>
          </ul>
        </div>
      </div>
  )
}
