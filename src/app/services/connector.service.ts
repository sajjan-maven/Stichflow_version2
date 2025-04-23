import fetchData from "./apiClient";

export const ConnectorApi = {
    async getConnectorSec() {
        return fetchData("api/integration?populate[HeroSection][populate]=*");
    },
}

export const ConnectorContentApi = {
    async getContentSec() {
        return fetchData("api/integration?populate=*");
    },
}

export const ConnectorImageApi = {
    async getImageSec() {
        return fetchData("api/integration?populate[ConnectorImageSec][populate]=*");
    },
}

export const ConnectorContentMetaImageApi = {
    async getMetaSec() {
        return fetchData("api/integration?&populate[metaData][populate]=*");
    },
}
