import fetchData from "./apiClient";

export const AuthorService = {
    async getAuthorDetails() {
        return fetchData("api/authors/?populate=*");
    },
}