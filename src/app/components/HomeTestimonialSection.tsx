"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";

const TestimonialCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [autoplayPaused, setAutoplayPaused] = useState(false);

    const testimonials = [
        {
            id: 1,
            text: "Everyone trying to keep up with everything using complex Google Sheets and Excel spreadsheets — it was a nightmare. We were constantly cross-referencing new reports against available baseline which was incredibly time-consuming. Investigating license usage was a huge hassle — it was like having our detective work cut out for us on every case. The data was spread everywhere and we had to spend too much time just keeping track of it all. It's given me real peace of mind.",
            author: "Carlos Jiménez",
            position: "CIO at CMSI",
            logo: "/images/rula.svg",
            bgColor: "bg-indigo-950",
        },
        {
            id: 2,
            text: "Companies trying to keep up with everything using complex Google Sheets and Excel spreadsheets. It was a nightmare. We were constantly cross-referencing new reports against available baseline, which was incredibly time-consuming. Investigating license usage was a huge hassle.",
            author: "Emma Thompson",
            position: "IT Director",
            logo: "/images/hazel.svg",
            bgColor: "bg-green-100",
        },
        {
            id: 3,
            text: "One of the hardest things in IT is figuring out what groups do, who manages them, and what they're for. The engineering team trying to piece together this data could spend hours trying to manually or programmatically pull information from disparate locations. Having this all in one place helps us see patterns, inequalities, and access issues more clearly.",
            author: "Peter Frankstone",
            position: "VP Infrastructure",
            logo: "/images/hazel.svg",
            bgColor: "bg-purple-600",
        },
    ];

    const totalSlides = testimonials.length;

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    // const goToSlide = (index: number) => {
    //     if (!isAnimating && currentSlide !== index) {
    //         setIsAnimating(true);
    //         setCurrentSlide(index);
    //         setTimeout(() => setIsAnimating(false), 500);
    //     }
    // };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart(e.targetTouches[0].clientX);
        setAutoplayPaused(true);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            nextSlide();
        }

        if (touchStart - touchEnd < -75) {
            prevSlide();
        }

        setTimeout(() => setAutoplayPaused(false), 5000);
    };

    useEffect(() => {
        if (autoplayPaused) return;

        const interval = setInterval(() => {
            if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
                setTimeout(() => setIsAnimating(false), 500);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, autoplayPaused, isAnimating, totalSlides]);

    return (
        <>
            <div className="flex justify-center items-center flex-wrap px-6">
                <div className="w-full max-w-[1256px] mx-auto">
                    <div className="flex items-center justify-between mb-10 md:mb-[72px] flex-wrap gap-4">
                        <div>
                            <h2 className="font-semibold text-[40px] leading-[48px] text-[#222222]">
                                Learn from the Best
                            </h2>
                            <p className="text-base text-[#363338] leading-6">
                                Hear from IT teams who have tamed business sprawl with Stitchflow.
                            </p>
                        </div>

                        {/* <button
                            //   variant="outline"
                            className="rounded-xl border border-[#54505833] p-4"
                        >
                            <span className="font-label-medium text-[#363338] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)]">
                                Download Case Study
                            </span>
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div
                className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => setAutoplayPaused(true)}
                onMouseLeave={() => setAutoplayPaused(false)}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-5"
                    style={{transform: `translateX(-${currentSlide * 100}%)`}}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-full md:w-[50%] flex-shrink-0 ">
                            <div
                                className={`rounded-xl ${testimonial.bgColor} text-white p-6 md:p-8 lg:p-10 shadow-lg h-full flex flex-col`}
                            >
                                <blockquote className="flex-grow mb-6">
                                    <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                                        &ldquo;{testimonial.text}&rdquo;
                                    </p>
                                </blockquote>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center">
                                        <div className="w-8 md:w-10 h-8 md:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 md:mr-4">
                                            <span className="text-sm font-bold">{testimonial.author.charAt(0)}</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm md:text-base">{testimonial.author}</p>
                                            <p className="text-xs md:text-sm text-gray-200">{testimonial.position}</p>
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
                </div>
            </div>

            {/* Pagination and Arrows */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between">
                {/* <div className="flex justify-center gap-2 mb-4 md:mb-0">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                                currentSlide === index ? "bg-blue-600 w-4" : "bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> */}

                {/* <div className="flex justify-center gap-3">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div> */}
            </div>
        </>
    );
};

export default TestimonialCarousel;
