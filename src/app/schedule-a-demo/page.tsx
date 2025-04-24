import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function DemoDesktop() {
  // Benefits data
  const benefits = [
    {
      icon: "/gridfour.svg",
      text: "Eliminate spreadsheets and manual work involved in SaaS management",
    },
    {
      icon: "/eye.svg",
      text: "Gain 100% visibility into your entire SaaS ecosystem in a single place",
    },
    {
      icon: "/lightning.svg",
      text: "Reclaim 2 days per week for strategic IT initiatives",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "Before Stitchflow, we lived in Google Sheets trying to track license usage. Now, we finally have a clear, accurate snapshot of who's using what—and we've cut spending on unused software by thousands.",
      author: "Carlos Jimenez,",
      position: "IT Manager",
    },
    {
      text: "Offboarding used to be a painful, manual process, with high risk of errors. Every day, we had to deactivate users across multiple apps, then do manual checks to make sure we didn't miss anyone. Now, we can run queries across apps, catch discrepancies instantly, and remove access in just a few clicks.",
      author: "Edwin Katabaro,",
      position: "Security Engineer",
    },
    {
      text: "Tracking hundreds of SaaS accounts was a spreadsheet nightmare. We were constantly bouncing between tools trying to piece together who had access to what. With Stitchflow, we can instantly see user provisioning across all applications and dramatically cut down manual work.",
      author: "Aaron",
      position: "IT Administrator",
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-[#faf9f8]">
      <div className="relative w-full max-w-[1360px] h-full min-h-[1024px]">
        {/* Header/Logo */}
        <header className="absolute w-[109px] h-6 top-9 left-0">
          <Image
            width={75}
            height={12}
            className="absolute top-1.5 left-[34px]"
            alt="Wordmark"
            src="/wordmark-1.svg"
          />
          <img
            className="absolute w-6 h-6 top-0 left-0"
            alt="Logo icon"
            src="/logo-icon.svg"
          />
        </header>

        {/* Right side form section */}
        <section className="flex w-full max-w-[623px] h-full min-h-[1024px] items-center justify-center gap-2.5 p-2.5 absolute top-0 right-0 [background:linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(228,219,208,1)_0%,rgba(228,219,208,1)_100%)]">
          <div className="flex flex-col items-center gap-4 relative rounded-[32px]">
            <div className="flex flex-col items-center gap-6 relative">
              <h2 className="w-full max-w-[455px] mt-[-1.00px] font-['Geist',Helvetica] font-medium text-[#222222] text-[35px] tracking-[0] leading-[47.2px]">
                See Stitchflow in action.
              </h2>

              <div className="flex flex-col items-start gap-8 relative w-full">
                <div className="flex flex-col items-start gap-5 relative w-full">
                  {/* Email field */}
                  <div className="flex flex-col items-start gap-2 relative w-full">
                    <div className="flex flex-col items-start gap-1 relative w-full">
                      <label className="flex h-4 items-center gap-2 relative w-full">
                        <span className="flex-1 mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#7b7481] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                          Work email
                        </span>
                      </label>
                    </div>
                    <input className="h-[54px] bg-white w-full rounded-xl border border-solid border-[#c6c4cc] shadow-shadow-sm" />
                  </div>

                  {/* First name and Last name fields */}
                  <div className="flex items-start gap-6 relative w-full">
                    {/* First name */}
                    <div className="flex flex-col items-start gap-2 relative flex-1">
                      <div className="flex flex-col items-start gap-1 relative w-full">
                        <label className="flex h-4 items-center gap-2 relative w-full">
                          <span className="flex-1 mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#7b7481] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                            First name
                          </span>
                        </label>
                      </div>
                      <input className="h-[54px] bg-white rounded-xl border border-solid border-[#c6c4cc] shadow-shadow-sm" />
                    </div>

                    {/* Last name */}
                    <div className="flex flex-col items-start gap-2 relative flex-1">
                      <div className="flex flex-col items-start gap-1 relative w-full">
                        <label className="flex h-4 items-center gap-2 relative w-full">
                          <span className="flex-1 mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#7b7481] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                            Last name
                          </span>
                        </label>
                      </div>
                      <input className="h-[54px] bg-white rounded-xl border border-solid border-[#c6c4cc] shadow-shadow-sm" />
                    </div>
                  </div>

                  {/* Company field */}
                  <div className="flex flex-col items-start gap-2 relative w-full">
                    <div className="flex flex-col items-start gap-1 relative w-full">
                      <label className="flex h-4 items-center gap-2 relative w-full">
                        <span className="flex-1 mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#7b7481] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                          Company
                        </span>
                      </label>
                    </div>
                    <input className="h-[54px] bg-white rounded-xl border w-full border-solid border-[#c6c4cc] shadow-shadow-sm" />
                  </div>

                  {/* Company size field */}
                  <div className="flex flex-col items-start gap-2 relative w-full">
                    <div className="flex flex-col items-start gap-1 relative w-full">
                      <label className="flex h-4 items-center gap-2 relative w-full">
                        <span className="flex-1 mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#7b7481] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                          Company size
                        </span>
                      </label>
                    </div>
                    {/* <div>
                      <div className="h-[54px] bg-white rounded-xl border border-solid border-[#c6c4cc] shadow-shadow-sm">
                        <SelectValue placeholder="" />
                      </div>
                      <SelectContent>
                        {companySizeOptions.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </div> */}
                  </div>
                </div>

                {/* Submit button */}
                <button className="flex items-center justify-center gap-2 px-6 py-4 w-full rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] [background:linear-gradient(180deg,rgba(84,80,88,1)_0%,rgba(54,51,56,1)_100%)]">
                  <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-white text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] whitespace-nowrap [font-style:var(--h6-medium-font-style)]">
                    Schedule a demo
                  </span>
                  <ChevronRightIcon className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Privacy notice */}
            <p className="w-[392px] font-['Geist',Helvetica] font-normal text-[#363338] text-xs tracking-[0] leading-[16.2px]">
              We respect your privacy. By submitting, you agree to our{" "}
              <a
                href="https://www.stitchflow.com/privacy"
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                privacy policy
              </a>
              .
            </p>
          </div>

          {/* Dropdown content */}
          {/* <div className="flex flex-col w-[455px] items-start gap-2 absolute top-[684px] left-[84px] shadow-[0px_113px_68px_#0000000d,0px_200px_80px_#00000003,0px_313px_88px_transparent]">
            <div className="flex flex-col items-end justify-center gap-3 px-6 py-4 w-full bg-white rounded-xl border border-solid border-[#c6c4cc] shadow-shadow-sm">
              <div className="p-0 w-full">
                <div className="flex items-center justify-center gap-2.5 w-full">
                  <span className="flex-1 mt-[-1.00px] font-label-regular font-[number:var(--label-regular-font-weight)] text-[#7b7481] text-[length:var(--label-regular-font-size)] tracking-[var(--label-regular-letter-spacing)] leading-[var(--label-regular-line-height)] [font-style:var(--label-regular-font-style)]">
                    1 - 50
                  </span>
                </div>
                {companySizeOptions.slice(1).map((size) => (
                  <div
                    key={size}
                    className="font-label-regular font-[number:var(--label-regular-font-weight)] text-[#7b7481] text-[length:var(--label-regular-font-size)] tracking-[var(--label-regular-letter-spacing)] leading-[var(--label-regular-line-height)] mt-3 [font-style:var(--label-regular-font-style)]"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </section>

        {/* Left side content section */}
        <section className="absolute w-[628px] h-[758px] top-[158px] left-[41px]">
          <div className="flex flex-col w-full items-start gap-[88px] relative -top-2">
            {/* Main content */}
            <div className="flex flex-col items-start gap-10 relative w-full">
              <div className="flex flex-col items-start gap-8 relative w-full">
                <div className="flex flex-col items-start gap-4 relative w-full">
                  {/* Headline */}
                  <h1 className="w-full font-['Geist',Helvetica] font-bold text-[#222222] text-[40px] tracking-[0] leading-[54px]">
                    SaaS user management
                    <br />
                    for IT environments that
                    <br />
                    can&apos;t be automated
                  </h1>

                  {/* Benefits list */}
                  <div className="flex flex-col items-start gap-2 relative w-full">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        <img
                          className="w-4 h-4"
                          alt="Benefit icon"
                          src={benefit.icon}
                        />
                        <p className="flex-1 mt-[-1.00px] font-['Geist',Helvetica] font-normal text-[#363338] text-base tracking-[0] leading-[25.6px]">
                          {benefit.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trusted by section */}
              <div className="flex flex-col h-[87.01px] items-start gap-4 relative">
                <p className="w-full font-['Geist',Helvetica] font-normal text-[#363338] text-sm tracking-[0] leading-8">
                  Trusted by IT teams at orgs managing complex SaaS environments
                  just like yours.
                </p>

                <div className="flex w-[588px] items-center gap-10 relative overflow-hidden">
                  <div className="relative w-[148.07px] h-[21.28px] bg-[url(/group.png)] bg-[100%_100%]" />
                  <div className="relative w-[93.3px] h-[27.33px]">
                    <img
                      className="absolute w-[93px] h-[26px] top-px left-0"
                      alt="Group"
                      src="/group-1.png"
                    />
                  </div>
                  <div className="relative w-[124.73px] h-[32.01px] bg-[url(/starburst-logo.png)] bg-[100%_100%]" />
                  <div className="relative w-[134.83px] h-10">
                    <img
                      className="absolute w-[102px] h-10 top-0 left-0"
                      alt="Group"
                      src="/group-2.png"
                    />
                  </div>
                  <div className="absolute w-[86px] h-10 top-0 right-0 [background:linear-gradient(90deg,rgba(250,249,248,0)_0%,rgba(250,249,248,1)_100%)]" />
                  <div className="absolute w-[86px] h-10 top-0 left-0 rotate-180 [background:linear-gradient(90deg,rgba(250,249,248,0)_0%,rgba(250,249,248,1)_100%)]" />
                </div>
              </div>
            </div>

            {/* Testimonial card */}
            <div className="flex flex-col w-[578px] items-start gap-6 p-8 bg-white rounded-[32px] border border-solid border-[#545058]">
              <div className="p-0 w-full">
                <img
                  className="w-[31px] h-[30px] mb-6"
                  alt="Quote"
                  src="/-.svg"
                />
                <div className="flex flex-col items-start gap-4 w-full">
                  <p className="w-full font-['Geist',Helvetica] font-semibold text-[#363338] text-lg tracking-[0] leading-[26px]">
                    Before Stitchflow, our quarterly user access reviews were a
                    three-week grind—now they&apos;re finished in a single day.
                    We identified 170 security gaps and removed 50 duplicate
                    accounts across our eight domains.
                  </p>
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex flex-col items-start gap-1 flex-1">
                      <p className="w-full font-['Geist',Helvetica] text-[#7b7481] text-base tracking-[0] leading-6">
                        <span className="font-semibold">
                          Director of IT Systems,
                        </span>
                        <span className="font-medium"> </span>
                        <span className="font-medium text-sm">
                          Strada Education Foundation
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials section */}
      <section className="flex flex-col h-[866px] items-center justify-center gap-[70px] px-0 py-[100px] w-full [background:linear-gradient(0deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.02)_100%),linear-gradient(0deg,rgba(250,249,248,1)_0%,rgba(250,249,248,1)_100%)]">
        <div className="flex flex-col w-[887px] items-start gap-6">
          <h2 className="w-full font-['Geist',Helvetica] font-semibold text-[#222222] text-[40px] text-center tracking-[0] leading-[54px]">
            What IT teams are saying about Stitchflow
          </h2>
        </div>

        <div className="relative w-full max-w-[1063.62px] h-[490px]">
          {/* First testimonial card */}
          <div className="flex flex-col w-[265px] h-[490px] items-start justify-center gap-6 p-8 absolute top-0 left-0 bg-white rounded-[32px] border border-solid border-[#545058]">
            <div className="p-0 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <p className="font-['Geist',Helvetica] font-medium text-[#363338] text-lg tracking-[0] leading-[26px]">
                  {testimonials[0].text}
                </p>
                <div className="flex items-center gap-4 w-full">
                  <img
                    className="w-10 h-10"
                    alt="G2 Logo"
                    src="/g2-logo-svg.svg"
                  />
                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <p className="font-['Geist',Helvetica] font-medium text-[#7b7481] text-base tracking-[0] leading-6">
                      {testimonials[0].author}
                    </p>
                    <p className="font-['Geist',Helvetica] font-medium text-[#7b7481] text-sm tracking-[0] leading-6">
                      {testimonials[0].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side testimonials */}
          <div className="flex flex-col w-[780px] items-start gap-[18px] absolute top-0 left-[283px]">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-[18px] p-8 w-full bg-white rounded-[32px] border border-solid border-[#545058]"
              >
                <div className="p-0 w-full">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <p className="font-['Geist',Helvetica] font-medium text-[#363338] text-lg tracking-[0] leading-[26px]">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-4 w-full">
                      <img
                        className="w-10 h-10"
                        alt="G2 Logo"
                        src="/g2-logo-svg.svg"
                      />
                      <div className="flex flex-col items-start gap-1 flex-1">
                        <p className="font-['Geist',Helvetica] font-medium text-[#7b7481] text-base tracking-[0] leading-6">
                          {testimonial.author}
                        </p>
                        <p className="font-['Geist',Helvetica] font-medium text-[#7b7481] text-sm tracking-[0] leading-6">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
