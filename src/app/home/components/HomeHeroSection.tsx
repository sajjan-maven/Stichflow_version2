"use client";
import Image from "next/image";
import {useRouter} from "next/router";
import React, {useState} from "react";

const appIcons = [
    {
        id: 1,
        position: "top-[419px] left-[82px]",
        size: "w-12 h-12",
        blur: true,
        src: "/logo-4.svg",
        alt: "Logo",
    },
    {
        id: 2,
        position: "top-0 left-[225px]",
        size: "w-16 h-16",
        blur: false,
        bgImage: "bg-[url(/logo.png)]",
    },
    {
        id: 3,
        position: "top-[242px] left-[1292px]",
        size: "w-16 h-16",
        blur: false,
        src: "/images/Frame 88.svg",
        alt: "Layer",
    },
    {
        id: 4,
        position: "top-5 left-[1147px]",
        size: "w-16 h-16",
        blur: true,
        src: "/images/Group 4.svg",
        alt: "Group",
    },
    {
        id: 5,
        position: "top-[809px] left-[177px]",
        size: "w-12 h-12",
        blur: true,
        src: "/images/Frame 90.svg",
        alt: "Layer",
    },
    {
        id: 6,
        position: "top-[414px] left-[67px]",
        size: "w-16 h-16",
        blur: false,
        src: "/images/Frame 68.svg",
        alt: "Group",
    },
    {
        id: 7,
        position: "top-[599px] left-[155px]",
        size: "w-16 h-16",
        blur: false,
        src: "/images/Group 9.svg",
        alt: "Group",
    },
    {
        id: 8,
        position: "top-[785px] left-[1161px]",
        size: "w-12 h-12",
        blur: true,
        src: "/union.svg",
        alt: "Union",
    },
    {
        id: 9,
        position: "top-[631px] left-[1209px]",
        size: "w-[72px] h-[72px]",
        blur: false,
        bgImage: "bg-[url(/images/Frame 73.svg)]",
    },
    {
        id: 10,
        position: "top-[813px] left-[1274px]",
        size: "w-16 h-16",
        blur: false,
        src: "/images/Frame 69.svg",
        alt: "Frame",
    },
    {
        id: 11,
        position: "top-[840px] left-[797px]",
        size: "w-12 h-12",
        blur: true,
        src: "/images/Frame 89.svg",
        alt: "Vector",
    },
    {
        id: 12,
        position: "top-[788px] left-[561px]",
        size: "w-[72px] h-[72px]",
        blur: false,
        src: "/images/Frame 66.svg",
        alt: "Group",
    },
    {
        id: 13,
        position: "top-[220px] left-0",
        size: "w-16 h-16",
        blur: false,
        src: "/images/Frame 71.svg",
        alt: "Frame",
    },
    {
        id: 14,
        position: "top-[467px] left-0",
        size: "w-16 h-16",
        blur: false,
        bgImage: "bg-[url(/vector-2.svg)]",
    },
    {
        id: 15,
        position: "top-[395px] left-[1523px]",
        size: "w-[72px] h-[72px]",
        blur: false,
        src: "/images/Frame 81.svg",
        alt: "Vector",
    },
    {
        id: 16,
        position: "top-[1004px] left-[1518px]",
        size: "w-16 h-16",
        blur: false,
        src: "/images/Frame 67.svg",
        alt: "Frame",
    },
];

// Define label data for mapping
const labelElements = [
    {
        id: 1,
        position: "top-12 left-0",
        text: "Oauth tokens",
        imgSrc: "/images/Group 9.svg",
        imgClass: "w-[136px] h-[13px] top-[19px]",
    },
    {
        id: 2,
        position: "top-[258px] left-[1280px]",
        text: "Shared channels",
        imgSrc: "/images/Group 4.svg",
        imgClass: "w-[119px] h-[25px] top-[22px]",
    },
    {
        id: 3,
        position: "top-[715px] left-[1382px]",
        text: "Departments",
        imgSrc: "/images/Group 7.svg",
        imgClass: "w-[118px] h-[55px] top-0",
    },
    {
        id: 4,
        position: "top-[1031px] left-0",
        text: "Contractors",
        imgSrc: "/images/Group 6.svg",
        imgClass: "w-[123px] h-[68px] top-0",
    },
];

const HomeHeroSection = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!email) {
            setIsSubmitting(false);
            return;
        }
        if (!validateEmail(email)) {
            setIsSubmitting(false);
            return;
        }
        try {
            await fetch("https://hooks.zapier.com/hooks/catch/17929582/2x33nkh/", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "Website Hero Form",
                    email: email,
                    message: "New demo request from homepage hero section",
                }),
            });

            setEmail("");
            setTimeout(() => {
                router.push("/schedule-a-demo");
            }, 500);
        } catch (error) {
            console.error("Error submitting email:", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div>
            <section className="relative w-full py-24 bg-[#f8f5f3] overflow-hidden">
                <div className="relative w-full max-w-[1595px] mx-auto">
                    <div className="relative w-full max-w-[1502px] mx-auto">
                        {/* Main content */}
                        <div className="flex flex-col w-full max-w-[828px] items-center gap-8 mx-auto">
                            <div className="flex flex-col items-start gap-6 w-full">
                                <h1 className="w-full font-['Geist',Helvetica] font-bold text-[#222222] text-[64px] text-center leading-[72px]">
                                    Instant SaaS Account
                                    <br />
                                    Reconciliation
                                </h1>

                                <p className="w-full font-['Geist',Helvetica] font-normal text-[#363338] text-lg text-center leading-8">
                                    Stitchflow helps you keep pace with business sprawl by automatically reconciling
                                    your SaaS user data for effortless audits, license renewals, and access reviews.
                                </p>
                            </div>

                            <div className="flex justify-center gap-4 items-start">
                                <div className="flex w-[280px] items-center gap-2 px-3 py-4 bg-white rounded-xl border border-solid border-[#e4dbd0]">
                                    <input
                                        type="email"
                                        className="border-0 shadow-none p-0 h-auto font-label-regular text-[#7b7481]"
                                        placeholder="Work email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-solid border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,248,250,1)_100%)] h-auto"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                >
                                    <div className="relative flex items-center gap-2">
                                        <div className="relative w-8 h-8 rounded-[100px] [background:url(/images/Avatar.svg)_50%_50%_/_cover] border border-solid border-[#54505833]" />
                                        <div className="absolute w-2.5 h-2.5 -top-px left-[23px] bg-[#30ba70] rounded-[5px] border border-solid border-white" />
                                    </div>
                                    <span className="font-['Geist',Helvetica] font-medium text-[#363338] text-base leading-4 whitespace-nowrap">
                                        Book a 15 min demo
                                    </span>
                                    {isSubmitting ? "Processing..." : "Schedule a demo"}
                                </button>
                            </div>
                        </div>

                        {/* App icons */}
                        {appIcons.map((icon) => (
                            <div
                                key={icon.id}
                                className={`absolute ${icon.size} ${
                                    icon.position
                                } bg-[#f0ede6] rounded-[100px] overflow-hidden ${icon.blur ? "blur-[3px]" : ""}`}
                            >
                                <div
                                    className={`relative w-6 h-6 top-${
                                        icon.size.includes("72") ? "5" : icon.size.includes("12") ? "3" : "5"
                                    } left-${icon.size.includes("72") ? "5" : icon.size.includes("12") ? "3" : "5"} ${
                                        icon.bgImage || ""
                                    }`}
                                >
                                    {icon.src && (
                                        <Image
                                            className={`${
                                                icon.src.includes("/images/Frame 88.svg")
                                                    ? "h-[17px] top-1 absolute w-6 left-0"
                                                    : icon.src.includes("/images/Group 4.svg")
                                                    ? "absolute w-6 h-3.5 top-1 left-0"
                                                    : icon.src.includes("/images/Frame 90.svg")
                                                    ? "h-[21px] top-0.5 absolute w-6 left-0"
                                                    : icon.src.includes("/images/Frame 68.svg")
                                                    ? "absolute w-[21px] h-5 top-[3px] left-0.5"
                                                    : icon.src.includes("/images/Group 9.svg")
                                                    ? "absolute w-4 h-6 top-0 left-1"
                                                    : icon.src.includes("union.svg")
                                                    ? "absolute w-6 h-[18px] top-[3px] left-0"
                                                    : icon.src.includes("/images/Frame 69.svg")
                                                    ? "absolute w-[21px] h-[21px] top-0.5 left-0.5"
                                                    : icon.src.includes("/images/Frame 89.svg")
                                                    ? "absolute w-[21px] h-5 top-[3px] left-0.5"
                                                    : icon.src.includes("/images/Frame 66.svg")
                                                    ? "absolute w-8 h-[27px] top-1 left-0"
                                                    : icon.src.includes("/images/Frame 71.svg")
                                                    ? "absolute w-[21px] h-[21px] top-0.5 left-0.5"
                                                    : icon.src.includes("/images/Frame 81.svg")
                                                    ? "absolute w-7 h-7 top-0.5 left-0.5"
                                                    : icon.src.includes("/images/Frame 67.svg")
                                                    ? "absolute w-[21px] h-[21px] top-0.5 left-0.5"
                                                    : icon.src.includes("logo-4.svg")
                                                    ? "absolute w-[21px] h-[21px] top-0.5 left-0.5"
                                                    : "absolute w-full h-full"
                                            }`}
                                            alt={icon.alt || "Icon"}
                                            src={icon.src}
                                            width={24}
                                            height={24}
                                            unoptimized
                                        />
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Label elements */}
                        {labelElements.map((label) => (
                            <div key={label.id} className={`absolute w-[138px] h-8 ${label.position}`}>
                                <div className="absolute top-0 left-[26px] font-label-regular text-[#7b7481] whitespace-nowrap">
                                    {label.text}
                                </div>
                                <Image
                                    className={`absolute ${label.imgClass} left-0`}
                                    alt={`${label.text} decoration`}
                                    src={label.imgSrc}
                                    fill
                                    style={{objectFit: "contain"}}
                                />
                            </div>
                        ))}
                        <div className="absolute w-[1203px] h-[834px] top-[290px] left-[125px] overflow-hidden rounded-[32px] bg-transparent">
                            <Image
                                className="w-full h-full object-cover"
                                alt="Users employees dashboard"
                                src="/images/users - employees 1.svg"
                                width={1203}
                                height={834}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeHeroSection;
