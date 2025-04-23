export async function GET(): Promise<Response> {
    const indexNowKey: string = process.env.INDEXNOW_KEY || "735044fce36945f984f424d9bb5d28b2";

    return new Response(indexNowKey, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
