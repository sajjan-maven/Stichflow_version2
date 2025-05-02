// const TermsLeftContainer: React.FC<TermsOfServiceProps> = ({termsData}) => {
//     console.log(termsData, " termsDataaaaaaaaaaaaaaaaaaaaaaaaaaa");

//     const router = useRouter();
//     const pathname = usePathname();
//     const [toc, setToc] = useState<{id: string; title: string}[]>([]);
//     const formatSectionId = (title: string) =>
//         title
//         .replace(/\*\*/g, "")
//         .replace(/[^a-zA-Z0-9\s-]/g, "")
//         .trim()
//         .replace(/\s+/g, "-")
//         .replace(/-+/g, "-")
//         .toLowerCase();

//     const updateUrl = (sectionId: string) => {
//         router.push(`${pathname}#${sectionId}`, {scroll: false});
//     };

//     //const contentHeadingId = formatSectionId(termsData?.data?.contentSection || "");
//     useEffect(() => {
//         if (termsData?.data?.contentSection) {
//             // Parse the HTML content
//             const parsedContent = parse(termsData.data.contentSection);

//             const headings: { id: string; title: string }[] = [];

//             const traverse = (node: any) => {
//                 if (node.type === "tag" && node.name === "h3") {
//                     const title = node.children[0]?.data || "";
//                     const id = formatSectionId(title);
//                     headings.push({ id, title });
//                 }
//                 if (node.children) {
//                     node.children.forEach(traverse);
//                 }
//             };

//             if (Array.isArray(parsedContent)) {
//                 parsedContent.forEach(traverse);
//             } else {
//                 traverse(parsedContent);
//             }

//             setToc(headings);
//         }
//     }, [termsData]);
//     return (
//         <div id="w-node-e5b1394c-aa10-4dc3-8464-6034d5207a9d-ecc25fca">
//             <div key="content-heading">
//                 <Link
//                     to={contentHeadingId}
//                     smooth={true}
//                     offset={-127}
//                     spy={true}
//                     onClick={() => updateUrl(contentHeadingId)}
//                     className={`fs-toc_link w-inline-block terms-space ${
//                       //  activeSection === contentHeadingId ? "active" : ""
//                     }`}
//                 >
//                     <div fs-toc-element="link">{termsData?.data?.contentSection}</div>
//                 </Link>
//             </div>

//             {/* {termsData?.data?.contentSection?.listOfContent?.map((section: ListOfContent) => {
//                 const sectionId = formatSectionId(section.listHeading); */}

//                 return (
//                     <div key={section.id}>
//                         <Link
//                             to={sectionId}
//                             smooth={true}
//                             offset={-127}
//                             spy={true}
//                             onClick={() => updateUrl(sectionId)}
//                             className={`fs-toc_link w-inline-block terms-space ${
//                                 activeSection === sectionId ? "active" : ""
//                             }`}
//                         >
//                             <div fs-toc-element="link">{section.listHeading.replace(/\*\*/g, "")}</div>
//                         </Link>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

"use client";

import React, {useEffect, useState} from "react";
import {TermsOrPrivacyData} from "@/app/types/termsOrPrivacy";
import {Link} from "react-scroll";

interface TermsOfServiceProps {
    termsData: {data: TermsOrPrivacyData};
    activeSection: string;
}

const TermsLeftContainer: React.FC<TermsOfServiceProps> = ({termsData, activeSection}) => {
    // const router = useRouter();
    // const pathname = usePathname();
    const [toc, setToc] = useState<{id: string; title: string}[]>([]);

    const formatSectionId = (title: string) =>
        title
        .replace(/\*\*/g, "")
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();

    // const updateUrl = (sectionId: string) => {
    //     router.push(`${pathname}#${sectionId}`, {scroll: false});
    // };
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Adjust offset to align properly
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        if (termsData?.data?.contentSection) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(termsData.data.contentSection, "text/html");
            const h3Elements = doc.querySelectorAll("h3");

            const headings = Array.from(h3Elements).map((h3) => {
                const title = h3.textContent || "";
                return {
                    id: formatSectionId(title),
                    title: title,
                };
            });

            setToc(headings);
        }
    }, [termsData]);

    // return (
    //     <div id="w-node-e5b1394c-aa10-4dc3-8464-6034d5207a9d-ecc25fca">
    //         {toc.map((section) => (
    //             <div key={section.id}>
    //                 <Link
    //                     to={section.id}
    //                     smooth={true}
    //                     offset={-127}
    //                     spy={true}
    //                     onClick={() => updateUrl(section.id)}
    //                     className="fs-toc_link w-inline-block terms-space"
    //                 >
    //                     <div fs-toc-element="link">{section.title}</div>
    //                 </Link>
    //             </div>
    //         ))}
    //     </div>
    // );

    return (
        <div id="w-node-e5b1394c-aa10-4dc3-8464-6034d5207a9d-ecc25fca">
            <div key="content-heading">
                {toc.map((section) => (
                    <Link
                        key={section.id}
                        to={section.id}
                        smooth={true}
                        offset={-127}
                        spy={true}
                        duration={500}
                        //href={`${pathname}#${section.id}`}
                        onClick={() => handleScroll(section.id)}
                        className={`block w-inline-block terms-space ${activeSection === section.id ? "text-[#F25C30] font-semibold hover:text-[#ff3c00]" : "text-gray-800 hover:text-gray-950"}`}
                    >
                        <div fs-toc-element="link">{section.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TermsLeftContainer;
