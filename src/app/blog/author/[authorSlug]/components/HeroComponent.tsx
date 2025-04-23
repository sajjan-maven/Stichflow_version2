import React from "react";
import styles from "../css/Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import {Author} from "@/app/types/author";

interface HeroComponentProps {
    author: Author;
}

const HeroComponent: React.FC<HeroComponentProps> = ({author}) => {
    const linkedInMedia = author?.socialMediaList?.find((media) => media.mediaList === "LinkedIn");
    const twitterMedia = author?.socialMediaList?.find((media) => media.mediaList === "Twitter");

    return (
        <>
            <div className={styles.parentSec}>
                <div className={styles.heroContainer}>
                    <div className={styles.authorCard}>
                        <div className={styles.profileImage}>
                            <div className={styles.imageWrapper}>
                                {author.avatar.url && (
                                    <Image
                                        src={author.avatar.url}
                                        alt="Profile Picture"
                                        width={100}
                                        height={100}
                                        className={styles.image}
                                    />
                                )}
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h1 className={styles.name}>{author.name}</h1>
                                <div className={styles.icons}>
                                    {linkedInMedia && (
                                        <Link
                                            href={
                                                linkedInMedia?.mediaLink?.startsWith("http")
                                                    ? linkedInMedia.mediaLink
                                                    : `https://${linkedInMedia?.mediaLink}`
                                            }
                                            target="_blank"
                                        >
                                            <Image src="/images/li.svg" alt="LinkedIn" width={24} height={24} />
                                        </Link>
                                    )}
                                    {twitterMedia && (
                                        <Link
                                            href={
                                                twitterMedia?.mediaLink?.startsWith("http")
                                                    ? twitterMedia.mediaLink
                                                    : `https://${twitterMedia?.mediaLink}`
                                            }
                                            target="_blank"
                                        >
                                            <Image src="/images/tw.svg" alt="Twitter" width={24} height={24} />
                                        </Link>
                                    )}
                                    {/* {author.socialMediaList?.map((social, index) => (
                                        social.mediaLink && social.mediaIcon && (
                                            <Link key={index} href={social.mediaLink} target="_blank">
                                                <Image
                                                    src={social.mediaIcon}
                                                    alt={social.mediaText || 'Social Media'}
                                                    width={18}
                                                    height={18}
                                                />
                                            </Link>
                                        )
                                    ))} */}
                                </div>
                            </div>
                            <div className={styles.position}>{author.role || "Head of Marketing, Stitchflow"}</div>
                            <div className={styles.bio}>
                                {author.aboutAuthor}
                                {/* This is a brief biography that provides info<br/> about an author. It can
                                include the author&apos;s<br/> credentials, interests, and previous works. */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.heroSubContainer}>
                <div className={styles.divider}></div>
            </div>
        </>
    );
};

export default HeroComponent;
