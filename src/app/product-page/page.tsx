export default function Product() {
  // Navigation menu items data
  const navItems = [
    { label: "Platform", hasDropdown: true },
    { label: "App Audits", hasDropdown: false },
    { label: "Resources", hasDropdown: true },
    { label: "Company", hasDropdown: true },
  ];

  // Steps data for the product workflow
  const steps = [
    {
      number: 1,
      title: "Connect your user source of truth",
      description:
        "Stitchflow infers your unique business sprawl, users and roles and policies from your specific IDPs and HR systems.",
      image: "/group-3.png",
      imageWidth: "484px",
      imageHeight: "300px",
      imageTop: "50px",
      imageLeft: "58px",
    },
    {
      number: 2,
      title: "Connect to every SaaS tool in your IT environment",
      description:
        "Stitchflow connects to even the most siloed non SAML/non SCIM apps in your IT environment.",
      image: "/grid-1.png",
      imageWidth: "600px",
      imageHeight: "400px",
      imageTop: "0",
      imageLeft: "0",
    },
    {
      number: 3,
      title: "Instantly reconcile SaaS data",
      description:
        "Stitchflow visualizes and instantly reconciles SaaS user data against your user sources of truth and helps you filter the data to represent your unique policies and exceptions.",
      image: "/container-1.png",
      imageWidth: "560px",
      imageHeight: "360px",
      imageTop: "10px",
      imageLeft: "10px",
    },
    {
      number: 4,
      title: "Filter to represent your unique policies and exceptions",
      description:
        "Stitchflow helps you filter reconciled data to represent your company's unique policies and exceptions.",
      image: "",
      imageWidth: "",
      imageHeight: "",
      imageTop: "",
      imageLeft: "",
    },
    {
      number: 5,
      title: "Set up automatic alerts for critical issues",
      description:
        "Stitchflow's automated insights help uncover gaps, prevent risks and identify vulnerabilities.",
      image: "/group-6-2.png",
      imageWidth: "546px",
      imageHeight: "247px",
      imageTop: "76px",
      imageLeft: "27px",
    },
    {
      number: 6,
      title: "Remediate gaps from where you are",
      description:
        "Stitchflow helps you get on top through bulk remediation or tickets created in your ITSM.",
      image: "/group-2-1.png",
      imageWidth: "482px",
      imageHeight: "372px",
      imageTop: "7px",
      imageLeft: "59px",
    },
  ];

  return (
    <div className="flex flex-col items-start bg-[#f8f5f3]">
      {/* Hero Section */}
      <section className="w-full z-[3] bg-[#e4dbd0]">
        <div className="flex flex-col w-full max-w-[1728px] mx-auto items-center gap-4">
          <h1 className="[font-family:'Geist',Helvetica] font-semibold text-[#363338] text-[40px] text-center tracking-[0] leading-[48px]">
            How Stitchflow Works
          </h1>

          <p className="[font-family:'Geist',Helvetica] font-normal text-[#363338] text-lg text-center tracking-[0] leading-8">
            Stitchflow&apos;s expertise lies in its ability to automatically
            connect any app with any system of record for any audit.
          </p>
        </div>

        <img
          className="max-w-[1053px] h-auto object-cover"
          alt="User detail page"
          src="/user-detail-page--apps-1.png"
        />
      </section>

      {/* Steps Section */}
      <section className="flex flex-col items-center py-40 w-full z-[2] max-w-[1224px] mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start justify-center gap-8 w-full"
          >
            <div className="flex flex-col w-px items-center gap-2 pt-3 pb-0 px-0 ">
              <div className="w-2 h-2 bg-[#e4dfdc] rounded" />
              <div
                className=" flex-1 w-px grow"
              />
              {index === steps.length - 1 && (
                <div className="w-2 h-2 bg-[#e4dfdc] rounded" />
              )}
            </div>

            <div
              className={`${index !== steps.length - 1 ? "pt-0 pb-20" : ""} px-0 flex items-start gap-6  flex-1 grow`}
            >
              <div className="gap-2  flex-1 grow flex flex-col items-start">
                <div className="inline-flex items-start gap-2 px-4 py-2  bg-[#f1acc0] rounded-[100px]">
                  <span className=" w-fit mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#363338] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] whitespace-nowrap [font-style:var(--label-medium-font-style)]">
                    Step {step.number}
                  </span>
                </div>

                <h2 className="font-h2-medium font-[number:var(--h2-medium-font-weight)] text-[#363338] text-[length:var(--h2-medium-font-size)] tracking-[var(--h2-medium-letter-spacing)] leading-[var(--h2-medium-line-height)] [font-style:var(--h2-medium-font-style)]">
                  {step.title}
                </h2>

                <p className=" [font-family:'Geist',Helvetica] font-normal text-[#7b7481] text-base tracking-[0] leading-6">
                  {step.description}
                </p>
              </div>

              <div className=" flex-1 grow h-[400px] bg-white rounded-[32px] overflow-hidden border border-solid border-[#545058]">
                {step.image && (
                  <img
                    className={`absolute object-cover`}
                    style={{
                      width: step.imageWidth,
                      height: step.imageHeight,
                      top: step.imageTop,
                      left: step.imageLeft,
                    }}
                    alt={`Step ${step.number} illustration`}
                    src={step.image}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
