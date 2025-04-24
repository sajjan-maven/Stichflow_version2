import fetchData from "./apiClient";

export const HeaderApi = {
    async getHeaderSec() {
        return fetchData("api/navbar?populate[HeaderLogo][populate]=*");
    },
}