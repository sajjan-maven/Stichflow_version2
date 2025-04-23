import {NextResponse} from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL; // Default fallback

export async function GET() {
    const robots = `
User-agent: *
Disallow: /api/
Sitemap: ${SITE_URL}/sitemap.xml
`;

    return new NextResponse(robots, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
