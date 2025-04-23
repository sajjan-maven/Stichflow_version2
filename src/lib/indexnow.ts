export async function submitToIndexNow(urls: string | string[]): Promise<boolean> {
    if (!Array.isArray(urls)) {
        urls = [urls];
    }

    const key: string = process.env.INDEXNOW_KEY || "735044fce36945f984f424d9bb5d28b2";
    const host: string = "www.stitchflow.com";

    try {
        const response = await fetch("https://www.bing.com/indexnow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                host,
                key,
                urlList: urls,
            }),
        });

        return response.ok;
    } catch (error) {
        console.error("IndexNow submission failed:", error);
        return false;
    }
}
