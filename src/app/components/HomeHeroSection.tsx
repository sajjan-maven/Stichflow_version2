"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import Button from "./Button";

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
            await fetch(" https://hooks.zapier.com/hooks/catch/20853066/2pbpc2i/", {
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
            <section className="relative w-full py-12 md:py-24 bg-[#f8f5f3] overflow-hidden">
                <div className="flex flex-col w-full max-w-[828px] items-center gap-8 mx-auto px-6">
                    <div className="flex flex-col items-start gap-6 w-full">
                        <h1 className="w-full font-bold text-[#222222] text-[40px] md:text-[64px] text-center leading-12 md:leading-[72px]">
                            Instant SaaS Account
                            <br />
                            Reconciliation
                        </h1>

                        <p className="w-full font-normal text-[#363338] text-lg text-center leading-8">
                            Stitchflow helps you keep pace with business sprawl by automatically reconciling your SaaS
                            user data for effortless audits, license renewals, and access reviews.
                        </p>
                    </div>
                </div>
                <div className="relative w-full px-6 md:px-0 pt-0 md:pt-10 lg:pt-0">
                    <div className="md:absolute top-0 flex justify-center gap-4 items-center mb-10 mt-8 w-full flex-wrap">
                        <div className="flex w-[280px] items-center gap-2 bg-white rounded-xl border border-solid border-[#e4dbd0] hover:border-gray-500">
                            <input
                                type="email"
                                className="border-0 shadow-none px-3 py-2 h-[48px] outline-none active:outline-none active:border-none font-label-regular text-[#7b7481]"
                                placeholder="Business email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <Button
                            variant="primary"
                            className="cursor-pointer px-4 lg:px-6 h-10 lg:h-[48px] gap-2 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] hover:to-[#e9e9e9] text-[#363338] "
                            type="button"
                            onClick={handleSubmit}
                            // onClick={(e) => handleSubmit(e as unknown as React.FormEvent)}

                            disabled={isSubmitting}
                        >
                            <div className="relative flex items-center gap-2">
                                <div className="relative rounded-full border border-solid border-[#54505833]" >
                                    <Image 
                                        src="/home-page/Avatar.png"
                                        alt="avatar"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="absolute w-2.5 h-2.5 -top-px left-[23px] bg-[#30ba70] rounded-[5px] border border-solid border-white" />
                            </div>
                            <span className="font-medium text-[#363338] text-base leading-4 whitespace-nowrap">
                                {isSubmitting ? "Processing..." : "Book a 15 min demo"}
                            </span>
                        </Button>
                    </div>
                    <Image
                        className="hidden md:block object-cover mx-auto"
                        alt="Users employees dashboard"
                        src="/home-page/hero-image.png"
                        width={1728}
                        height={1034}
                    />
                    <Image
                        className="block md:hidden object-cover mx-auto"
                        alt="Users employees dashboard"
                        src="/home-page/hero-image-mobile.png"
                        width={1728}
                        height={1034}
                    />
                </div>
            </section>
        </div>
    );
};

export default HomeHeroSection;
