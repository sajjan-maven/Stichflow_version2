const navigationItems = [
  { label: "Platform", hasDropdown: true },
  { label: "App Audits", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Company", hasDropdown: true },
];

// Define data for case studies
const caseStudies = [
  {
    id: 1,
    featured: true,
    company: "Turing",
    logo: "/free-pilot/group.png",
    logoWidth: "247px",
    logoHeight: "40px",
    bgColor: "#1a1a1a",
    description:
      "Ex quis consectetur consectetur amet qui nostrud ea culpa eu exercitation laborum cupidatat. Ut deserunt velit ex laborum et elit reprehenderit dolore. Quis elit sit ut magna fugiat adipisicing anim adipisicing quis ad consectetur id. Laboris aliqua sint consequat laboris sunt eu duis non laborum deserunt.",
  },
  {
    id: 2,
    company: "Spoton",
    logo: "/free-pilot/spoton-logo-white-f07227e6-1.svg",
    logoWidth: "133px",
    logoHeight: "40px",
    bgColor: "#1763f5",
    description:
      "Global Payment Technology Company Transforms License Management and Offboarding Process, Saving $160,000+ with Stitchflow in 6 months.",
  },
  {
    id: 3,
    company: "Starburst",
    logo: "/free-pilot/clip-path-group.png",
    logoWidth: "177px",
    logoHeight: "35px",
    bgColor: "#824cf5",
    description:
      "How Starburst fixed 350 user access gaps and saved $57,000 on underused licenses in 2 months.",
  },
  {
    id: 4,
    company: "Spoton",
    logo: "/free-pilot/spoton-logo-white-f07227e6-1.svg",
    logoWidth: "133px",
    logoHeight: "40px",
    bgColor: "#1763f5",
    description:
      "Global Payment Technology Company Transforms License Management and Offboarding Process, Saving $160,000+ with Stitchflow in 6 months.",
  },
  {
    id: 5,
    company: "Starburst",
    logo: "/free-pilot/clip-path-group-1.png",
    logoWidth: "177px",
    logoHeight: "35px",
    bgColor: "#824cf5",
    description:
      "How Starburst fixed 350 user access gaps and saved $57,000 on underused licenses in 2 months.",
  },
  {
    id: 6,
    company: "Starburst",
    logo: "/free-pilot/clip-path-group-2.png",
    logoWidth: "177px",
    logoHeight: "35px",
    bgColor: "#824cf5",
    description:
      "How Starburst fixed 350 user access gaps and saved $57,000 on underused licenses in 2 months.",
  },
];

export default function CaseStudies() {
  return (
    <div className="flex flex-col items-start relative bg-[#f8f5f3]">
      {/* Hero Section */}
      <section className="w-full py-16 px-[450px] bg-[#e3dad0]">
        <div className="flex flex-col items-center gap-8 max-w-[828px] mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-semibold text-[40px] leading-[48px] text-[#363338] [font-family:'Geist',Helvetica]">
              Meet our customers
            </h1>
            <p className="text-lg leading-8 text-[#363338] [font-family:'Geist',Helvetica]">
              Cillum laborum ad amet anim enim laborum excepteur do aute qui
              est. Ut veniam adipisicing quis aute nostrud commodo anim amet.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="w-full px-[236px] py-40">
        <div className="flex flex-col items-center gap-6 max-w-[1256px] mx-auto">
          {/* Featured Case Study */}
          <div className="w-full">
            <div className="flex h-[400px] border border-solid border-[#545058] rounded-[32px] overflow-hidden">
              <div className="flex-1 bg-[#1a1a1a] rounded-3xl relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative h-10">
                    <img
                      className="absolute w-12 h-10 top-0 left-0"
                      alt="Turing logo"
                      src="/free-pilot/group.png"
                    />
                    <div className="absolute w-[173px] h-[25px] top-2 left-[74px] bg-[url(/group-1.png)] bg-[100%_100%]" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between p-6">
                <div className="flex flex-col gap-4">
                  <h2 className="font-h4-semibold text-[#363338]">Turing</h2>
                  <p className="font-body-regular text-[#7b7481]">
                    Ex quis consectetur consectetur amet qui nostrud ea culpa eu
                    exercitation laborum cupidatat. Ut deserunt velit ex laborum
                    et elit reprehenderit dolore. Quis elit sit ut magna fugiat
                    adipisicing anim adipisicing quis ad consectetur id. Laboris
                    aliqua sint consequat laboris sunt eu duis non laborum
                    deserunt.
                  </p>
                </div>
                <button
                  className="self-start rounded-xl border border-solid border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,248,250,1)_100%)]"
                >
                  Read story
                </button>
              </div>
            </div>
          </div>

          {/* Second Row - 2 Cards */}
          <div className="w-full flex gap-6">
            {caseStudies.slice(1, 3).map((study) => (
              <div
                key={study.id}
                className="flex-1 border border-solid border-[#545058] rounded-[32px] overflow-hidden"
              >
                <div className="p-6 pb-0">
                  <div
                    className="h-[200px] rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: study.bgColor }}
                  >
                    <img
                      className="h-10"
                      style={{ width: study.logoWidth }}
                      alt={`${study.company} logo`}
                      src={study.logo}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 px-8 pb-10">
                  <h2 className="font-h4-semibold text-[#363338] text-center">
                    {study.company}
                  </h2>
                  <p className="font-body-regular text-[#7b7481] text-center">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row - 3 Cards */}
          <div className="w-full flex gap-6">
            {caseStudies.slice(3, 6).map((study) => (
              <div
                key={study.id}
                className="flex-1 border border-solid border-[#545058] rounded-[32px] overflow-hidden"
              >
                <div className="p-6 pb-0">
                  <div
                    className="h-[200px] rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: study.bgColor }}
                  >
                    <img
                      className="h-10"
                      style={{ width: study.logoWidth }}
                      alt={`${study.company} logo`}
                      src={study.logo}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 px-8 pb-10">
                  <h2 className="font-h4-semibold text-[#363338] text-center">
                    {study.company}
                  </h2>
                  <p className="font-body-regular text-[#7b7481] text-center">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
