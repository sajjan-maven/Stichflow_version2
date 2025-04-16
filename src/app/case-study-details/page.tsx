export default function CaseStudiesDetails() {
  // Navigation menu items
  const navItems = [
    { name: "Platform", hasDropdown: true },
    { name: "App Audits", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
    { name: "Company", hasDropdown: true },
  ];

  // Case study stats
  const statsData = [
    {
      value: "312",
      description: "high-sensitivity app access gaps closed within 90 days",
    },
    {
      value: "100%",
      description: "compliance with Turing's security policies",
    },
    {
      value: "220",
      description:
        "hours of manual IT work eliminated in a quarter—equivalent to a half-time IT staff member",
    },
    {
      value: "0",
      description: "false positives in reporting",
    },
    {
      value: "40k",
      description: "saved in license costs",
    },
  ];

  // More stories data
  const moreStoriesData = [
    {
      name: "Spoton",
      color: "#1763f5",
      logoSrc: "/spoton-logo-white-f07227e6-1.svg",
      description:
        "Global Payment Technology Company Transforms License Management and Offboarding Process, Saving $160,000+ with Stitchflow in 6 months.",
    },
    {
      name: "Starburst",
      color: "#824cf5",
      logoSrc: "/clip-path-group.png",
      description:
        "How Starburst fixed 350 user access gaps and saved $57,000 on underused licenses in 2 months.",
    },
  ];

  return (
    <div className="flex flex-col items-start relative bg-[#f8f5f3]">
      {/* Main Content */}
      <main className="relative self-stretch w-full">
        <div className="flex justify-center gap-20 pt-20 pb-40 max-w-[1224px] mx-auto">
          <div className="flex flex-col w-[829px] items-start gap-16">
            {/* Case Study Header */}
            <header className="flex flex-col w-full items-start gap-6 bg-transparent">
              <div
                className="flex items-center gap-2 p-4 rounded-xl border-[#54505833]"
              >
                <img className="w-3 h-2.5" alt="Icon" src="/free-pilot/icon-4.svg" />
                Case studies
              </div>

              <h1 className="self-stretch font-h2-medium text-[#363338] text-center">
                How Stitchflow enabled Turing's IT and security team to adapt to
                business scale
              </h1>

              <div className="flex items-center justify-center gap-6 self-stretch w-full">
                <div className="flex items-center gap-1">
                  <span className="font-caption-medium text-[#7b7481]">
                    Company size:
                  </span>
                  <span className="font-caption-regular text-[#363338]">
                    700 employees and 8000 contractors
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="font-caption-medium text-[#7b7481]">
                    Industry:
                  </span>
                  <span className="font-caption-regular text-[#363338]">
                    AI / Technology / Software
                  </span>
                </div>
              </div>
            </header>

            {/* Case Study Content */}
            <div className="flex flex-col items-start gap-14 w-full">
              {/* Quote Card */}
              <div className="w-full bg-white rounded-[32px] border border-solid border-[#545058]">
                <div className="flex flex-col items-start gap-12 pt-10 pb-14 px-14">
                  <img className="w-[41px] h-10" alt="Quote" src="/free-pilot/-.svg" />
                  <div className="flex flex-col items-start gap-6 w-full">
                    <p className="self-stretch [font-family:'Geist',Helvetica] font-normal text-[#363338] text-lg leading-[26px]">
                      Our biggest challenge wasn't just managing access gaps and
                      maintaining stringent security standards with our dynamic
                      workforce. Our manual processes couldn't keep up with the
                      scale.
                    </p>
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 rounded-[100px] border border-solid border-[#54505833]">
                        <img src="/free-pilot/avatar.png" alt="Amit Sharma" />
                      </div>
                      <div className="flex flex-col items-start gap-1 flex-1">
                        <p className="self-stretch [font-family:'Geist',Helvetica] font-medium text-[#7b7481] text-base leading-6">
                          Amit Sharma
                        </p>
                        <p className="self-stretch [font-family:'Geist',Helvetica] font-normal text-[#7b7481] text-xs leading-4">
                          Manager of IT Systems, Turing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge Section */}
              <section className="flex flex-col items-start gap-6 w-full">
                <h2 className="self-stretch font-h3-medium text-[#363338]">
                  Turing's challenge
                </h2>
                <p className="self-stretch [font-family:'Geist',Helvetica] font-normal text-[#363338] text-base leading-6">
                  To support Turing's rapid company growth, the nuances
                  that&nbsp;&nbsp;their IT and security teams needed to deal
                  with included:
                  <br />
                  <br />
                  Dual IDPs—one for employees and another cost-effective IDP to
                  support hypergrowth for contractors
                  <br />
                  Unique security policies around contractors (like revoking
                  Google Group roles when offboarding)&nbsp;&nbsp;which were not
                  automatable
                  <br />
                  <br />
                  These nuances created significant challenges for their IT
                  team, including multiple hours a week on manual
                  spreadsheet-based reconciliation, and access vulnerabilities
                  due to delayed security audits.
                </p>
              </section>

              {/* Response Section */}
              <section className="flex flex-col items-start gap-6 w-full">
                <h2 className="self-stretch font-h3-medium text-[#363338]">
                  Turing's Response
                </h2>
                <p className="self-stretch [font-family:'Geist',Helvetica] font-normal text-[#363338] text-base leading-6">
                  Stitchflow's customized SaaS management solution met Turing's
                  needs and:
                  <br />
                  <br />
                  Completed initial setup in 30 minutes
                  <br />
                  Stitched together all of Turing's tools, including different
                  IDPs
                  <br />
                  Mapped Turing's IT and security processes
                  <br />
                  Automated security policy enforcement
                  <br />
                  Streamlined offboarding by automating deprovisioning and
                  revoking roles and permissions
                  <br />
                  Identified orphaned and underutilized accounts that were
                  leading to waste in SaaS spending
                  <br />
                  Provided real-time alerts and remediation (as opposed to
                  waiting for quarterly audits)
                </p>
              </section>

              {/* Stats Card */}
              <div className="w-full bg-[#e4dbd0] rounded-[32px]">
                <div className="flex flex-col items-start gap-6 p-10">
                  <div className="grid grid-cols-2 gap-x-20 gap-y-6 w-full">
                    {statsData.slice(0, 4).map((stat, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start gap-2"
                      >
                        <h3 className="self-stretch font-h3-medium text-[#363338]">
                          {stat.value}
                        </h3>
                        <p className="self-stretch [font-family:'Geist',Helvetica] font-normal text-[#7b7481] text-base leading-6">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start gap-20 w-full">
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <h3 className="self-stretch font-h3-medium text-[#363338]">
                        {statsData[4].value}
                      </h3>
                      <p className="self-stretch [font-family:'Geist',Helvetica] font-normal text-[#7b7481] text-base leading-6">
                        {statsData[4].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Stories Section */}
            <section className="flex flex-col w-full items-start gap-14 pt-16 border-t border-[#eee8e1]">
              <h2 className="w-full font-h1-regular text-[#7b7481]">
                More stories
              </h2>

              <div className="flex items-start gap-6 w-full">
                {moreStoriesData.map((story, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-white rounded-[32px] overflow-hidden border border-solid border-[#545058]"
                  >
                    <div className="flex flex-col items-start gap-10 pt-6 pb-10 px-6">
                      <div
                        className="self-stretch w-full h-[200px] rounded-3xl flex items-center justify-center"
                        style={{ backgroundColor: story.color }}
                      >
                        <img
                          className="h-10"
                          alt={`${story.name} logo`}
                          src={story.logoSrc}
                        />
                      </div>
                      <div className="flex flex-col items-start gap-4 px-8 w-full">
                        <h3 className="self-stretch font-h4-semibold text-[#363338] text-center">
                          {story.name}
                        </h3>
                        <p className="self-stretch font-body-regular text-[#7b7481] text-center">
                          {story.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
};
