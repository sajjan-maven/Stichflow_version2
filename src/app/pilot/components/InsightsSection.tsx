import Image from "next/image";

export const InsightsSection = () => {
  const testimonialData = {
    quote:
      "Instant SaaS account reconciliation is a non-negotiable for IT teams in fast-changing businesses. In the past we would manually update spreadsheet data, verify it against each app license one at a time, weeks in advance for any user review. Only to find new apps, employees, contractors and roles had crept up in the meantime. We would always be behind the ball. Not any more.",
    author: {
      name: "Edwin Katabaro",
      title: "CIO and CISO, Turing",
      avatarUrl: "/free-pilot/Avatar.png",
    },
  };

  return (
    <section className="flex flex-col items-center py-4 md:py-20 w-full bg-white p-6">
      <div className="max-w-[800px] border-none shadow-none mx-auto">
        <div className="flex flex-col items-start gap-6 md:gap-12">
          <Image width={41} height={40} alt="Quote icon" src="/free-pilot/quotes.png" />

          <div className="flex flex-col items-start gap-6">
            <p className="font-['Geist',Helvetica] font-normal text-[#363338] text-lg leading-[26px]">
              &quot;{testimonialData.quote}&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="border border-solid rounded-full border-[#54505833]">
                <Image
                  height={48}
                  width={48}
                  src={testimonialData.author.avatarUrl}
                  alt={testimonialData.author.name}
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-['Geist',Helvetica] font-medium text-[#7b7481] text-base leading-6">
                  {testimonialData.author.name}
                </p>
                <p className="font-['Geist',Helvetica] font-normal text-[#7b7481] text-xs leading-4">
                  {testimonialData.author.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
