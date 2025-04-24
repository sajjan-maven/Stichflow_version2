import fetchData from "./apiClient";

export const HomePageMetaImageApi = {
    async getHomeMetaSec() {
        return fetchData("api/home?populate[metaData][populate]=*");
    },
}

export const HomePageImage = {
    async getHomeImgSec() {
        return fetchData("api/home?populate[HomePagePara][populate][HeroImageSection][populate]=*&populate[ImageSection][populate]=*&populate[WorkFlowSec][populate]=*&populate[PreciseSection][populate]=*&populate[ManualSection][populate]=*&populate[BenifitSecTitle][populate]=*&populate[BenifitCardSection][populate]=*&populate[BenifitHiddenSec][populate]=*&populate[PricingSection][populate]=*&populate[ActionPart][populate]=*&populate[ActionCardSection][populate]=*&populate[CallScheduleSection][populate]=*");
    },
}
