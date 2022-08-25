import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
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

          <button className='lg:hidden'>
            <Icon icon="list" width={30} className="text-white" />
          </button>

          {/* Desktop Nav */}
          <ul className='hidden lg:flex gap-x-4 lg:gap-x-10 items-center'>
            {navItems.map(navItem=> 
              <li key={navItem.label} className="text-white text-lg font-normal leading-5">
                <Link  to={navItem.url}>{navItem.label}</Link>
              </li>
            )}
            <li className='bg-secondary text-sapphire font-medium text-lg rounded-[10px] leading-5 py-2 px-[18px]'>
              Contact
            </li>
          </ul>
        </div>
      </div>
  )
}
