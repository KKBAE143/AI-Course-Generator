'use client'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// Add this import
import { usePathname } from 'next/navigation'

function Header() {
  const { user } = useUser()
  // Add this line
  const path = usePathname()

  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Link href={`${process.env.NEXT_PUBLIC_HOST_NAME}/dashboard`}>
        <Image src="/logo.svg" width={150} height={100} className='cursor-pointer'/>
      </Link>
      
      {/* Add the new navigation menu */}
      <ul className='hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' ? 'text-primary font-bold' : ''}`}>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        {/* <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/questions' ? 'text-primary font-bold' : ''}`}>
          <Link href='https://ai-course-generator-six.vercel.app/'>AI Course Generator</Link>
        </li> */}
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' ? 'text-primary font-bold' : ''}`}>
          <Link href='https://ai-mockup.vercel.app/'>AI Mock Interview</Link>
        </li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' ? 'text-primary font-bold' : ''}`}>
          <Link href='https://ai-mockup.vercel.app/'>AI Mentor-2</Link>
        </li>
      </ul>

      <UserButton />
    </div>
  )
}

export default Header
