import fetchData from "./apiClient";

export const ScheduleDemoApi = {
    async getDemoSchedule() {
        return fetchData("api/schedule-demo?populate=*");
    },
    async getMetaData() {
        return fetchData("api/schedule-demo?&populate[metaData][populate]=*");
    },
}