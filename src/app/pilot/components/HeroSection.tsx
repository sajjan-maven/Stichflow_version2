import Image from "next/image";
import Link from "next/link";
export const HeroSection = () => {
    return (
        <section className="relative w-full pt-16 bg-[#e3dad0] overflow-hidden px-6">
            <div className="flex flex-col items-center max-w-[828px] mx-auto gap-4 md:gap-8 px-4">
                <div className="flex flex-col items-center gap-4 w-full">
                    <h2 className="font-['Geist',Helvetica] font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                        Join the Free Pilot
                    </h2>

                    <p className="font-['Geist',Helvetica] font-normal text-[#363338] text-lg text-center leading-8">
                        30 minutes to connect all your apps. Quantified value within 4 weeks.
                    </p>
                </div>
                <Link href="/demo">
                    <button className="px-6 py-4 rounded-xl border border-solid border-[#54505833] bg-transparent hover:bg-[#54505810] shadow active:shadow-none cursor-pointer">
                        <span className="font-medium text-[#363338]">Join the pilot</span>
                    </button>
                </Link>
            </div>

            <div className="flex justify-center w-full mt-8 md:mt-14">
                <Image width={1053} height={362} alt="Apps oauth grants" src="/free-pilot/hero-image.png" />
            </div>
        </section>
    );
};
