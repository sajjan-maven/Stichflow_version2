import React from 'react'

export default function HeroSection() {
  return (
    <section className="w-full bg-[#e3dad0]">
        <div className="flex flex-col items-center gap-8 py-16 px-6 max-w-[876px] mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-semibold text-[40px] leading-[48px] text-[#363338] [font-family:'Geist',Helvetica]">
                Meet our customers
            </h1>
            <p className="text-lg leading-8 text-[#363338] [font-family:'Geist',Helvetica]">
                Cillum laborum ad amet anim enim laborum excepteur do aute qui
                est. Ut veniam adipisicing quis aute nostrud commodo anim amet.
            </p>
            </div>
        </div>
    </section>
  )
}
