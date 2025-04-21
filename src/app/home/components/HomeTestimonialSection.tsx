// import React from "react";
// const testimonials = [
//     {
//         id: 1,
//         quote: "\"Imagine trying to keep up with everything using complex Google Sheets and Excel spreadsheets – it was a nightmare. We were constantly cross-referencing user counts against available licenses, which was incredibly time-consuming. Investigating license usage was a huge hassle, and audits became increasingly difficult as our company grew. The data we were exporting wasn't always reliable, either. Since implementing Stitchflow, things have drastically improved. It's given me real peace of mind.\"",
//         name: "Carlos Jimenez",
//         title: "CIO and CISO",
//         bgColor: "bg-[#729fab]",
//         textColor: "text-[#a2a2a2]",
//         logoSrc: null,
//         logoWidth: null,
//     },
//     {
//         id: 2,
//         quote: "\"Imagine trying to keep up with everything using complex Google Sheets and Excel spreadsheets – it was a nightmare. We were constantly cross-referencing user counts against available licenses, which was incredibly time-consuming. Investigating license usage was a huge hassle, and audits became increasingly difficult as our company grew. The data we were exporting wasn't always reliable, either. Since implementing Stitchflow, things have drastically improved. It's given me real peace of mind.\"",
//         name: "Carlos Jimenez",
//         title: "CIO and CISO",
//         bgColor: "bg-[#1d1733]",
//         textColor: "text-white",
//         logoSrc: "/logo-3.svg",
//         logoWidth: "w-[115px]",
//     },
//     {
//         id: 3,
//         quote: "\"One of the hardest things in IT is figuring out access control—who's in what groups, what those groups do, who manages them, and where all that information lives. Before Stitchflow, it was a nightmare trying to piece together this data across tools like Google, Zoom, and other systems where names didn't match or info was missing. Stitchflow makes all of that so much easier. Instead of juggling spreadsheets, exporting CSVs, and manually matching users, I can instantly see patterns, irregularities, and access issues in one place.\"",
//         name: "Peter Hadjisavas",
//         title: "CIO and CISO",
//         bgColor: "bg-[#5a4adf]",
//         textColor: "text-white",
//         logoSrc: "/logo-2.svg",
//         logoWidth: "w-[99px]",
//     },
// ];
// const HomeTestimonialSection = () => {
//     return <div>  <section className="py-20 bg-white w-full z-[2]">
//     <div className="container max-w-[1256px] mx-auto">
//       <div className="flex items-center justify-between mb-[72px]">
//         <div className="flex flex-col gap-2 max-w-[616px]">
//           <h2 className="font-semibold text-[40px] leading-[48px] text-[#222222] font-['Geist',Helvetica]">
//             Learn from the Best
//           </h2>
//           <p className="text-base text-[#363338] font-['Geist',Helvetica] leading-6">
//             Hear from IT teams who have tamed business sprawl with Stitchflow.
//           </p>
//         </div>

//         <button
//         //   variant="outline"
//           className="rounded-xl border border-[#54505833] p-4"
//         >
//           <span className="font-label-medium text-[#363338] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)]">
//             Download Case Study
//           </span>
//         </button>
//       </div>

//       <Carousel className="w-full">
//         <CarouselContent className="flex items-center justify-center gap-6">
//           {testimonials.map((testimonial) => (
//             <CarouselItem
//               key={testimonial.id}
//               className={`${testimonial.id === 1 ? "ml-[-405px]" : testimonial.id === 3 ? "mr-[-405px]" : ""}`}
//             >
//               <Card
//                 className={`w-[830px] h-[414px] ${testimonial.bgColor} rounded-[32px] overflow-hidden border-none`}
//               >
//                 <CardContent className="p-0">
//                   <div className="flex flex-col w-[718px] h-[216px] gap-6 p-14">
//                     <p className="font-['Geist',Helvetica] font-normal text-white text-base leading-6">
//                       {testimonial.quote}
//                     </p>

//                     <div className="flex items-center gap-4">
//                       <Avatar className="w-12 h-12 rounded-[100px] border border-solid border-[#54505833]">
//                         <AvatarImage
//                           src="/images/Avatar.png"
//                           alt={testimonial.name}
//                         />
//                         <AvatarFallback>
//                           {testimonial.name.charAt(0)}
//                         </AvatarFallback>
//                       </Avatar>

//                       <div className="flex flex-col gap-1">
//                         <div
//                           className={`font-['Geist',Helvetica] font-medium text-base leading-6 ${testimonial.textColor}`}
//                         >
//                           {testimonial.name}
//                         </div>
//                         <div
//                           className={`font-['Geist',Helvetica] font-normal text-xs leading-4 ${testimonial.textColor}`}
//                         >
//                           {testimonial.title}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {testimonial.logoSrc && (
//                     <img
//                       className={`absolute h-8 bottom-14 left-14 ${testimonial.logoWidth}`}
//                       alt="Logo"
//                       src={testimonial.logoSrc}
//                     />
//                   )}
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   </section></div>;
// };

// export default HomeTestimonialSection;
"use client";
import React, {useState} from "react";

const testimonials = [
    {
        id: 1,
        quote: "Imagine trying to keep up with everything using complex Google Sheets...",
        name: "Carlos Jimenez",
        title: "CIO and CISO",
        bgColor: "bg-[#729fab]",
        textColor: "text-[#a2a2a2]",
        logoSrc: null,
        logoWidth: null,
    },
    {
        id: 2,
        quote: "Since implementing Stitchflow, things have drastically improved...",
        name: "Carlos Jimenez",
        title: "CIO and CISO",
        bgColor: "bg-[#1d1733]",
        textColor: "text-white",
        logoSrc: "/logo-3.svg",
        logoWidth: "w-[115px]",
    },
    {
        id: 3,
        quote: "Stitchflow makes all of that so much easier...",
        name: "Peter Hadjisavas",
        title: "CIO and CISO",
        bgColor: "bg-[#5a4adf]",
        textColor: "text-white",
        logoSrc: "/logo-2.svg",
        logoWidth: "w-[99px]",
    },
];

const HomeTestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="py-20 bg-white w-full relative overflow-hidden">
            <div className="max-w-[1256px] mx-auto px-4">
                <div className="flex items-center justify-between mb-16">
                    <div className="max-w-[616px]">
                        <h2 className="text-4xl font-semibold text-[#222] leading-tight">Learn from the Best</h2>
                        <p className="text-base text-[#363338] leading-6 mt-2">
                            Hear from IT teams who have tamed business sprawl with Stitchflow.
                        </p>
                    </div>
                    <button className="rounded-xl border border-[#54505833] p-4">
                        <span className="text-[#363338] text-sm font-medium">Download Case Study</span>
                    </button>
                </div>

                <div className="relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        {testimonials.map((t) => (
                            <div key={t.id} className="min-w-full flex justify-center px-2">
                                <div className={`w-[830px] h-[414px] ${t.bgColor} rounded-[32px] p-14 relative`}>
                                    <p className="text-white text-base leading-6 mb-6">{t.quote}</p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/images/Avatar.png"
                                            alt={t.name}
                                            className="w-12 h-12 rounded-full border"
                                        />
                                        <div>
                                            <p className={`text-base font-medium ${t.textColor}`}>{t.name}</p>
                                            <p className={`text-xs ${t.textColor}`}>{t.title}</p>
                                        </div>
                                    </div>
                                    {t.logoSrc && (
                                        <img
                                            className={`absolute h-8 bottom-14 left-14 ${t.logoWidth}`}
                                            alt="Logo"
                                            src={t.logoSrc}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                        <button onClick={prev} className="bg-gray-200 p-2 rounded-full">
                            &#8592;
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                        <button onClick={next} className="bg-gray-200 p-2 rounded-full">
                            &#8594;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonialSection;
