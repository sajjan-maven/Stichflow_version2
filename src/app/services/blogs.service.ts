import fetchData from "./apiClient";

export const BlogsService = {
    async getAllBlogs() {
        return fetchData("api/slugs?populate[heroSection][populate]=*&populate[author][populate]=*&populate[metaData][populate]=*&populate[blogs][populate]=*&populate[faqSection][populate]=*");
    },
    async getIndividualBlog(id: string) {
        return fetchData(`api/slugs/${id}?populate[heroSection][populate]=*&populate[author][populate]=*&populate[metaData][populate]=*&populate[blogs][populate]=*&populate[faqSection][populate]=*`);
    },
    async getAllHomeBlogs() {
        return fetchData("api/slugs?populate[heroSection][populate]=*&populate[metaData][populate]=*");
    },
    async getNewsLetter() {
        return fetchData("api/new-letter-section?[populate]=*");
    }
};