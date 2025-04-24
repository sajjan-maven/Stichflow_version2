import React from 'react'

export default function HeroSection() {
  return (
    <section className="inline-flex flex-col items-start gap-2 px-6 py-16 relative z-[3] bg-[#e3dad0] w-full">
        <div className="flex flex-col w-full max-w-[876px] items-center gap-8 mx-auto">
            <div className="flex flex-col items-center gap-4 w-full">
                <h1 className=" font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                Meet our customers
                </h1>
                <p className=" font-normal text-[#363338] text-lg text-center leading-8">
                Cillum laborum ad amet anim enim laborum excepteur do aute qui
                est. Ut veniam adipisicing quis aute nostrud commodo anim amet.
                </p>
            </div>
        </div>
    </section>
  )
}
