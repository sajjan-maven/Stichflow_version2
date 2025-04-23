import fetchData from "./apiClient";

export const AboutService = {
    async getAbout() {
        return fetchData("api/about?populate=*");
    },

    async getAboutMetaData() {
        return fetchData("api/about?populate[metaData][populate]=*");
    },

    async getHeroSection() {
        return fetchData("api/about?populate[HeroSection][populate]=AboutHeroLogo");
    },

    async getValuesSection() {
        return fetchData("api/about?populate[ValuesSections][populate][ValuesList][populate]=ValuesImage");
    },

    async getRolesSection() {
        return fetchData("api/about?populate[RolesSection][populate][RolesList][populate]=RolesListImage");
    },
};