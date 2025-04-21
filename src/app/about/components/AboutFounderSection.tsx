import Image from "next/image";
import React from "react";
const founders = [
    {
        name: "Jay Srinivasan",
        title: "Co-founder & CEO",
        titleColor: "text-[#ff5020]",
        avatar: "/images/Avatar.svg",
        bio: "Serial entrepreneur with exits to Okta (atSpoke) and Google (Appurify); Former product lead at Okta IGA and Google; PhD in CS from the University of Illinois.",
        linkedInOpacity: "opacity-100",
        linkedInIcon: "/images/LI-Icon.svg",
    },
    {
        name: "Pierre Rappolt",
        title: "Co-founder",
        titleColor: "text-[#004834]",
        avatar: "/images/Avatar2.svg",
        bio: "Machine Learning leader specializing in IT automation; Former Head of ML at atSpoke (acquired by Okta), Snorkel, and Woebot; UC Santa Barbara alum.",
        linkedInOpacity: "opacity-60",
        linkedInIcon: "/images/LI-Icon.svg",
    },
    {
        name: "Tanya Butani",
        title: "Co-founder",
        titleColor: "text-[#5d4214]",
        avatar: "/images/Avatar3.svg",
        bio: "IT product leader; Former Head of Product at atSpoke (acquired by Okta), product at Okta IGA, Workday, and Lever; UC Berkeley-Haas alum.",
        linkedInOpacity: "opacity-60",
        linkedInIcon: "/images/LI-Icon.svg",
    },
    {
        name: "Shankar Radhakrishnan",
        title: "Co-founder",
        titleColor: "text-[#155ec7]",
        avatar: "/images/Avatar4.svg",
        bio: "Operations and Customer Success leader; Former Head of Operations at NovaSignal and Agiltron; Cornell PhD in Electrical and Computer Engineering.",
        linkedInOpacity: "opacity-60",
        linkedInIcon: "/images/LI-Icon.svg",
    },
];
const AboutFounderSection = () => {
    return (
        <div className="px-4 md:px-8 flex justify-center pt-20 px-4 lg:px-0">
            <section className="w-full">
                <div className="flex justify-center items-center flex-wrap">
                    <div className="w-full md:w-[90%] lg:w-[80%]">
                        <h2 className="font-semibold text-[#363338] text-3xl md:text-[40px] leading-tight md:leading-[48px] mb-6 md:mb-10 font-['Geist',Helvetica]">
                            Our Founders
                        </h2>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-wrap ">
                    <div className="w-full md:w-[90%] lg:w-[80%]">
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
                                            <h3 className="font-medium text-[#363338] text-base leading-6 font-['Geist',Helvetica]">
                                                {founder.name}
                                            </h3>
                                            <span
                                                className={`${founder.titleColor} font-normal text-xs leading-4 font-['Geist',Helvetica]`}
                                            >
                                                {founder.title}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-4 pt-0 pb-8 px-8">
                                        <p className="text-[#363338] text-sm leading-6">{founder.bio}</p>
                                        <div
                                            className={`w-5 h-5 bg-[100%_100%] ${founder.linkedInOpacity}`}
                                            style={{backgroundImage: `url(${founder.linkedInIcon})`}}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutFounderSection;
