import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/signin' className='flex items-center header-button'>
          Hello, Sign in
          {/* <UserIcon className='h-8 w-8' />
          <span className='font-bold>'>Sign in</span> */}
        </Link>
        <Link href='/cart' className='header-button'>
          <div className='flex items-end'>
            <ShoppingCartIcon className='h-8 w-8' />
          </div>
          Cart
          {/* <span className='font-bold>'>Cart</span> */}
        </Link>
      </nav>
    </div>
  )
}
