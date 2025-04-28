"use client";

import React, {useEffect, useState} from "react";
import {Link as ScrollLink} from "react-scroll";
import {useRouter, usePathname} from "next/navigation";

interface TableOfContentsProps {
    sections: Array<{title: string; id: string}>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({sections}) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isManualClick, setIsManualClick] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // const updateUrl = (sectionId: string) => {
    //     router.push(`${pathname}#${sectionId}`, {scroll: false});
    // };

    const handleClick = (sectionId: string) => {
        setIsManualClick(true); // ✅ Track that user clicked manually
        setActiveSection(sectionId);
        // updateUrl(sectionId);

        setTimeout(() => {
            setIsManualClick(false); // ✅ Reset after smooth scroll completes
        }, 1000);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (isManualClick) return;

            let currentSection = null;
            let lastVisibleSection = null;

            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();

                    if (rect.top <= 160 && rect.bottom >= 160) {
                        currentSection = section.id;
                    }

                    if (rect.top <= 160) {
                        lastVisibleSection = section.id;
                    }
                }
            });

            const isAtTop = window.scrollY === 0;

            const newActiveSection = isAtTop ? null : currentSection || lastVisibleSection;

            if (newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
                if (newActiveSection) {
                    // router.push(`${pathname}#${newActiveSection}`, {scroll: false});
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections, activeSection, isManualClick, pathname, router]);

    return (
        <nav className="flex flex-col gap-3">
            {sections.map((section) => (
                <ScrollLink
                    key={section.id}
                    to={section.id}
                    smooth={true}
                    duration={300}
                    offset={-100} // Adjust based on your navbar height
                    spy={true}
                    className={`transition-all text-sm duration-300  ease-in ${activeSection === section.id ? "font-medium text-[#F25C30]" : "text-gray-600"}`}
                    onClick={() => {
                        handleClick(section.id);
                        //updateUrl(section.id);
                        //setActiveSection(section.id);
                    }}
                    style={{cursor: "pointer"}}
                >
                    {section.title}
                </ScrollLink>
            ))}
        </nav>
    );
};

export default TableOfContents;
