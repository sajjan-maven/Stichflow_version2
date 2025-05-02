import Image from "next/image";
import React from "react";
const founders = [
    {
        name: "Jay Srinivasan",
        title: "Co-founder & CEO",
        avatar: "/about-page/Avatar1.png",
        bio: "Serial entrepreneur with exits to Okta (atSpoke) and Google (Appurify); Former product lead at Okta IGA and Google; PhD in CS from the University of Illinois.",
    },
    {
        name: "Pierre Rappolt",
        title: "Co-founder",
        avatar: "/about-page/Avatar2.png",
        bio: "Machine Learning leader specializing in IT automation; Former Head of ML at atSpoke (acquired by Okta), Snorkel, and Woebot; UC Santa Barbara alum.",
    },
    {
        name: "Tanya Butani",
        title: "Co-founder",
        avatar: "/about-page/Avatar3.png",
        bio: "IT product leader; Former Head of Product at atSpoke (acquired by Okta), product at Okta IGA, Workday, and Lever; UC Berkeley-Haas alum.",
    },
    {
        name: "Shankar Radhakrishnan",
        title: "Co-founder",
        avatar: "/about-page/Avatar4.png",
        bio: "Operations and Customer Success leader; Former Head of Operations at NovaSignal and Agiltron; Cornell PhD in Electrical and Computer Engineering.",
    },
];
const AboutFounderSection = () => {
    return (
        <section className="w-full px-6 pt-20">
            <div className="w-full max-w-[1256px] mx-auto">
                <h2 className="font-semibold text-[#363338] text-3xl md:text-[40px] leading-tight md:leading-[48px] mb-6 md:mb-10">
                    Our Founders
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {founders.map((founder, index) => (
                        <div key={index} className="bg-[#e4dbd0] rounded-[32px] overflow-hidden border-none">
                            <div className="flex items-center gap-2 p-8">
                                <Image
                                    src={founder.avatar}
                                    alt={`${founder.name} Avatar`}
                                    className="w-12 h-12 rounded-full object-cover"
                                    width={48}
                                    height={48}
                                />

                                <div className="flex flex-col gap-0.5">
                                    <h3 className="font-medium text-[#363338] text-base leading-6">
                                        {founder.name}
                                    </h3>
                                    <span
                                        className={`text-[#ff5020] font-normal text-xs leading-4`}
                                    >
                                        {founder.title}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-4 pt-0 pb-8 px-8">
                                <p className="text-[#363338] text-sm leading-6">{founder.bio}</p>
                                <div
                                    className={`w-5 h-5 bg-[100%_100%]`}
                                    style={{backgroundImage: `url(/about-page/LI-Icon.svg)`}}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutFounderSection;
