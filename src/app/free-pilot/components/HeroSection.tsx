export const HeroSection = () => {
  return (
    <section className="relative w-full pt-16 bg-[#e3dad0] overflow-hidden">
      <div className="flex flex-col items-center max-w-[828px] mx-auto gap-8 px-4">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-['Geist',Helvetica] font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
            Join the Free Pilot
          </h2>

          <p className="font-['Geist',Helvetica] font-normal text-[#363338] text-lg text-center leading-8">
            30 minutes to connect all your apps. Quantified value within 4
            weeks.
          </p>
        </div>

        <button
          className="px-6 py-4 rounded-xl border border-solid border-[#54505833] bg-transparent hover:bg-[#54505810]"
        >
          <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-[#363338] text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)]">
            Join the pilot
          </span>
        </button>
      </div>

      <div className="flex justify-center w-full mt-14">
        <img
          className="w-full max-w-[1053px] h-auto object-cover"
          alt="Apps oauth grants"
          src="/free-pilot/free-pilot-header.png"
        />
      </div>
    </section>
  );
};
