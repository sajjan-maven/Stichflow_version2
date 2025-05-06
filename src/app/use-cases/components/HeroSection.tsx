import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="z-[5] bg-[#e3dad0] pt-16 px-6 overflow-hidden w-full">
        <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col items-center gap-4 w-full">
                <h1 className="font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                    Accurate. Continuous. Effortless
                </h1>
                <p className="font-normal text-[#363338] text-lg text-center leading-8">
                    Discover how Stitchflow&apos;s instant reconciliation makes a difference to any use case.
                </p>
            </div>
            <a
                href="https://cdn.prod.website-files.com/648b3fb5ff20b9eb641b8ea2/65b21d8c27b8bd6a6f90d79f_Stitchflow%20Security%20Whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl border border-solid border-[#56403833] bg-transparent no-underline hover:bg-[#54505810] shadow active:shadow-none cursor-pointer"
            >
                <span className="font-medium text-[#363338] whitespace-nowrap">
                    Learn more in our whitepaper
                </span>
            </a>
        </div>

        <Image width={1080} height={342} className="mx-auto" alt="Use-case" src="/use-cases/hero-image.png" />
    </section>
  )
}
