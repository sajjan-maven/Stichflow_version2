import Image from "next/image";

export default function UseCases() {
  // Navigation menu items data
  const navItems = [
    { name: "Platform", hasDropdown: true },
    { name: "App Audits", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
    { name: "Company", hasDropdown: true },
  ];

  // Use case sections data
  const useCases = [
    {
      title: "Accurate License Management",
      description:
        '"Managing software licenses can be a real headache, especially as a company grows. Stitchflow has simplified our reporting process immensely and is much more user-friendly."',
      bgColor: "bg-[#3b997f]",
      imageSrc: "/use-cases/section.png",
    },
    {
      title: "Secure Offboarding",
      description:
        '"Before Stitchflow, offboarding was a huge manual effort and error-prone.Now, with Stitchflow, we have dashboards that let us instantly see discrepancies—who is deactivated in Google but still active elsewhere—so we can quickly close those gaps. It\'s a game changer for our team."',
      bgColor: "bg-[#ff7c2b]",
      imageSrc: "/use-cases/section.png",
    },
    {
      title: "Error-free Compliance",
      description:
        '"Stitchflow has helped us ensure compliance (SOC 2, ISO) by making access audits quick and accurate. It\'s reduced security risks by flagging unnecessary permissions and inactive accounts."',
      bgColor: "bg-[#f8be65]",
      imageSrc: "/use-cases/section.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#f8f5f3] pb-20">

      {/* Hero Section */}
      <section className="z-[5] bg-[#e3dad0] overflow-hidden w-full">
          <div className="flex flex-col mt-16 justify-center items-center gap-8 px-6">
            <div className="flex flex-col items-center gap-4 w-full">
              <h1 className="mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-[#363338] text-[40px] text-center tracking-[0] leading-[48px]">
                Accurate. Continuous. Effortless
              </h1>
              <p className="[font-family:'Geist',Helvetica] font-normal text-[#363338] text-lg text-center tracking-[0] leading-8">
                Discover how Stitchflow&apos;s instant reconciliation makes a
                difference to any use case.
              </p>
            </div>

            <button
              className="inline-flex items-center justify-end gap-2 px-6 py-4 rounded-xl border border-solid border-[#54505833]"
            >
              <span className="font-medium text-[#363338] whitespace-nowrap">
                Learn more in our whitepaper
              </span>
            </button>
          </div>

              <Image
                width={1080}
                height={342}
                className="mx-auto"
                alt="Users employees"
                src="/use-cases/hero.png"
              />
              {/* <img
                className="absolute w-[1080px] h-[464px] top-0 left-[359px] object-cover"
                alt="User detail page"
                src="/user-detail-page---overview.png"
              /> */}
      </section>

      {/* Use Cases Sections */}
      {useCases.map((useCase, index) => (
        <section
          key={index}
        >
          <div className="inline-flex flex-col items-center justify-center gap-6 md:gap-20 pt-20 md:pt-40 px-6 w-full">
            <div className="flex flex-col items-center gap-2 max-w-[878px] mx-auto">
              <h2 className="mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-[#363338] text-[40px] text-center tracking-[0] leading-[48px]">
                {useCase.title}
              </h2>
              <p className="[font-family:'Geist',Helvetica] font-normal text-[#7b7481] text-base text-center tracking-[0] leading-6">
                {useCase.description}
              </p>
            </div>

            <div
              className={`flex flex-col gap-2 p-8 md:p-20 max-w-[1256px] mx-auto ${useCase.bgColor} rounded-[48px] border-none`}
            >
              <div className="p-0">
                <Image
                  width={1096}
                  height={708}
                  alt="Users employees"
                  src={useCase.imageSrc}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

    </div>
  );
};
