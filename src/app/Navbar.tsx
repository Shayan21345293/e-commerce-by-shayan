import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='bg-[#FBEBB5] h-[100px]'>
      <div className='flex items-center justify-between px-10 h-full'>
        {/* Left section - Placeholder */}
        <div className='flex justify-between pl-48'></div>

        {/* Centered Links */}
        <div className='flex space-x-20'>
          <Link href={"/"} className='text-black font-medium text-lg'>
            Home
          </Link>
          <Link href={"/shop"} className='text-black font-medium text-lg'>
            Shop
          </Link>
          <Link href={"/about"} className='text-black font-medium text-lg'>
            About
          </Link>
          <Link href={"/contact"} className='text-black font-medium text-lg'>
            Contact
          </Link>
        </div>

    {/* Right-aligned Icons */}
<Link href={'/account'} className='flex justify-end space-x-10'>
  <Image
    className='h-6 w-6'
    src={'/user.png'}
    alt='User Profile'
    height={24}
    width={24}
  /> </Link>
  <Link href={'/blogs'}>
  <Image
    className='h-6 w-6'
    src={'/mg.png'}
    alt='Messages'
    height={24}
    width={24}
    />
    </Link>
    <Link href={'/checkout'}>
  <Image
    className='h-6 w-6'
    src={'/love.png'}
    alt='Favorites'
    height={24}
    width={24}
    />
    </Link>
  <Link href={'/cart'}>
  <Image
    className='h-6 w-6'
    src={'/sc.png'}
    alt='Shopping Cart'
    height={24}
    width={24}
    />
    </Link>
  <div className='mr-4' /> {/* Adds extra space to the right of the shopping cart */}
</div>


      </div>
      

    
  );
}
