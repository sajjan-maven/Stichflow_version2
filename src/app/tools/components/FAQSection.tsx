"use client";
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
            <div className="text-4xl mb-3 text-center font-medium">Frequently Asked Questions</div>
            <div className="w-full max-w-[1256px] mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <h3>
                            <button
                                type="button"
                                className={`flex text-start items-center justify-between w-full px-0 py-2 md:p-5 md:text-lg md:font-medium border-b border-gray-200 ${
                                    openAccordion ? "border-b-0" : ""
                                } cursor-pointer`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openAccordion === index}
                            >
                                <p>{faq.question}</p>
                                <div className="text-3xl font-[400]">
                                    {openAccordion === index ? <span>-</span> : <span>+</span>}
                                </div>
                            </button>
                        </h3>
                        <div
                            className={`${openAccordion === index ? "block" : "hidden"}`}
                            aria-labelledby={`accordion-collapse-heading-${index}`}
                        >
                            <div className="p-5 text-gray-600 mb-2 border-b border-gray-300">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
