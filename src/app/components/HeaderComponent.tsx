"use client";
import React, {useEffect, useState, useRef} from "react";
import {ArrowRightIcon, Menu, X} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Button from "./Button";

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const router = useRouter();
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDropdownItemClick = (path: string) => {
        router.push(path);
        setActiveDropdown(null);
        setIsOpen(false); // Also close mobile menu if open
    };

    const menuItems = [
        {
            name: "Platform",
            hasDropdown: true,
            content: (
                <div className="w-[280px] md:w-[500px] pt-1 md:pt-3">
                    <div className="rounded-2xl border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.08)] p-5 bg-white space-y-4 relative z-[60]">
                        <div
                            onClick={() => handleDropdownItemClick("/platform")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <p className="font-semibold text-sm text-gray-800">Product</p>
                            <p className="text-sm text-gray-500">Learn how to tame business sprawl with Stitchflow.</p>
                        </div>
                        <div
                            onClick={() => handleDropdownItemClick("/use-cases")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <p className="font-semibold text-sm text-gray-800">Use Cases</p>
                            <p className="text-sm text-gray-500">How teams put Stitchflow into action.</p>
                        </div>
                        <div
                            onClick={() => handleDropdownItemClick("/pilot")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <p className="font-semibold text-sm text-gray-800">Free Pilot</p>
                            <p className="text-sm text-gray-500">Experience Stitchflow at no cost.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        // {name: "App Audits", hasDropdown: false},
        {
            name: "Resources",
            hasDropdown: true,
            content: (
                <div className="w-[280px] md:w-[500px] pt-1 md:pt-3">
                    <div className="rounded-2xl border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.08)] p-5 bg-white space-y-4 relative z-[60]">
                        <div
                            onClick={() => handleDropdownItemClick("/blog")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <p className="font-medium text-sm text-gray-800">Blog</p>
                            <p className="text-sm text-gray-500">Insights, trends, and best practices in IT.</p>
                        </div>
                        <div
                            onClick={() => handleDropdownItemClick("/case-studies")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <p className="font-medium text-sm text-gray-800">Case Studies</p>
                            <p className="text-sm text-gray-500">Real-world success stories with Stitchflow.</p>
                        </div>
                        <div
                            onClick={() => handleDropdownItemClick("/tools")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <p className="font-medium text-sm text-gray-800">Free IT Tools</p>
                            <p className="text-sm text-gray-500">
                                Useful microapps built by us, free for anyone to use.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            name: "Company",
            hasDropdown: true,
            content: (
                <div className="w-[280px] md:w-[500px] pt-1 md:pt-3">
                    <div className="rounded-2xl border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.08)] p-5 bg-white space-y-4 relative z-[60]">
                        <div
                            onClick={() => handleDropdownItemClick("/about")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <p className="font-semibold text-sm text-gray-800">About Us</p>
                            <p className="text-sm text-gray-500">Meet the team behind Stitchflow.</p>
                        </div>
                        <div
                            onClick={() => handleDropdownItemClick("/security")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <p className="font-semibold text-sm text-gray-800">Security</p>
                            <p className="text-sm text-gray-500">How Stitchflow keeps your data safe and compliant.</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const toggleDropdown = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        // <header
        //     ref={headerRef}
        //     className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ease-in-out
        //     ${isScrolled ? "bg-white lg:bg-white/85 shadow-md backdrop-blur-[8px]" : "bg-[#f8f5f3d9]"}
        //     flex justify-center items-center py-3 px-6`}
        // >
        <header
            ref={headerRef}
            className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ease-in-out 
    ${isScrolled ? "bg-[rgba(248,245,243,0.85)] backdrop-blur-[5px]" : "bg-[#f8f5f3d9]"}
    flex justify-center items-center py-3 px-6`}
        >
            <div className="w-full max-w-[1220px] mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-12">
                        {/* Logo */}
                        <div className="cursor-pointer" onClick={() => router.push("/")}>
                            <Image
                                alt="Stichflow"
                                src="/common-components/nav-logo.png"
                                width={109}
                                height={24}
                                priority
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="relative flex items-center lg:right-[35px] xl:right-0 lg:gap-2 xl:gap-6 lg:px-2 xl:px-0 ">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="relative group">
                                        {item.hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(index)}
                                                    className="flex items-center gap-1 cursor-pointer font-medium text-[#363338] hover:text-gray-600 focus:outline-none py-2"
                                                >
                                                    {item.name}
                                                    <svg
                                                        className={`w-4 h-4 ml-1 transition-transform ${
                                                            activeDropdown === index ? "rotate-180" : ""
                                                        }`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </button>

                                                {/* Dropdown */}
                                                <div
                                                    className={`absolute top-full left-0 mt-2 transition-all duration-200 ease-in-out z-50 ${
                                                        activeDropdown === index
                                                            ? "opacity-100 visible translate-y-1"
                                                            : "opacity-0 invisible -translate-y-1"
                                                    }`}
                                                >
                                                    {item.content}
                                                </div>
                                            </>
                                        ) : (
                                            <a
                                                href="#"
                                                className="font-medium text-[#363338] hover:text-gray-600 py-2 block"
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex justify-end">
                        {/* CTA Buttons */}
                        <div className="relative hidden lg:flex justify-end items-center gap-3">
                            <Button
                                variant="secondary"
                                onClick={() => router.push("/demo")}
                                className="group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
                            >
                                Book Demo
                                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2 right-4 fixed" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="fixed inset-0 mt-14 z-40 lg:hidden">
                        <div className="p-4 pb-10 space-y-6 bg-white">
                            {menuItems.map((item, index) => (
                                <div key={index} className="space-y-4">
                                    <button
                                        onClick={() => item.hasDropdown && toggleDropdown(index)}
                                        className="flex items-center justify-between w-full font-semibold text-lg"
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <svg
                                                className={`w-4 h-4 ml-1 transition-transform ${
                                                    activeDropdown === index ? "rotate-180" : ""
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                    {item.hasDropdown && activeDropdown === index && item.content}
                                </div>
                            ))}
                            <div className="flex flex-row gap-4 pt-6 flex-wrap">
                                <Button
                                    variant="secondary"
                                    onClick={() => router.push("/demo")}
                                    className="group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
                                >
                                    Book Demo
                                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderComponent;
