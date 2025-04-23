import fetchData from "./apiClient";

export const PlatformImageApi = {
    async getPlatformImage() {
        return fetchData("api/platform?populate[HeroSection][populate]=*&populate[PlatImageSec][populate]=*&populate[FeatureCardSec][populate]=*&populate[PlatformCard][populate]=*&populate[FeatureCard][populate]=*");
    },
}

export const PlatformContentApi = {
    async getPlatformContent() {
        return fetchData("api/platform?populate=*");
    },
}

export const PlatformMetaImageApi = {
    async getPlatformMeta() {
        return fetchData("api/platform?populate[metaData][populate]=*");
    },
}
