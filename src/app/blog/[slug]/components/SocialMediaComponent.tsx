"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState, useRef} from "react";
import styles from "../BlogPost.module.css";
import {Id, ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface SocialMediaComponentProps {
    blogUrl?: string;
    title?: string;
}

const SocialMediaComponent: React.FC<SocialMediaComponentProps> = ({blogUrl, title}) => {
    const [currentUrl, setCurrentUrl] = useState("");
    const toastShown = useRef<Id | null>(null);
    useEffect(() => {
        if (!blogUrl && typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, [blogUrl]);

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.stitchflow.com";
    let shareUrl = blogUrl || currentUrl;
    // Ensure full URL with domain
    if (!shareUrl.startsWith("http")) {
        shareUrl = `${baseUrl}${shareUrl.startsWith("/") ? `/blog/${shareUrl}` : `/blog/${shareUrl}`}`;
    }
    const finalUrl = encodeURIComponent(shareUrl);

    const encodedTitle = encodeURIComponent(title || "Check out this blog!");

    const socialLinks = {
        // linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${finalUrl}`,
        twitter: `https://x.com/intent/post?url=${finalUrl}&text=${encodedTitle}`,
        reddit: `https://www.reddit.com/submit?url=${finalUrl}&title=${encodedTitle}`,
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);

            if (!toastShown.current) {
                const toastId = toast.success("Link Copied!", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                toastShown.current = toastId; // Store the toast ID
            }

            setTimeout(() => {
                if (toastShown.current) {
                    toast.dismiss(toastShown.current); // Dismiss toast safely
                    toastShown.current = null;
                }
            }, 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
            toast.error("Failed to copy link", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className={styles.socialIconsBlog}>
            <div>
                <button onClick={handleCopy} className={styles.copyButton}>
                    <Image src="/blog-details/link.svg" alt="Copy Link" width={24} height={24} />
                </button>
            </div>
            <div>
                <Link href={socialLinks.twitter} target="_blank">
                    <Image src="/blog-details/X.svg" alt="Share on Twitter" width={24} height={24} />
                </Link>
            </div>
            <div>
                <Link href={socialLinks.reddit} target="_blank">
                    <Image src="/blog-details/Reddit.svg" alt="Share on Reddit" width={24} height={24} />
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialMediaComponent;
