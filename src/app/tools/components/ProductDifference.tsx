import Image from "next/image";
import React from "react";

export default function ProductDifference() {
    const cardData = [
        {
            icon: "/it-tools/visible.png",
            iconAlt: "Document scanner",
            title: "Visibility to every\nsingle unique variable",
            description: [
                "Filter data as per organizational nuances",
                "Reconcile data across systems",
                "Precise visibility only to accounts that need attention",
            ],
        },
        {
            icon: "/it-tools/catches.png",
            iconAlt: "Person alert",
            title: "Catches all\naccess misses",
            description: [
                "Ex-employees with access to tools",
                "Users in systems who are not in your IDP",
                "Reconciling contractors vs. full time employees",
            ],
        },
        {
            icon: "/it-tools/noHidden.png",
            iconAlt: "License",
            title: "No hidden\nlicense waste",
            description: ["Ex-employees and contractors with active licenses", "Underutilized licenses", ""],
        },
    ];

    return (
        <section className="gap-2 px-6 py-16 w-full">
            <div>
                <h1 className=" font-semibold text-[#363338] max-w-[645px] mx-auto mb-4 text-2xl md:text-[40px] text-center">
                    How&apos;s Stitchflow different from the free tools?
                </h1>
                <p className="text-gray-500 max-w-[970px] md:text-lg mx-auto text-center">
                    Stitchflow provides an always up-to-date view of every app across your entire IT environmentfor any
                    need—application audits, license renewals and security or compliance reviews.
                </p>
            </div>
            <div className="w-full py-8">
                <ul className="w-full max-w-[1256px] mx-auto flex flex-col items-stretch md:flex-row gap-4 lg:gap-8 justify-center">
                    {cardData.map((card, index) => (
                        <li
                            key={index}
                            className="w-full lg:max-w-80 border border-solid border-[#e2e2e2] rounded-lg bg-white"
                        >
                            <div className="flex flex-col items-start gap-5 px-[30px] py-10">
                                <Image src={card.icon} width={48} height={48} alt={card.iconAlt} />

                                <h2 className="self-stretch font-semibold text-black text-2xl tracking-[0] leading-[32.4px] whitespace-pre-line">
                                    {card.title}
                                </h2>

                                {/* <div className="self-stretch font-['Inter',Helvetica] font-normal text-[#313036] text-lg tracking-[0]">
                  {card.description.map((line, i) => (
                    <div key={i}>
                      <span
                        className={
                          i % 2 === 0 ? "leading-[24.3px]" : "leading-[27px]"
                        }
                      >
                        {line}
                        {line && i < card.description.length - 1 && <br />}
                      </span>
                    </div>
                  ))}
                </div> */}
                                <ul className="list-disc pl-5 text-[#313036] text-lg font-normal leading-relaxed">
                                    {card.description.filter(Boolean).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
