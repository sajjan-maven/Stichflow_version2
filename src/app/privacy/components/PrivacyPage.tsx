"use client"

import type React from "react"
import { useState } from "react"
import PrivacyBanner from "./PrivacyBanner"
import PrivacyLeftContainer from "./PrivacyLeftContainer"
import PrivacyRightContainer from "./PrivacyRightContainer"
import type { TermsOrPrivacyData } from "@/app/types/termsOrPrivacy"

interface PrivacyPolicyProps {
    privacyData: { data: TermsOrPrivacyData }
}

const PrivacyPage: React.FC<PrivacyPolicyProps> = ({ privacyData }) => {
    const [activeSection, setActiveSection] = useState<string>("")
    return (
        <>
            <div className="fixed-header">
                <PrivacyBanner privacyData={privacyData} />
            </div>
            <section className="section">
                <div className="w-full max-w-[1256px] mx-auto mb-8">
                    <div className="relative flex justify-between">
                        <div className="w-full max-w-[310px] hidden md:block sticky top-2">
                            <PrivacyLeftContainer privacyData={privacyData} activeSection={activeSection} />
                        </div>
                        <div className="w-full max-w-[725px]">
                            <PrivacyRightContainer privacyData={privacyData} onSectionChange={setActiveSection} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPage