export const ComplianceSection = () => {
  // Data for the steps
  const steps = [
    {
      number: "1",
      title: "Connect your IDP",
      description:
        "Enim exercitation id ipsum dolor occaecat Lorem duis. Culpa sit est dolore ut nulla ipsum occaecat aute nostrud esse.",
    },
    {
      number: "2",
      title: "Connect to 150+ native apps",
      description:
        "Enim exercitation id ipsum dolor occaecat Lorem duis. Culpa sit est dolore ut nulla ipsum occaecat aute nostrud esse.",
    },
    {
      number: "3",
      title: "Upload CSVs for apps without API access",
      description:
        "Enim exercitation id ipsum dolor occaecat Lorem duis. Culpa sit est dolore ut nulla ipsum occaecat aute nostrud esse.",
    },
  ];

  // Data for the illustration labels
  const illustrationLabels = [
    { text: "Activity", top: "242px", left: "697px" },
    { text: "Contractors", top: "85px", left: "577px" },
    { text: "Departments", top: "11px", left: "683px" },
    { text: "Applications", top: "149px", left: "0" },
    { text: "Devices", top: "356px", left: "85px" },
  ];

  return (
    <section className="flex flex-col items-center py-20 px-6 md:px-12 lg:px-24 relative w-full z-[4] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,245,243,1)_100%)]">
      <div className="flex flex-col items-center gap-20 w-full  max-w-[1256px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full">
          <div className="flex flex-col w-full lg:w-[509px] items-center justify-center gap-10">
            <h2 className="font-semibold text-3xl md:text-[40px] leading-[48px] mt-[-1.00px] font-['Geist',Helvetica] text-[#363338]">
              30 minute connection call
            </h2>

            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 w-full"
              >
                <div className="relative w-8 h-8 bg-[#f1acc0] rounded-[100px] flex items-center justify-center">
                  <span className="font-label-medium text-[#363338] text-center">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <h3 className="font-semibold text-[#363338]">
                    {step.title}
                  </h3>
                  <p className="font-body-regular text-[#7b7481]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full lg:w-[723px] h-auto lg:mr-[-56.00px] mt-10 lg:mt-0">
            <img src="/free-pilot/free-plot-insight.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
