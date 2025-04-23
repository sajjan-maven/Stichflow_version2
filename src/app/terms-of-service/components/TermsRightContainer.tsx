"use client";
import React, {useEffect} from "react";
import {TermsOrPrivacyData} from "@/app/types/termsOrPrivacy";
import parse, {DOMNode} from "html-react-parser";

interface TermsOfServiceProps {
    termsData: {data: TermsOrPrivacyData};
    onSectionChange: (sectionId: string) => void;
}

const TermsRightContainer: React.FC<TermsOfServiceProps> = ({termsData, onSectionChange}) => {
    const formatSectionId = (sectionName: string) =>
        sectionName
        .replace(/\*\*/g, "")
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40px 0px -40% 0px",
            threshold: 0.3,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    onSectionChange(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll("h3[id]");

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [onSectionChange]);

    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: "-200px 0px -60% 0px",
    //         threshold: 0.4,
    //     };

    //     const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 onSectionChange(entry.target.id);
    //             }
    //         });
    //     };

    //     const obs = new IntersectionObserver(handleIntersection, options);
    //     const sections = document.querySelectorAll(".section-heading");
    //     sections.forEach((section) => obs.observe(section));

    //     return () => {
    //         sections.forEach((section) => obs.unobserve(section));
    //     };
    // }, [onSectionChange]);

    const processedContent = parse(termsData.data.contentSection, {
        replace: (domNode: DOMNode) => {
            if (
                typeof domNode === "object" &&
                "type" in domNode &&
                domNode.type === "tag" &&
                "name" in domNode &&
                domNode.name === "h3" &&
                "children" in domNode
            ) {
                // Find the first text node in children
                const textNode = (domNode.children as DOMNode[]).find(
                    (child) => typeof child === "object" && "type" in child && child.type === "text"
                );

                const title = textNode && "data" in textNode ? (textNode.data as string) : "";
                return (
                    <h3 id={formatSectionId(title)} className="content-heading">
                        {title}
                    </h3>
                );
            }
            return undefined;
        },
    });

    // const processedContent = parse(termsData.data.contentSection, {
    //     replace: (domNode: DOMNode) => {
    //         if (
    //             typeof domNode === "object" &&
    //             "type" in domNode &&
    //             domNode.type === "tag" &&
    //             "name" in domNode &&
    //             domNode.name === "h3"
    //         ) {
    //             const title = domNode.children?.[0]?.data || "";
    //             return (
    //                 <h3 id={formatSectionId(title)} className="content-heading">
    //                     {title}
    //                 </h3>
    //             );
    //         }
    //         return undefined;
    //     },
    // });

    return (
        <div fs-toc-offsettop="8rem" fs-toc-element="contents" className="blog-rtb text-left w-richtext">
            {/* <h3 id="stitchflow-cloud-services-agreement" className="section-heading">
                {contentSection.contentHeading}
            </h3>
            <p>{contentSection.contentDate}</p>

            <div className="custom-markdown">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{contentSection.contentDetail}</ReactMarkdown>
            </div>

            {contentSection.listOfContent.map((section) => (
                <div key={section.id}>
                    <h3 id={formatSectionId(section.listHeading)} className="section-heading">
                        {section.listHeading}
                    </h3>

                    {section.paragraphList.map((paragraph) => (
                        <div key={paragraph.id} className="custom-markdown">
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{paragraph.Paragraph}</ReactMarkdown>
                        </div>
                    ))}
                </div>
            ))} */}
            {/* <div className="custom-markdown">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{contentSection}</ReactMarkdown>
            </div> */}

            {/* {processedContent} */}
            <div className="terms-content">{processedContent}</div>
        </div>
    );
};

export default TermsRightContainer;
