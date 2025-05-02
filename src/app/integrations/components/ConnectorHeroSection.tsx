"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import {ArrowRightIcon} from "lucide-react";
import {useRouter} from "next/navigation";
interface ConnectorHeroSectionProps {
    title: {
        HeroHeading: string;
        Description: string;
        BannerImage?: {url: string};
        BannerImage2?: {url: string};
    };
}
const ConnectorHeroSection: React.FC<ConnectorHeroSectionProps> = ({title}) => {
    const router = useRouter();
    return (
        <div>
            <section className="section hero integration-page">
                <div className="my-contain contain-82">
                    <div className="content-wrapper h-flex align-center">
                        <div className="left-div _60cent">
                            <div className="padding-top-bottom">
                                <div className="max-width-45rem">
                                    <div className="w-layout-grid hp-wrap gap-1-25 mb-align-center">
                                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                            {title.HeroHeading}
                                            <span className="text-int-green" />
                                        </h1>
                                        <div
                                            id="w-node-_3aa2da4f-1d0e-43c2-e2c0-d69d488011f2-ecc25f2b"
                                            className="w-layout-grid hp-wrap gap-2-187rem"
                                        >
                                            <div
                                                id="w-node-_3aa2da4f-1d0e-43c2-e2c0-d69d488011f3-ecc25f2b"
                                                className="max-width-30rem"
                                            >
                                                <div className="text-lg md:text-xl text-gray-600 max-w-lg">
                                                    {title.Description}
                                                </div>
                                            </div>
                                            <div className="content-wrapper h-flex">
                                                <a href="schedule-a-demo" className="cta-link w-inline-block">
                                                    <Button
                                                        variant="secondary"
                                                        onClick={() => router.push("/demo")}
                                                        className="group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
                                                    >
                                                        Book Demo
                                                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                                                    </Button>
                                                </a>
                                                <div className="form-wrapper platform-hero-form mb-align-center cc-z-2 hide w-form">
                                                    <form
                                                        id="wf-form-Waiting-List-Form"
                                                        name="wf-form-Waiting-List-Form"
                                                        data-name="Waiting List Form"
                                                        action="https://stitchflow.us9.list-manage.com/subscribe/post?u=8d5383ffbe429b9724e0f2c7b&amp;id=456e1c6056&amp;f_id=003f27e1f0"
                                                        method="post"
                                                        className="form justify-center"
                                                        data-wf-page-id="65df97133369ceedecc25f2b"
                                                        data-wf-element-id="9a753ebb-4356-65dc-0612-566e59209a1e"
                                                    >
                                                        <div className="h-flex align-center">
                                                            <div className="hp-wrap gap--25">
                                                                <input
                                                                    className="form-input hero-input int-form-input w-input"
                                                                    maxLength={256}
                                                                    name="EMAIL"
                                                                    data-name="EMAIL"
                                                                    placeholder="Work email"
                                                                    type="email"
                                                                    id="EMAIL"
                                                                    required
                                                                />
                                                            </div>
                                                            <div
                                                                id="w-node-_9a753ebb-4356-65dc-0612-566e59209a22-ecc25f2b"
                                                                className="button-wrapper form-hero-btn"
                                                            >
                                                                <input
                                                                    type="submit"
                                                                    data-wait="Please wait..."
                                                                    className="btn is-form-submit w-button"
                                                                    defaultValue="Join pilot"
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="form-message-success cc-text-black w-form-done">
                                                        <div>Thank you! Your submission has been received!</div>
                                                    </div>
                                                    <div className="form-message-error w-form-fail">
                                                        <div>Oops! Something went wrong while submitting the form.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-div _40cent cc-int-hero-mobile">
                            <Image
                                src={title?.BannerImage?.url ?? ""}
                                loading="lazy"
                                alt="integration hero image will all the company logos"
                                className="_50vw-image integration-page negative-margin hide-mobile"
                                width={646}
                                height={500}
                            />
                            <Image
                                src={title?.BannerImage2?.url ?? ""}
                                loading="lazy"
                                sizes="(max-width: 767px) 80vw, 100vw"
                                alt="in hero image with all the company logos"
                                className="_50vw-image integration-page mobile-hero-int"
                                width={646}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConnectorHeroSection;
