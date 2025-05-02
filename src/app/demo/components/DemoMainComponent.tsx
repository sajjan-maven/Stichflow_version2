"use client";
import {ArrowRightIcon, ChevronRightIcon} from "lucide-react";
import Image from "next/image";
import {useEffect, useState} from "react";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "@/app/components/Button";

export default function DemoMainComponent() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hubspotMeetingUrl, setHubspotMeetingUrl] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        firstname: "",
        lastname: "",
    });
    const [error, setError] = useState("");

    useEffect(() => {
        if (step === 3) {
            // Construct the HubSpot meeting URL with all parameters
            const baseUrl = "https://meetings.hubspot.com/jvenkatesh/testing";
            const params = new URLSearchParams({
                // email: encodeURIComponent(formData.email),
                email: formData.email,
                firstname: encodeURIComponent(formData.firstname),
                lastname: encodeURIComponent(formData.lastname),

                embed: "true",
            });

            setHubspotMeetingUrl(`${baseUrl}?${params.toString()}`);

            // const timer = setTimeout(() => {
            //     window.location.href = "/thank-you-page";
            // }, 30000);
            // return () => clearTimeout(timer);
        }
    }, [step, formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        if (error) setError("");
    };

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    const handleEmailSubmit = async () => {
        if (!formData.email) {
            setError("Please enter your business email");
            return;
        }
        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email address");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/hubspot/contacts", {
                method: "POST",
                body: JSON.stringify({email: formData.email}),
                headers: {"Content-Type": "application/json"},
            });

            const data = await res.json();

            if (res.ok) {
                setStep(2);
            } else {
                setError(data.message || "There was an error saving your email. Please try again.");
            }
        } catch (error) {
            setError(String(error) || "Connection error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    const validateForm = () => {
        if (!formData.firstname.trim()) return "First name is required";
        if (!formData.lastname.trim()) return "Last name is required";

        return "";
    };
    const handleFinalSubmit = async () => {
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/hubspot/form-submit", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"},
            });

            if (res.ok) {
                // Get meeting URL after form submission

                setStep(3);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    };
    // Benefits data
    const benefits = [
        {
            icon: "/schedule-demo/gridfour.svg",
            text: "Eliminate spreadsheets and manual work involved in SaaS management",
        },
        {
            icon: "/schedule-demo/eye.svg",
            text: "Gain 100% visibility into your entire SaaS ecosystem in a single place",
        },
        {
            icon: "/schedule-demo/lightning.svg",
            text: "Reclaim 2 days per week for strategic IT initiatives",
        },
    ];

    const slider = [
        {
            src: "/schedule-demo/slide-1.svg",
            alt: "Group",
            width: 148.07,
            height: 21.28,
        },
        {
            src: "/schedule-demo/slide-2.svg",
            alt: "Ventures stack rgb",
            width: 93.3,
            height: 27.33,
        },
        {
            src: "/schedule-demo/slide-3.svg",
            alt: "Felicis",
            width: 124.73,
            height: 32.01,
        },
        {
            src: "/schedule-demo/slide-4.svg",
            alt: "Group",
            width: 134.83,
            height: 40,
        },
        {
            src: "/schedule-demo/slide-5.svg",
            alt: "Group",
            width: 144.78,
            height: 34.03,
        },
        {
            src: "/schedule-demo/slide-6.svg",
            alt: "Group",
            width: 135,
            height: 34.01,
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
        <div className="flex flex-col items-center justify-items-stretch relative bg-[#faf9f8]">
            <div className="relative w-full max-w-[1360px] flex flex-col-reverse lg:flex-row h-full">
                {/* Left side content section */}
                <section className="lg:max-w-[50%] mt-20 w-full px-6">
                    <div className="flex flex-col w-full items-start relative max-w-[578px] mx-auto">
                        {/* Main content */}
                        <div className="flex flex-col items-start gap-10 relative w-full">
                            <div className="flex flex-col items-start gap-8 relative w-full">
                                <div className="flex flex-col items-start relative w-full">
                                    <h1 className="w-full font-bold text-[#222222] text-[40px] leading-[54px] mb-4">
                                        SaaS user management
                                        <br />
                                        for IT environments that
                                        <br />
                                        can&apos;t be automated
                                    </h1>
                                    <div className="flex flex-col items-start gap-2 relative w-full">
                                        {benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-center justify-center gap-2 w-full">
                                                <Image width={16} height={16} alt="Benefit icon" src={benefit.icon} />
                                                <p className="flex-1 font-normal text-[#363338] text-base leading-[25.6px]">
                                                    {benefit.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Trusted by section */}
                            <div className="flex flex-col items-start relative">
                                <p className="w-full font-normal text-[#363338] text-sm tracking-[0] leading-8">
                                    Trusted by IT teams at orgs managing complex SaaS environments just like yours.
                                </p>
                                <div className="relative">
                                    <div className="absolute left-0 bottom-0 h-20 w-[86px] bg-gradient-to-r z-30 from-[#faf9f8] to-[#faf9f800]"></div>
                                    <div className="absolute right-0 bottom-0 h-20 w-[86px] bg-gradient-to-l z-30 from-[#faf9f8] to-[#faf9f800]"></div>
                                    <div className="slider-container">
                                        <Slider {...{
                                            infinite: true,
                                            slidesToShow: 3,
                                            slidesToScroll: 1,
                                            arrows: false,
                                            autoplay: true,
                                            speed: 2000,
                                            autoplaySpeed: 2000,
                                            cssEase: "linear",
                                            responsive: [
                                                {
                                                    breakpoint: 1450,
                                                    settings: {
                                                        slidesToShow: 3,
                                                    }
                                                },
                                            ]
                                        }}
                                        className="w-full max-w-[578px] mx-auto"
                                        >
                                            {slider.map((image, index) => (
                                            <div key={index} className="w-fit h-20 align-bottom px-2">
                                                <Image
                                                    alt={image.alt}
                                                    src={image.src}
                                                    width={image.width}
                                                    height={image.height}
                                                    className="max-w-full h-full flex justify-center items-end"
                                                />
                                            </div>))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial card */}
                        <div className="flex flex-col items-start gap-6 p-8 bg-white rounded-[32px] border border-solid border-[#545058] mb-24 mt-12">
                            <div className="p-0 w-full">
                                <Image className="mb-6" alt="Quote icon" src="/schedule-demo/quotes.svg" width={30} height={31} />
                                <div className="flex flex-col items-start gap-4 w-full">
                                    <p className="w-full font-semibold text-[#363338] text-lg leading-[26px]">
                                        Before Stitchflow, our quarterly user access reviews were a three-week grind—now
                                        they&apos;re finished in a single day. We identified 170 security gaps and
                                        removed 50 duplicate accounts across our eight domains.
                                    </p>
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="flex flex-col items-start gap-1 flex-1">
                                            <p className="w-full font-['Geist',Helvetica] text-[#7b7481] text-base tracking-[0] leading-6">
                                                <span className="font-semibold">Director of IT Systems,</span>
                                                <span className="font-medium"> </span>
                                                <span className="font-medium text-sm">Strada Education Foundation</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right side form section */}
                <section className="lg:max-w-[50%] w-full bg-[#E9E2D9] px-6">
                    <div className="flex flex-col items-center justify-center gap-4 relative rounded-[32px] w-full h-full py-20 max-w-[455px] mx-auto">
                        <div className="flex flex-col items-center gap-6 relative w-full">
                            <h2 className="w-full max-w-[455px] mt-[-1.00px] font-['Geist',Helvetica] font-medium text-[#222222] text-[35px] tracking-[0] leading-[47.2px]">
                                See Stitchflow in action.
                            </h2>

                            <div className="flex flex-col items-start gap-8 relative w-full">
                                {/* STEP 1: Email capture */}
                                {step === 1 && (
                                    <div className="flex flex-col items-start gap-5 relative w-full transition-all duration-300 ease-in-out">
                                        <div className="flex flex-col items-start gap-2 relative w-full">
                                            <div className="flex flex-col items-start gap-1 relative w-full">
                                                <label className="flex h-4 items-center gap-2 relative w-full">
                                                    <span className="flex-1 mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#7b7481] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                                                        Business email
                                                    </span>
                                                </label>
                                            </div>
                                            <input
                                                name="email"
                                                className={`h-[54px] bg-white w-full rounded-xl border border-solid cursor-pointer ${
                                                    error ? "border-red-500" : "border-[#c6c4cc]"
                                                } shadow-shadow-sm px-4`}
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                            />
                                            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                                        </div>

                                        <Button
                                            variant="secondary"
                                            className="w-full py-4 group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
                                            onClick={handleEmailSubmit}
                                            disabled={loading}
                                        >
                                            {loading ? 
                                            <>
                                                <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-white text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] whitespace-nowrap [font-style:var(--h6-medium-font-style)]">
                                                    Processing...
                                                </span>
                                            </> :
                                            <>
                                                <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-white text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] whitespace-nowrap [font-style:var(--h6-medium-font-style)]">
                                                    Get Started
                                                </span>
                                                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                                            </>}
                                        </Button>
                                    </div>
                                )}

                                {/* STEP 2: Full form */}
                                {step === 2 && (
                                    <div className="flex flex-col items-start gap-5 relative w-full animate-fadeIn transition-all duration-300 ease-in-out">
                                        {/* Email field (pre-filled) */}
                                        <div className="flex flex-col items-start gap-2 relative w-full">
                                            <div className="flex flex-col items-start gap-1 relative w-full">
                                                <label className="flex h-4 items-center gap-2 relative w-full">
                                                    <span className="flex-1 mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#7b7481] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                                                        Business email
                                                    </span>
                                                </label>
                                            </div>
                                            <input
                                                className="h-[54px] bg-white w-full rounded-xl border border-solid border-[#c6c4cc] shadow-shadow-sm px-4 cursor-pointer"
                                                value={formData.email}
                                                disabled
                                            />
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
                                                <input
                                                    name="firstname"
                                                    className={`h-[54px] bg-white w-full rounded-xl border border-solid  cursor-pointer${
                                                        error.includes("First name")
                                                            ? "border-red-500"
                                                            : "border-[#c6c4cc]"
                                                    } shadow-shadow-sm px-4`}
                                                    value={formData.firstname}
                                                    onChange={handleChange}
                                                />
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
                                                <input
                                                    name="lastname"
                                                    className={`h-[54px] bg-white w-full rounded-xl border border-solid cursor-pointer ${
                                                        error.includes("Last name")
                                                            ? "border-red-500"
                                                            : "border-[#c6c4cc]"
                                                    } shadow-shadow-sm px-4`}
                                                    value={formData.lastname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        {error && <p className="text-red-500 text-sm mt-0.5">{error}</p>}
                                        {/* Submit button */}
                                        <button
                                            className="flex items-center justify-center gap-2 px-6 py-4 w-full rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] [background:linear-gradient(180deg,rgba(84,80,88,1)_0%,rgba(54,51,56,1)_100%)] cursor-pointer"
                                            onClick={handleFinalSubmit}
                                            disabled={loading}
                                        >
                                            <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-white text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] whitespace-nowrap [font-style:var(--h6-medium-font-style)]">
                                                {loading ? "Processing..." : "Schedule a demo"}
                                            </span>
                                            <ChevronRightIcon className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="flex flex-col items-center justify-center w-full h-full animate-fadeIn transition-all duration-300 ease-in-out">
                                        <div
                                            className="meetings-iframe-container w-full min-h-[600px]"
                                            data-src={hubspotMeetingUrl}
                                        />
                                        <Script
                                            strategy="afterInteractive"
                                            type="text/javascript"
                                            src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
                                        ></Script>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Privacy notice */}
                        <p className="w-full max-w-[392px] font-['Geist',Helvetica] font-normal text-[#363338] text-xs tracking-[0] leading-[16.2px] text-center">
                            We respect your privacy. By submitting, you agree to our{" "}
                            <a
                                href="/privacy"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="underline"
                            >
                                privacy policy
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </div>

            {/* Testimonials section */}
            <section className="flex flex-col items-center justify-center gap-[70px] px-6 py-[100px] w-full [background:linear-gradient(0deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.02)_100%),linear-gradient(0deg,rgba(250,249,248,1)_0%,rgba(250,249,248,1)_100%)]">
                <div className="flex lg:flex-col items-start gap-6">
                    <h2 className="w-full font-['Geist',Helvetica] font-semibold text-[#222222] text-[40px] text-center tracking-[0] leading-[54px]">
                        What IT teams are saying about Stitchflow
                    </h2>
                </div>

                <div className="relative flex flex-col lg:flex-row gap-[18px] w-full max-w-[1064px] mni-h-[490px]">
                    {/* First testimonial card */}
                    <div className="flex flex-col w-full lg:w-[265px] lg:min-h-[490px] items-start justify-center gap-6 p-8 bg-white rounded-[32px] border border-solid border-[#545058]">
                        <div className="p-0 w-full">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <p className="font-['Geist',Helvetica] font-medium text-[#363338] text-lg tracking-[0] leading-[26px]">
                                    {testimonials[0].text}
                                </p>
                                <div className="flex items-center gap-4 w-full">
                                    <Image width={40} height={40} alt="G2 Logo" src="/schedule-demo/g2_logo.svg" />
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
                    <div className="flex flex-col w-full lg:w-[780px] items-start gap-[18px]">
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
                                            <Image width={40} height={40} alt="G2 Logo" src="/schedule-demo/g2_logo.svg" />
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
}
