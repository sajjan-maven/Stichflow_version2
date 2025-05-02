import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-center py-2 text-lg font-medium mt-6'>1x</p>
        <Image
            width={1053}
            height={406}
            alt="User detail page"
            src="/resolution_test/1x.png"
        />
        <p className='text-center py-2 text-lg font-medium mt-6'>2x</p>
        <Image
            width={1053}
            height={406}
            alt="User detail page"
            src="/resolution_test/2x.png"
        />
        <p className='text-center py-2 text-lg font-medium mt-6'>3x</p>
        <Image
            width={1053}
            height={406}
            alt="User detail page"
            src="/resolution_test/3x.png"
        />
        <p className='text-center py-2 text-lg font-medium mt-6'>4x</p>
        <Image
            width={1053}
            height={406}
            alt="User detail page"
            src="/resolution_test/4x.png"
        />
    </div>
  )
}
