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
        <div>
            <footer className="flex flex-col items-start gap-16 py-16 px-8 md:px-16 lg:px-[236px] w-full bg-[#363338] text-white">
                <div className="w-full flex justify-center">
                    <Image
                        className="h-[120px] w-auto"
                        alt="Stitchflow Wordmark"
                        src="images/Wordmark.svg"
                        width={20}
                        height={19}
                    />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
                    <div className="font-normal text-xs leading-6">Copyright © 2025 Stitchflow, Inc.</div>

                    <div className="flex items-center gap-6 flex-wrap">
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
            </footer>
        </div>
    );
};

export default FooterComponent;
