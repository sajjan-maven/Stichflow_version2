import React, {Suspense} from "react";
import ConnectorPageSec from "./components/ConnectorPageSec";
import {Metadata} from "next";
import {
    ConnectorApi,
    ConnectorContentApi,
    ConnectorContentMetaImageApi,
    ConnectorImageApi,
} from "../services/connector.service";

interface BannerImage {
    url: string;
}
interface BannerImage2 {
    url: string;
}
interface HeroSection {
    HeroHeading: string;
    Description: string;
    BannerImage?: BannerImage;
    BannerImage2?: BannerImage2;
}

interface ResponseData {
    HeroSection: HeroSection;
}

interface Category {
    id: string;
    CategoryList: string;
    name?: string;
    description?: string;
}

export interface ConnectorImage {
    id: string;
    ImageText?: string;
    ImageTitle?: string;
    CategoryType?: string;
    Image?: BannerImage;
}

interface ContentResponse {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    HeroSection: {
        HeroHeading: string;
        Description: string;
    };
    CategorySec: Category[];
    ConnectorImageSec: ConnectorImage[];
}

interface ImageResponse {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    ConnectorImageSec: ConnectorImage[];
}

interface ApiResponse<T> {
    data: T;
    status?: number;
    message?: string;
}

interface ConnectorPageSecProps {
    data: ResponseData;
    content: ContentResponse;
    image: ImageResponse;
}

async function getMetadata(): Promise<Metadata> {
    try {
        const respMetaData = await ConnectorContentMetaImageApi.getMetaSec();
        const metaData = respMetaData?.data?.metaData || {};

        return {
            title: metaData.metaTitle || "Integration | Stitchflow, Seamless SaaS Management",
            description:
                metaData.metaDescription ||
                "Discover seamless integrations with Stitchflow. Manage SaaS applications effortlessly with customizable solutions.",
            openGraph: {
                title: metaData.metaTitle || "Integration | Stitchflow, Seamless SaaS Management",
                description:
                    metaData.metaDescription ||
                    "Discover seamless integrations with Stitchflow. Manage SaaS applications effortlessly with customizable solutions.",
                type: "website",
                url: metaData.url ? `${metaData.url}/integrations` : "https://www.stitchflow.com/integrations",
                images: metaData.shareImage?.url ? [{url: metaData.shareImage.url}] : [],
            },
            twitter: {
                title: metaData.metaTitle || "Integration | Stitchflow, Seamless SaaS Management",
                description:
                    metaData.metaDescription ||
                    "Discover seamless integrations with Stitchflow. Manage SaaS applications effortlessly with customizable solutions.",
                card: "summary_large_image",
                images: metaData.shareImage?.url ? [metaData.shareImage.url] : [],
            },
            verification: {
                google: metaData.googleVerification || "",
            },
            alternates: {
                canonical: metaData.url ? `${metaData.url}/integrations` : "https://www.stitchflow.com/integrations",
            },
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            title: "Integration | Stitchflow, Seamless SaaS Management",
            description:
                "Discover seamless integrations with Stitchflow. Manage SaaS applications effortlessly with customizable solutions.",
            openGraph: {type: "website"},
            twitter: {card: "summary_large_image"},
            verification: {google: ""},
        };
    }
}

export async function generateMetadata(): Promise<Metadata> {
    return await getMetadata();
}

export default async function IntegrationPage() {
    try {
        const [respData, contentData, imageData]: [
            ApiResponse<ResponseData>,
            ApiResponse<ContentResponse>,
            ApiResponse<ImageResponse>
        ] = await Promise.all([
            ConnectorApi.getConnectorSec(),
            ConnectorContentApi.getContentSec(),
            ConnectorImageApi.getImageSec(),
        ]);

        if (!respData.data || !contentData.data || !imageData.data) {
            throw new Error("Invalid response data");
        }

        const pageProps: ConnectorPageSecProps = {
            data: respData.data,
            content: contentData.data,
            image: imageData.data,
        };

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div>
                    <ConnectorPageSec {...pageProps} />
                </div>
            </Suspense>
        );
    } catch (error) {
        console.error("Error fetching data:", error);

        const fallbackData: ConnectorPageSecProps = {
            data: {
                HeroSection: {
                    HeroHeading: "",
                    Description: "",
                    BannerImage: {url: ""},
                    BannerImage2: {url: ""},
                },
            },
            content: {
                id: 0,
                documentId: "",
                createdAt: "",
                updatedAt: "",
                publishedAt: "",
                HeroSection: {
                    HeroHeading: "",
                    Description: "",
                },
                CategorySec: [],
                ConnectorImageSec: [],
            },
            image: {
                id: 0,
                documentId: "",
                createdAt: "",
                updatedAt: "",
                publishedAt: "",
                ConnectorImageSec: [],
            },
        };

        return (
            <div>
                <ConnectorPageSec {...fallbackData} />
            </div>
        );
    }
}
