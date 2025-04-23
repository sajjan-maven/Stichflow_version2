import React from "react";
import {Metadata} from "next";
import TermsPage from "./components/TermsPage";
import {TermsService} from "../services/terms-service.service";

export async function generateMetadata(): Promise<Metadata> {
    const data = await TermsService.getTermsData();
    const termsData = data?.data?.metaData || {};

    return {
        title: termsData.metaTitle || "Site Terms | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
        description:
            termsData.metaDescription ||
            "Stitchflow automates SaaS management by mapping every single access policy and exception across all of the variables like role and location in your environment.",
        openGraph: {
            title: termsData.metaTitle || "Site Terms | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
            description:
                termsData.metaDescription ||
                "Stitchflow automates SaaS management by mapping every single access policy and exception across all of the variables like role and location in your environment.",
            type: "website",
            url: termsData.url ? `${termsData.url}/terms-of-service` : "https://www.stitchflow.com/terms-of-service",
            images: termsData?.shareImage?.url ? [{url: termsData.shareImage.url}] : [],
        },
        twitter: {
            title: termsData.metaTitle || "Site Terms | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
            description:
                termsData.metaDescription ||
                "Stitchflow automates SaaS management by mapping every single access policy and exception across all of the variables like role and location in your environment.",
            card: "summary_large_image",
            images: termsData?.shareImage?.url ? [termsData.shareImage.url] : [],
        },
        verification: {
            google: termsData.googleVerification || "",
        },
        alternates: {
            canonical: termsData.url
                ? `${termsData.url}/terms-of-service`
                : "https://www.stitchflow.com/terms-of-service",
        },
    };
}

export default async function TermsOfService() {
    const [termsOfServiceData] = await Promise.all([TermsService.getTermsData()]);

    return <TermsPage termsData={termsOfServiceData} />;
}
