import fetchData from "./apiClient";
export const PrivacyPolicy = {
    async getPolicyData() {
        return fetchData("api/privacy-policy");
    },
};
