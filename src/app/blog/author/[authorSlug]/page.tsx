import AuthorComponent from "./components/AuthorComponent";
import {AuthorService} from "@/app/services/author.service";
import {Metadata} from "next";
import {Author, MetaData} from "@/app/types/author";
import {BlogsService} from "@/app/services/blogs.service";

// const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export type PageParams = Promise<{authorSlug: string}>;

export interface PageProps {
    params: PageParams;
    searchParams?: Record<string, string[] | undefined>;
}

export async function generateMetadata({params}: {params: PageParams}): Promise<Metadata> {
    const {authorSlug} = await params;

    const data = await AuthorService.getAuthorDetails();
    const authorData: Author[] = data?.data || [];
    const author = authorData.find((post) => {
        const formattedName = post.name.toLowerCase().replace(/\s+/g, "-");
        return formattedName === authorSlug;
    });

    const authorMeta = author?.metaData || ({} as MetaData);

    return {
        title: authorMeta.metaTitle || `${author?.name} | Stitchflow`,
        description: authorMeta.metaDescription || `Read more articles by ${author?.name} on Stitchflow.`,
        openGraph: {
            title: authorMeta.metaTitle || `${author?.name} | Stitchflow`,
            description: authorMeta.metaDescription || `Read more articles by ${author?.name} on Stitchflow.`,
            type: "profile",
            url: authorMeta.url
                ? `${authorMeta.url}/blog/author/${authorSlug}`
                : `https://www.stitchflow.com/blog/author/${authorSlug}`,
            images: author?.avatar?.url ? [{url: author.avatar.url}] : [],
        },
        twitter: {
            title: authorMeta.metaTitle || `${author?.name} | Stitchflow`,
            description: authorMeta.metaDescription || `Read more articles by ${author?.name} on Stitchflow.`,
            card: "summary_large_image",
            images: author?.avatar?.url ? [author.avatar.url] : [],
        },
        verification: {
            google: authorMeta.googleVerification || "",
        },
        alternates: {
            canonical: authorMeta.url
                ? `${authorMeta.url}/blog/author/${authorSlug}`
                : `https://www.stitchflow.com/blog/author/${authorSlug}`,
        },
        robots: "index, follow",
    };
}

export default async function AuthorPage() {
    const [authorData, blogData] = await Promise.all([
        AuthorService.getAuthorDetails(),
        BlogsService.getAllHomeBlogs(),
        // BlogsService.getAllBlogs()
    ]);

    return (
        <div>
            <AuthorComponent authorData={authorData} blogs={blogData} />
        </div>
    );
}
