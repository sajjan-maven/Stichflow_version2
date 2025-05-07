"use client";
import Image from "next/image";
import React, {useState} from "react";

export default function FAQSection() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number | null) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const faqs = [
        {
            question: "Are these tools really for free?",
            answer: <p>Yes, 100% free!</p>,
        },
        {
            question: "Why does Stitchflow offer free tools?",
            answer: (
                <p>
                    We believe in empowering IT teams with the right tools to succeed. These free tools are our way of
                    giving back to the IT community while solving real IT pain points with high-impact, easy-to-use
                    solutions.
                </p>
            ),
        },
        {
            question: "Will my data be safe? ",
            answer: (
                <p>
                    Absolutely! Security is our top priority. Every tool is built with strict data protection measures,
                    ensuring your information is never shared and always secure. Stitchflow follows industry best
                    practices for privacy and compliance
                </p>
            ),
        },
        {
            question: "How do I get started with these free IT tools? ",
            answer: (
                <p>Just click on any tool in the list above and dive right in—no complex setup, just instant access.</p>
            ),
        },
        {
            question: "Can I request new features or tools? ",
            answer: (
                <p>
                    Yes! We welcome feedback and feature requests from our community. If you have ideas for new tools or
                    improvements to the current ones, drop us a note at{" "}
                    <a href="mailto:contact@stitchflow.com" style={{color: "#f25c30", textDecoration: "underline"}}>
                        contact@stitchflow.com
                    </a>
                    —we read every request!.
                </p>
            ),
        },
        {
            question: "How can I stay updated about future tools?",
            answer: (
                <p>
                    We’d love to keep you in the loop! You can sign up for our newsletter wherein we share more details
                    about the tools we build (and other nice stuff IT teams should know).
                </p>
            ),
        },
    ];

    return (
        <section className="px-6 py-20 w-full">
            <div className="text-4xl mb-10 text-center font-medium">Frequently Asked Questions</div>
            <div className="w-full max-w-[1256px] mx-auto">
                {faqs.map((faq, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`bg-[#F8F5F3] mb-2 rounded-2xl lg:rounded-4xl p-4 lg:p-9 w-full md:text-xl md:font-medium cursor-pointer text-[#363338]`}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={openAccordion === index}
                    >
                        <div className="flex text-start items-center justify-between">
                            <h3>{faq.question}</h3>
                            {openAccordion === index ?
                                <Image src="/it-tools/Tertiary-.svg" alt="accordian-icon" width={32} height={32} /> :
                                <Image src="/it-tools/Tertiary+.svg" alt="accordian-icon" width={32} height={32} />
                            }
                        </div>
                        <div
                            className={`${openAccordion === index ? "block" : "hidden"} text-start`}
                            aria-labelledby={`accordion-collapse-heading-${index}`}
                        >
                            <div className="text-[#7B7481] mt-4 text-base leading-6">{faq.answer}</div>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
