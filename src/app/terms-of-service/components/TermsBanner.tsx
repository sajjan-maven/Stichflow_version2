import {TermsOrPrivacyData} from "@/app/types/termsOrPrivacy";
import React from "react";

interface TermsOfServiceProps {
    termsData: {data: TermsOrPrivacyData};
}

const TermsBanner: React.FC<TermsOfServiceProps> = ({termsData}) => {
    const termsHeading = termsData?.data?.heroHeading;
    return (
        <section className="w-full px-6">
            <div className="w-full max-w-[1256px] mx-auto mb-8">
                <div className="h-flex justify-center">
                    <div className="max-width-45rem">
                        <div className="w-layout-grid hp-wrap text-center gap-1-25">
                            <h1
                                id="w-node-_2576fd59-3d88-aaee-c5bb-f42a55c0be57-ecc25fca"
                                className="text-primary-black"
                            >
                                {termsHeading}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsBanner;
