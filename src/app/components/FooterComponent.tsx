import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterComponent = () => {
    const footerLinks = [
        {text: "Terms of Service", href: "/terms-of-service"},
        {text: "Privacy Policy", href: "/privacy"},
        {text: "support@stitchflow.com", href: "mailto:support@stitchflow.com"},
    ];

    return (
        <footer className="w-full bg-[#363338] text-white pb-10 md:pb-16 px-4">
            <div className="max-w-[1256px] mx-auto flex flex-col items-start gap-8 md:gap-16">
                <div className="w-full flex justify-center relative">
                    <Image
                        alt="Stitchflow Wordmark"
                        src="images/Wordmark.svg"
                        width={1256}
                        height={199}
                    />
                </div>

                <div className="flex flex-row items-center justify-between flex-wrap w-full gap-4 md:gap-6">
                    <div className="font-normal text-xs leading-6">Copyright © 2025 Stitchflow, Inc.</div>

                    <div className="flex items-center gap-2 md:gap-6 flex-wrap">
                        {footerLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="font-normal text-xs leading-6 no-underline hover:underline"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
