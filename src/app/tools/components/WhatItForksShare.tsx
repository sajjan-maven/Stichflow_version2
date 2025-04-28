import Image from 'next/image';
import React from 'react'

export default function WhatItForksShare() {
  const redditComments = [
    {
      id: 1,
      username: "r/user",
      content:
        "Sharing this with my boss. Looks like great potential for our non-existent process haha",
      width: 'md:w-1/3'
      },
    {
      id: 2,
      username: "r/user",
      content:
        "Nice tool. We're building something similar. The market need is real. Good luck to you <3",
      width: 'md:w-2/3'
      },
    {
      id: 3,
      username: "r/user",
      content:
        "This is nifty! I'm downloading it now. Do you plan to do updates/keep it current? Definitely going to mention this in my next position.",
      width: 'md:w-2/3'
      },
    {
      id: 4,
      username: "r/user",
      content: "This tool will be a great help to IT admins for sure...!!",
      width: 'md:w-1/3'
    },
    {
      id: 5,
      username: "r/user",
      content:
        "Quite nifty... there's quite a bit of customizing you can do. Thanks for\nsharing this for free.",
      width: 'md:w-1/3'
      },
    {
      id: 6,
      username: "r/user",
      content:
        "Very nice. Wish I had known about this a few months ago. I had\nour Salesforce admin build a contract tracker with similar functions\na couple of months ago and now the finance team wants to use it to track their contracts.",
      width: 'md:w-2/3'
    },
  ];

  return (
    
    <section className="gap-2 px-6 py-16 w-full">
        <div className="flex flex-col max-w-[645px] mx-auto items-center gap-4 w-full">
            <h1 className=" font-semibold text-[#363338] text-2xl md:text-[40px] text-center">
              What IT folks share about our
              free tools on Reddit
            </h1>
        </div>
        <div className="flex flex-col w-full justify-around gap-8 max-w-[1256px] mx-auto">
          <div className='flex flex-row flex-wrap items-stretch'>
            {redditComments.map((comment) => (
              <ul key={comment.id} className={`py-2 md:px-2 w-full ${comment.width}`}>
                <li className='p-4 bg-white shadow-sm rounded-xl h-full flex flex-col items-stretch'>
                  <div className='flex gap-2 mb-1'>
                    <Image 
                      src='/it-tools/reddit.png'
                      alt={`avatar-icon`}
                      width={32}
                      height={32}
                    />
                    <span className='font-medium'>{comment.username}</span>
                  </div>
                  <p className='flex-grow'>{comment.content}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
    </section>
  )
}
