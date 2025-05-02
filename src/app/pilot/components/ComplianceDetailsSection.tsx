import Image from "next/image";
import React from "react";

const businessValueFeatures = [
  {
    icon: "/free-pilot/icon_1.svg",
    title: "Reclaimed licenses and quantified cost reductions",
    description:
      "Enim exercitation id ipsum dolor occaecat Lorem duis. Culpa sit est dolore ut nulla ipsum occaecat aute nostrud esse.",
  },
  {
    icon: "/free-pilot/icon_2.svg",
    title: "Closed access and security gaps",
    description:
      "Enim exercitation id ipsum dolor occaecat Lorem duis. Culpa sit est dolore ut nulla ipsum occaecat aute nostrud esse.",
  },
  {
    icon: "/free-pilot/icon_3.svg",
    title:
      "Granular breakdown by application, department, and other key attributes",
    description:
      "Enim exercitation id ipsum dolor occaecat Lorem duis. Culpa sit est dolore ut nulla ipsum occaecat aute nostrud esse.",
  },
  {
    icon: "/free-pilot/icon_4.svg",
    title:
      "Strategic insights and recommendations tailored to your complex environment",
    description:
      "Enim exercitation id ipsum dolor occaecat Lorem duis. Culpa sit est dolore ut nulla ipsum occaecat aute nostrud esse.",
  },
  {
    icon: "/free-pilot/icon_5.svg",
    title: "IT hours saved through automation",
    description:
      "Enim exercitation id ipsum dolor occaecat Lorem duis. Culpa sit est dolore ut nulla ipsum occaecat aute nostrud esse.",
  },
];

// Feature data for the second section
const reconciliationFeatures = [
  {
    icon: "/free-pilot/icon_6.svg",
    title: "Immediate cross-portfolio visibility",
    description:
      "from identity providers to department-specific apps, including those without APIs.",
  },
  {
    icon: "/free-pilot/icon_7.svg",
    title: "Environment-specific analysis",
    description:
      "review prioritized access gaps and license optimization opportunities that other tools miss, highlighting where you have exceptions.",
  },
  {
    icon: "/free-pilot/icon_8.svg",
    title: "Remediation that fits your workflow",
    description:
      "Push to your ticketing system, Bulk remediate directly in Stitchflow, Automate reminders via Slack or Teams.",
  },
  {
    icon: "/free-pilot/icon_9.svg",
    title: "Continuous compliance",
    description:
      "structured and prioritized access reviews for upcoming audits, ensuring continuous correctness.",
  },
];

export const ComplianceDetailsSection = () => {
  return (
    <>
      <section className="py-10 md:py-20 px-6 flex flex-col gap-20 w-full">
        <div className="flex flex-col w-full items-start gap-10 max-w-[1256px] mx-auto">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-semibold text-[#363338]">
            Quantified business value in just 4 weeks
          </h2>

          <div className="flex flex-col w-full gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
              {businessValueFeatures.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="border-none shadow-none bg-transparent"
                >
                  <div className="p-0">
                    <div className="flex flex-col items-start gap-2">
                      <Image
                        width={24}
                        height={24}
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <h3 className="font-h5-medium font-[number:var(--h5-medium-font-weight)] text-[#363338] text-[length:var(--h5-medium-font-size)] tracking-[var(--h5-medium-letter-spacing)] leading-[var(--h5-medium-line-height)]">
                        {feature.title}
                      </h3>
                      <p className="font-['Geist',Helvetica] font-normal text-[#7b7481] text-base leading-6">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* The fifth feature is in its own row */}
            {businessValueFeatures.length > 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div className="border-none shadow-none bg-transparent">
                  <div className="p-0">
                    <div className="flex flex-col items-start gap-2">
                      <Image
                        width={24}
                        height={24}
                        alt={businessValueFeatures[4].title}
                        src={businessValueFeatures[4].icon}
                      />
                      <h3 className="font-h5-medium font-[number:var(--h5-medium-font-weight)] text-[#363338] text-[length:var(--h5-medium-font-size)] tracking-[var(--h5-medium-letter-spacing)] leading-[var(--h5-medium-line-height)]">
                        {businessValueFeatures[4].title}
                      </h3>
                      <p className="font-['Geist',Helvetica] font-normal text-[#7b7481] text-base leading-6">
                        {businessValueFeatures[4].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="pb-10 md:pb-40 px-6 flex flex-col gap-20 w-full">
        <div className="flex flex-col w-full items-start gap-10 max-w-[1256px] mx-auto">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-semibold text-[#363338]">
            See how Stitchflow&apos;s reconciliation identifies and prioritizes
            opportunities in your environment
          </h2>

          <div className="flex flex-col w-full gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
              {reconciliationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="border-none shadow-none bg-transparent"
                >
                  <div className="p-0">
                    <div className="flex flex-col items-start gap-2">
                      <Image
                        width={24}
                        height={24}
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <h3 className="font-medium text-[#363338]">
                        {feature.title}
                      </h3>
                      <p className="font-['Geist',Helvetica] font-normal text-[#7b7481] text-base leading-6">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
