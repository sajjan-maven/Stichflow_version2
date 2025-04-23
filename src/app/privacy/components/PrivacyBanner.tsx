import {TermsOrPrivacyData} from "@/app/types/termsOrPrivacy";
import React from "react";

interface PrivacyPolicyProps {
    privacyData: {data: TermsOrPrivacyData};
}

const PrivacyBanner: React.FC<PrivacyPolicyProps> = ({privacyData}) => {
    const privacyHeading = privacyData?.data?.heroHeading;

    return (
        <section className="w-full px-6">
            <div className="w-full max-w-[1256px] mx-auto mb-8">
                <div className="h-flex justify-center">
                    <div className="max-width-45rem">
                        <div className="w-layout-grid hp-wrap text-center gap-1-25">
                            <h1
                                id="w-node-ac2b02b3-dffa-e389-6dc7-75e2f9b09780-ecc25f3e"
                                className="text-primary-black"
                            >
                                {privacyHeading}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyBanner;
