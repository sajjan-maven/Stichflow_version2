import Image from "next/image";

const ThankyouHeroSection = () => {

  return (
    <div className="relative w-full pb-16 bg-[#f8f5f3] overflow-hidden flex items-center justify-center">
      <div className="flex flex-col w-full items-center gap-3">
        <Image 
          src="/thank-you-page/thank-you.gif" 
          alt="thank you animation"
          width={200} 
          height={200}
          unoptimized
        />
        
        <h2 className="self-stretch font-normal text-[#363338] text-base md:text-2xl text-center">
          THANK YOU!
        </h2>

        <h1 className="self-stretch font-bold text-[#222222] text-[32px] md:text-[56px] text-center">
          Your demo is booked.
        </h1>

        <p className="self-stretch font-normal text-[#363338] text-lg text-center leading-6 text-wrap">
          We&apos;ve received your request. We&#39;re excited to show you how to automate
        </p>

        <p className="self-stretch font-normal text-[#363338] text-lg text-center leading-6 text-wrap">
          those&#34;unautomatable&#34; parts of your IT environment.
        </p>
      </div>
    </div>
  );
};

export default ThankyouHeroSection;
