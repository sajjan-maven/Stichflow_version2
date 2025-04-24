import fetchData from "./apiClient";
export const TermsService = {
    async getTermsData() {
        return fetchData("api/terms-of-service");
    },
};
