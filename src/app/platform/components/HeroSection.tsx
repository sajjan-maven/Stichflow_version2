import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="w-full z-[3] bg-[#e4dbd0] pt-12 px-6">
        <div className="flex flex-col w-full items-center gap-4">
          <h1 className=" font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
            How Stitchflow Works
          </h1>

          <p className=" font-normal text-[#363338] text-lg text-center leading-8">
            Stitchflow&apos;s expertise lies in its ability to automatically
            connect any app with any system of record for any audit.
          </p>
        </div>
        <Image
            width={1053}
            height={406}
            className='mx-auto mt-4 md:mt-[88px]'
            alt="User detail page"
            src="/product-page/hero-image.png"
        />
    </section>

  )
}
