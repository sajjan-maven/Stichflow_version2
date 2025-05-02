"use client";
import Button from '@/app/components/Button'
import { ArrowRightIcon } from 'lucide-react'
import {useRouter} from "next/navigation";

export default function ScheduleDemo() {
  const router = useRouter();

  return (
    <section className="inline-flex flex-col items-start gap-2 px-6 py-16 relative z-[3] bg-[#e3dad0] w-full">
        <div className="w-full max-w-[876px] mx-auto">
            <div className="flex flex-col items-center gap-4 w-full">
                <h4 className=" font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                Turn spreadsheet hell into instantly reconciled SaaS user data
                </h4>
                <p className=" font-normal text-[#363338] text-lg text-center leading-8">
                Get up-to-date view of every app across your entire IT environment for any need —application audits, license renewals and security or compliance reviews.
                </p>
                <Button 
                variant="secondary" 
                onClick={() => router.push("/demo")}
                className="group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8 mt-4">
                    Schedule a demo 
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                </Button>
            </div>
        </div>
    </section>
  )
}
