"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimonialCarousel = () => {
    const testimonials = [
        {
            id: 1,
            text: "Imagine trying to keep up with everything using complex Google Sheets and Excel spreadsheets it was a nightmare. We were constantly cross-referencing user counts against available licenses, which was incredibly time-consuming. Investigating license usage was a huge hassle, and audits became increasingly difficult as our company grew. The data we were exporting wasn't always reliable, either. Since implementing Stitchflow, things have drastically improved. It's given me real peace of mind.",
            author: "Carlos Jiménez",
            position: "CIO at CMSI",
            logo: "/home-page/rula.svg",
            bgColor: "bg-[#729FAB]",
        },
        {
            id: 2,
            text: "Imagine trying to keep up with everything using complex Google Sheets and Excel spreadsheets it was a nightmare. We were constantly cross-referencing user counts against available licenses, which was incredibly time-consuming. Investigating license usage was a huge hassle, and audits became increasingly difficult as our company grew. The data we were exporting wasn't always reliable, either. Since implementing Stitchflow, things have drastically improved. It's given me real peace of mind.",
            author: "Emma Thompson",
            position: "IT Director",
            logo: "/home-page/hazel.svg",
            bgColor: "bg-[#1D1733]",
        },
        {
            id: 3,
            text: "One of the hardest things in IT is figuring out access control—who's in what groups, what those groups do, who manages them, and where all that information lives. Before Stitchflow, it was a nightmare trying to piece together this data across tools like Google, Zoom, and other systems where names didn’t match or info was missing. Stitchflow makes all of that so much easier. Instead of juggling spreadsheets, exporting CSVs, and manually matching users, I can instantly see patterns, irregularities, and access issues in one place.",
            author: "Peter Frankstone",
            position: "VP Infrastructure",
            logo: "/home-page/hazel.svg",
            bgColor: "bg-[#5A4ADF]",
        },
    ];

    return (
        <>
            <div className="flex justify-center items-center flex-wrap relative">
                <div className="w-full max-w-[1304px] mx-auto px-6">
                    <h2 className="font-semibold text-[40px] leading-[48px] text-[#222222]">Learn from the Best</h2>
                    <p className="text-base text-[#363338] leading-6">
                        Hear from IT teams who have tamed business sprawl with Stitchflow.
                    </p>
                </div>
                {/* Carousel */}
                <div className="w-full homePageCarousel">
                    <Slider
                        {...{
                            dots: false,
                            infinite: true,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: true,
                            speed: 1000,
                            autoplaySpeed: 3500,
                            centerMode: true,
                            cssEase: "linear",
                            arrows: true,
                            responsive: [
                                {
                                    breakpoint: 1450,
                                    settings: {
                                        slidesToShow: 1,
                                        arrows: false,
                                    },
                                },
                            ],
                        }}
                        className="py-20 max-w-[3000px] mx-auto"
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="w-full px-2 lg:px-3 h-full">
                                <div
                                    className={`${testimonial.bgColor} h-[414px] text-white rounded-4xl overflow-hidden p-6 md:p-8 lg:p-10 shadow-lg flex flex-col`}
                                >
                                    <blockquote className="flex-grow mb-6">
                                        <p className="text-base md:text-lg lg:text-lg leading-relaxed">
                                            &ldquo;{testimonial.text}&rdquo;
                                        </p>
                                    </blockquote>

                                    <div className="flex flex-col items-start justify-between mt-auto">
                                        <div className="flex items-center mb-4 md:mb-6">
                                            <div className="rounded-full flex items-center justify-center mr-3 md:mr-4">
                                                <Image
                                                    src="/home-page/Avatar.png"
                                                    alt="avatar"
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm md:text-base">
                                                    {testimonial.author}
                                                </p>
                                                <p className="text-xs md:text-sm text-gray-200">
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="h-6 md:h-8">
                                            {testimonial.logo && (
                                                <div className="h-full w-16 md:w-24 relative">
                                                    <Image
                                                        src={testimonial.logo}
                                                        alt={`${testimonial.author}'s company logo`}
                                                        width={96}
                                                        height={32}
                                                        className="object-contain"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default TestimonialCarousel;
