import fetchData from "./apiClient";

export const SharedService = {
    async getCallSchedule() {
        return fetchData("api/about?populate[ScheduleDemoSection][populate]=ScheduleButton");
    },
};