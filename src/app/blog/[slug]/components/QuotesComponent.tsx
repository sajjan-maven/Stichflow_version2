import React from "react";
import Image from "next/image";

interface TestimonialProps {
  description: string;
  name: string;
  role: string;
}

const QuotesComponent: React.FC<TestimonialProps> = ({ description, name, role }) => {
  console.log(description, name, role)
  return (
    <div className="quote-container">
    <div className="quote-symbol">
        <Image
            src="/images/Frame 1618872827.svg"
            loading="lazy"
            width={65}
            height={45}
            alt="QUOTES"
        />
    </div>
    <p className="quote-text">
        And that’s exactly what Stitchflow provides.
        Stitchflow correlates and normalizes cross-tool IT
        data with unmatched breadth of endpoint coverage
        across more than 50 IT-specific tools.
    </p>
    <p className="quote-author">Sanjeev</p>
    <p className="quote-role">Head of Marketing, Stitchflow</p>
</div>
  );
};

export default QuotesComponent;
