import fetchData from "./apiClient";

export const FooterApi = {
    async getFooterSec() {
        return fetchData("api/footer?populate=*");
    },
}

export const FooterImageApi = {
    async getFooterImgSec() {
        return fetchData("api/footer?populate[FooterLogo][populate]=*");
    },
}









