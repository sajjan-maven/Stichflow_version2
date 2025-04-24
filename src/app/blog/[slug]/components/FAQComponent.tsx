'use client';
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "../BlogPost.module.css";
import { motion } from "framer-motion";

interface FAQItem {
  id: number;
  faqQuestion: string;  
  faqAnswer: string;    
}

interface FAQComponentProps {
  faqData: FAQItem[];  
}

const FAQComponent: React.FC<FAQComponentProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
     {faqData && faqData.length > 0 &&
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleAccordion(index)}
                className={styles.faqQuestion}
              >
                <span className={styles.question}>{faq.faqQuestion}</span>
                {openIndex === index ? <Minus size={20} className={styles.icon} /> : <Plus size={20} className={styles.icon} />}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }} className={styles.faqParentSec}>
                <p className={styles.faqAnswer}>{faq.faqAnswer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      }
    </>
  );
};

export default FAQComponent;