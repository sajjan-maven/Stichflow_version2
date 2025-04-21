"use client";
import React, {useEffect, useState, useRef} from "react";
import {ArrowRightIcon, Menu, X} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const router = useRouter();
    const headerRef = useRef<HTMLDivElement>(null); // ✅ ref to detect outside click
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
        document.addEventListener("mousedown", handleClickOutside); // ✅ close on outside click

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const menuItems = [
        {
            name: "Platform",
            hasDropdown: true,
            content: (
                <div className="w-[280px] md:w-[500px] pt-1 md:pt-3">
                    {/* <h4 className="text-sm font-semibold text-gray-400 mb-3">Platform</h4> */}
                    <div className="rounded-2xl border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.08)] p-5 bg-white space-y-4">
                        <div
                            onClick={() => router.push("/product-page")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <h5 className="font-semibold text-sm text-gray-800">Product</h5>
                            <p className="text-sm text-gray-500">Learn how to tame business sprawl with Stitchflow.</p>
                        </div>
                        <div
                            onClick={() => router.push("/usecases")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <h5 className="font-semibold text-sm text-gray-800">Use Cases</h5>
                            <p className="text-sm text-gray-500">How teams put Stitchflow into action.</p>
                        </div>
                        <div
                            onClick={() => router.push("/free-pilot")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <h5 className="font-semibold text-sm text-gray-800">Free Pilot</h5>
                            <p className="text-sm text-gray-500">Experience Stitchflow at no cost.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {name: "App Audits", hasDropdown: false},
        {
            name: "Resources",
            hasDropdown: true,
            content: (
                <div className="w-[280px] md:w-[500px] pt-1 md:pt-3">
                    {/* <h4 className="text-sm font-semibold text-gray-400 mb-3">Resources</h4> */}
                    <div className="rounded-2xl border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.08)] p-5 bg-white space-y-4">
                        <div
                            onClick={() => router.push("/blogpage")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <h5 className="font-semibold text-sm text-gray-800">Blog</h5>
                            <p className="text-sm text-gray-500">Insights, trends, and best practices in IT.</p>
                        </div>
                        <div
                            onClick={() => router.push("/case-study")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <h5 className="font-semibold text-sm text-gray-800">Case Studies</h5>
                            <p className="text-sm text-gray-500">Real-world success stories with Stitchflow.</p>
                        </div>
                        <div
                            onClick={() => router.push("/it-tools")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <h5 className="font-semibold text-sm text-gray-800">Free IT Tools</h5>
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
                    {/* <h4 className="text-sm font-semibold text-gray-400 mb-3">Company</h4> */}
                    <div className="rounded-2xl border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.08)] p-5 bg-white space-y-4">
                        <div
                            onClick={() => router.push("/about")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <h5 className="font-semibold text-sm text-gray-800">About Us</h5>
                            <p className="text-sm text-gray-500">Meet the team behind Stitchflow.</p>
                        </div>
                        <div
                            onClick={() => router.push("/security")}
                            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <h5 className="font-semibold text-sm text-gray-800">Security</h5>
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
        //     className={`fixed top-0 w-full h-[88px] z-50 transition-all duration-200
        // ${isScrolled ? "bg-white shadow-md" : "bg-[#f8f5f3d9] backdrop-blur-[5px]"}
        // flex items-center justify-between px-4 md:px-8 lg:px-[50px] xl:px-[150px] 2xl:px-[236px]`}
        // >

        <div
            ref={headerRef}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 
    ${isScrolled ? "bg-white shadow-md" : "bg-[#f8f5f3d9] backdrop-blur-[5px]"}
    flex  justify-center items-center py-8 md:py-8 lg:py-4`}
        >
            <div className="w-full md:w-[90%] lg:w-[80%] ">
                <div className="flex items-center gap-4 md:gap-12">
                    {/* Logo */}
                    <div className="w-1/5 flex items-center">
                        <div className="relative w-[109px] h-6 cursor-pointer" onClick={() => router.push("/")}>
                            <Image
                                className="absolute w-[109px] h-[24px] left-4 md:left-0"
                                alt="Wordmark"
                                src="/images/logo (1).svg"
                                width={109}
                                height={24}
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-3/5 flex items-center">
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="relative flex items-center lg:right-[35px] xl:right-0 lg:gap-2 xl:gap-6 lg:px-2 xl:px-0 ">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="relative group">
                                        {item.hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(index)}
                                                    className="flex items-center gap-1 font-medium text-[#363338] hover:text-gray-600 focus:outline-none py-2"
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

                    <div className="w-1/5 flex justify-end">
                        {/* CTA Buttons */}
                        <div className="relative hidden lg:flex flex justify-end items-center gap-2">
                            <button
                                onClick={() => router.push("/schedule-a-demo")}
                                className="cursor-pointer w-[136px] h-[52px] px-6 py-3 rounded-xl border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-gradient-to-b from-white to-[#f9f8fa] text-[#363338] font-medium hover:opacity-90 transition-opacity"
                            >
                                Book Demo
                            </button>

                            <button
                                onClick={() => router.push("/pilot")}
                                className="cursor-pointer w-[148px] h-[52px] px-6 py-3 rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] bg-gradient-to-b from-[#545058] to-[#363338] text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                            >
                                Start Trial
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2 absolute right-4 fixed" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="fixed inset-0 top-[88px] bg-white z-40 lg:hidden">
                        <div className="p-6 space-y-6 bg-white">
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
                            <div className="flex flex-row gap-4 pt-6">
                                <button
                                    onClick={() => router.push("/schedule-a-demo")}
                                    className="cursor-pointer w-[136px] h-[52px] px-6 py-3 rounded-xl border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-gradient-to-b from-white to-[#f9f8fa] text-[#363338] font-medium hover:opacity-90 transition-opacity"
                                >
                                    Book Demo
                                </button>

                                <button
                                    onClick={() => router.push("/pilot")}
                                    className="cursor-pointer w-[148px] h-[52px] px-6 py-3 rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] bg-gradient-to-b from-[#545058] to-[#363338] text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                                >
                                    Start Trial
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderComponent;
