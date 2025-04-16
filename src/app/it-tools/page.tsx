// import {
//     ArrowRightIcon,
//     BriefcaseIcon,
//     FileCheckIcon,
//     LogOutIcon,
//   } from "lucide-react";
  import React from "react";


  
  // Data for navigation items
  const navigationItems = [
    { name: "Platform", hasDropdown: true },
    { name: "App Audits", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
    { name: "Company", hasDropdown: true },
  ];
  
  // Data for IT tools cards
  const itTools = [
    {
    //   icon: <LogOutIcon className="w-8 h-8" />,
      title: "OffboardIT",
      description:
        "Free IT Offboarding Checklist: Streamline your org's offboarding process. Never miss a critical step in your IT offboarding process. Create a customized list of tasks based on the departing employee's role and department.",
    },
    {
    //   icon: <FileCheckIcon className="w-8 h-8" />,
      title: "Renewal tracker",
      description:
        "Free SaaS Contract Renewal Tracker. Never miss a SaaS renewal. Organize contracts in one view, track upcoming renewal dates, and stay ahead with automated reminders.",
    },
    {
    //   icon: <LogOutIcon className="w-8 h-8" />,
      title: "App Access Matrix",
      description:
        "Free SaaS App Access Policy Matrix for IT Teams. A structured way to define, review, and share the SaaS app access policies that your organization uses per app and per user role, team, department or location.",
    },
    {
    //   icon: <BriefcaseIcon className="w-8 h-8" />,
      title: "Fwd IT Job Board",
      description:
        "Meet your modern IT job board. Every role here is handpicked, vetted, and curated for modern IT pros. Filter by organization size, growth stage, tech stack, and culture fit—we bring you the most relevant jobs at companies that truly value IT.",
    },
  ];
  
  export default function ItTools() {
    return (
      <div className="flex flex-col items-start relative bg-[#f8f5f3]">
  
        <section className="inline-flex flex-col items-start gap-2 px-[450px] py-16 relative flex-[0_0_auto] z-[3] bg-[#e3dad0] w-full">
          <div className="flex flex-col w-full max-w-[828px] items-center gap-8 mx-auto">
            <div className="flex flex-col items-center gap-4 w-full">
              <h1 className="[font-family:'Geist',Helvetica] font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
                Meet our customers
              </h1>
              <p className="[font-family:'Geist',Helvetica] font-normal text-[#363338] text-lg text-center leading-8">
                Cillum laborum ad amet anim enim laborum excepteur do aute qui
                est. Ut veniam adipisicing quis aute nostrud commodo anim amet.
              </p>
            </div>
          </div>
        </section>
  
        <section className="flex flex-col items-center gap-6 py-40 relative w-full z-[2]">
          <div className="grid grid-cols-2 gap-6 w-full max-w-[1256px]">
            {itTools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-8 p-8 bg-white rounded-[32px] border border-solid border-[#545058]"
              >
                {/* {tool.icon} */}
  
                <div className="flex flex-col items-start gap-4 p-0 w-full">
                  <div className="font-semibold text-[#363338]">
                    {tool.title}
                  </div>
                  <p className="text-[#7b7481]">
                    {tool.description}
                  </p>
                </div>
  
                <div className="p-0 mt-auto">
                  <button
                    className="inline-flex items-center justify-end gap-2 p-4 rounded-xl border border-solid border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,248,250,1)_100%)]"
                  >
                    <span className="font-label-medium text-[#363338]">
                      Go to tool
                    </span>
                    {/* <ArrowRightIcon className="w-4 h-4" /> */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  