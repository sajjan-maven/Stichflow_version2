// import fetchData from "./apiClient";

// export const BlogsService = {
//     async getAllBlogs() {
//         return fetchData("api/slugs?populate[heroSection][populate]=*&populate[author][populate]=*&populate[metaData][populate]=*&populate[blogs][populate]=*&populate[faqSection][populate]=*");
//     },
//     async getIndividualBlog(id: string) {
//         return fetchData(`api/slugs/${id}?populate[heroSection][populate]=*&populate[author][populate]=*&populate[metaData][populate]=*&populate[blogs][populate]=*&populate[faqSection][populate]=*`);
//     },
//     async getAllHomeBlogs() {
//         return fetchData("api/slugs?populate[heroSection][populate]=*&populate[metaData][populate]=*");
//     },
//     async getNewsLetter() {
//         return fetchData("api/new-letter-section?[populate]=*");
//     }
// };

import fetchData from "./apiClient";

export const BlogsService = {
    async getAllBlogs(category: string = "all") {
        const baseUrl =
            "api/slugs?populate[heroSection][populate]=*&populate[author][populate]=*&populate[metaData][populate]=*&populate[blogs][populate]=*&populate[faqSection][populate]=*";

        if (category && category !== "all") {
            return fetchData(`${baseUrl}&filters[heroSection][category][$eq]=${encodeURIComponent(category)}`);
        }
        return fetchData(baseUrl);
    },
    async getIndividualBlog(id: string) {
        return fetchData(
            `api/slugs/${id}?populate[heroSection][populate]=*&populate[author][populate]=*&populate[metaData][populate]=*&populate[blogs][populate]=*&populate[faqSection][populate]=*`
        );
    },
    async getAllHomeBlogs(page: number = 1, limit: number = 10, category: string = "all") {
        const baseUrl = `api/slugs?pagination[page]=${page}&pagination[pageSize]=${limit}&populate[heroSection][populate]=*&populate[metaData][populate]=*`;

        if (category && category !== "all") {
            return fetchData(`${baseUrl}&filters[heroSection][category][$eq]=${encodeURIComponent(category)}`);
        }
        return fetchData(baseUrl);
    },
    async getNewsLetter() {
        return fetchData("api/new-letter-section?[populate]=*");
    },
};
