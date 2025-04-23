import fetchData from "./apiClient";

export const ResourceContentApi = {
    async getResourceContent() {
        return fetchData("api/resource?populate=*");
    },
}

export const ResourceContentMetaImageApi = {
    async getResourceImage() {
        return fetchData("api/resource?populate[metaData][populate]=*");
    },
}
