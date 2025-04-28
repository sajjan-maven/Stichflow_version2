import Button from "@/app/components/Button";
import React from "react";

export default function ScheduleDemo() {
    return (
        <section className="inline-flex flex-col items-start gap-2 px-6 py-16 relative z-[3] bg-[#e3dad0] w-full">
            <div className="w-full max-w-[876px] mx-auto">
                <div className="flex flex-col items-center gap-4 w-full">
                    <h4 className=" font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                        Turn spreadsheet hell intoinstantly reconciled SaaS user data
                    </h4>
                    <p className=" font-normal text-[#363338] text-lg text-center leading-8">
                        Get up-to-date view of every app across your entire IT environment for any need —application
                        audits, license renewals and security or compliance reviews.
                    </p>
                    <Button variant="secondary" className="mt-8">
                        Schedule a demo
                    </Button>
                </div>
            </div>
        </section>
    );
}
