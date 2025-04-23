const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const API_TOKEN = process.env.STRAPI_API_TOKEN
    ? process.env.STRAPI_API_TOKEN
    : "bd561668cebd894826e188393fe6a946ab92a7e5231472b7f3a22ea68c6a6edab41c16b92c611f3a882e9796b2ae7d3843a8ca52c2e75c0ce647f5810d68278da8f39a18057a1e3c74896e96251fb02de6b053e03e2a92e45afe3bfc63bd66cd62d4223eb6ce1e967ea45c7a2072257ec7395d8999b043f310b3325f124f7421";

const fetchData = async (
    endpoint: string,
    options: RequestInit = {},
    cacheOptions: {revalidate?: number; cache?: "no-store" | "force-cache"} = {revalidate: 60}
) => {
    try {
        const url = `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

        const defaultOptions: RequestInit = {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(API_TOKEN ? {Authorization: `Bearer ${API_TOKEN}`} : {}), // Only add if available
                ...options.headers,
            },
            next: cacheOptions,
        };

        const response = await fetch(url, defaultOptions);

        if (!response.ok) {
            console.error(`Fetch Error: ${response.status} ${response.statusText}`);
            return null;
        }

        const contentType = response.headers.get("content-type");
        return contentType?.includes("application/json") ? await response.json() : await response.text();
    } catch (error) {
        console.error("⚠️ Error fetching data:", error);
        return null;
    }
};

export default fetchData;
