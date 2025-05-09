import Button from "@/app/components/Button";
import React from "react";

export default function EmailSubscribe() {
  return (
    <section className="px-6 w-full"> 
      <div className="flex flex-col max-w-[908px] items-center p-8 md:p-16 w-full bg-[#E9E2D9] rounded-3xl mx-auto">
        <p className="font-medium md:font-semibold text-[#363338] text-2xl md:text-[40px] text-center max-w-[550px] mb-6">
          Become a part of the IT community
        </p>
        <p className="text-[#363338] text-center max-w-[390px] leading-6 mb-6">
          Get weekly insights on new tools, IT best practices, and expert tips—straight to your inbox.
        </p>
        <div className="flex justify-center gap-3 items-center mt-8 w-full flex-wrap">
          <div className="flex w-full max-w-[280px] items-center bg-white rounded-xl border border-solid border-[#e4dbd0] hover:border-gray-600">
            <input
              type="email"
              className="border-0 shadow-none px-3 py-2 h-10 md:h-[45px] outline-none active:outline-none active:border-none font-label-regular text-[#7b7481]"
              placeholder="Business email"
              required
            />
          </div>
          <Button variant="primary" className="py-2.5">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  )
}
