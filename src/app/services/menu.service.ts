import fetchData from "./apiClient";

export const MenuApi = {
    async getMenuSec() {
        return fetchData("api/navbar?populate=*");
    },
}
