import fetchData from "./apiClient";

export const SecurityMetaImageApi = {
    async getSecuritySec() {
        return fetchData("api/security?populate[metaData][populate]=*");
    },
}

export const SecurityImageApi = {
    async getSecurityImgSec() {
        return fetchData("api/security?populate[SecurityHeroSection][populate]=*&populate[SecurityCardSec][populate]=*&populate[SecurityProcessorSec][populate]=*&populate[FeatureSec][populate]=*&populate[WhitePaperSec][populate]=*");
    },
}
