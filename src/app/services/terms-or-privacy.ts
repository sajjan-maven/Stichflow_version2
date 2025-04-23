import fetchData from "./apiClient";

export const TermsOrPrivacyService = {
    async getTermsData() {
        return fetchData("api/terms-or-policies/voardjmzt4p90whmdt5wkt9q?populate[heroHeading][populate]=*&populate[contentSection][populate][listOfContent][populate][paragraphList]=*&populate[metaData][populate]=*");
    },
    async getPrivacyData() {
        return fetchData("api/terms-or-policies/jrm1rhedl9ie987scchja789?populate[heroHeading][populate]=*&populate[contentSection][populate][listOfContent][populate][paragraphList]=*&populate[metaData][populate]=*");
    },
};