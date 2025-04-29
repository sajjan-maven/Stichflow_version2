'use client'
import React, { useState } from 'react';

export default function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "Are these tools really for free?",
      answer: (
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima esse magnam distinctio delectus in necessitatibus nostrum eaque, accusamus recusandae labore explicabo quae eum impedit beatae nesciunt sapiente enim expedita officia excepturi architecto. Fugiat culpa quod vitae reiciendis sed perspiciatis.</p>
      )
    },
    {
      question: "Why does Stitchflow offer free tools?",
      answer: (
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima esse magnam distinctio delectus in necessitatibus nostrum eaque, accusamus recusandae labore explicabo quae eum impedit beatae nesciunt sapiente enim expedita officia excepturi architecto. Fugiat culpa quod vitae reiciendis sed perspiciatis.</p>
      )
    },
    {
      question: "Will my data be safe? ",
      answer: (
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima esse magnam distinctio delectus in necessitatibus nostrum eaque, accusamus recusandae labore explicabo quae eum impedit beatae nesciunt sapiente enim expedita officia excepturi architecto. Fugiat culpa quod vitae reiciendis sed perspiciatis.</p>
      )
    },
    {
      question: "How do I get started with these free IT tools? ",
      answer: (
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima esse magnam distinctio delectus in necessitatibus nostrum eaque, accusamus recusandae labore explicabo quae eum impedit beatae nesciunt sapiente enim expedita officia excepturi architecto. Fugiat culpa quod vitae reiciendis sed perspiciatis.</p>
      )
    },
    {
      question: "Can I request new features or tools? ",
      answer: (
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima esse magnam distinctio delectus in necessitatibus nostrum eaque, accusamus recusandae labore explicabo quae eum impedit beatae nesciunt sapiente enim expedita officia excepturi architecto. Fugiat culpa quod vitae reiciendis sed perspiciatis.</p>
      )
    },
    {
      question: "How can I stay updated about future tools?",
      answer: (
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minima esse magnam distinctio delectus in necessitatibus nostrum eaque, accusamus recusandae labore explicabo quae eum impedit beatae nesciunt sapiente enim expedita officia excepturi architecto. Fugiat culpa quod vitae reiciendis sed perspiciatis.</p>
      )
    }
  ];

  return (
    <section className="px-6 py-20 w-full">
      <div className='text-4xl mb-3 text-center font-medium'>Frequently Asked Questions</div>
      <div className='w-full max-w-[1256px] mx-auto'>
        {faqs.map((faq, index) => (
          <div key={index} >
            <h3>
              <button
                type="button"
                className={`flex text-start items-center justify-between w-full px-0 py-2 md:p-5 md:text-lg md:font-medium border-b border-gray-200 ${openAccordion ? 'border-b-0' : ''} cursor-pointer`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordion === index}
              >
                <p>{faq.question}</p>
                <div className='text-3xl font-[400]'>
                  {openAccordion === index ? (<span>-</span>) : (<span>+</span>)}
                </div>
              </button>
            </h3>
            <div
              className={`${openAccordion === index ? 'block' : 'hidden'}`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div className="p-5 text-gray-600 mb-2 border-b border-gray-300">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
