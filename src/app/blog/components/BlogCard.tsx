import Image from "next/image";

interface BlogCardProps {
    title: string;
    bannerImage: string;
    altText: string;
    category: string;
    summary: string;
    loading?: "lazy" | "eager";
    useHeading?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
    title,
    bannerImage,
    altText,
    category,
    summary,
    loading = "lazy",
    useHeading = false,
}) => {
    return (
        <div className="w-full max-w-[500px] md:max-w-full mx-auto">
            {bannerImage && (
                <Image
                    src={bannerImage}
                    alt={altText}
                    width={500}
                    height={300}
                    className="mx-auto"
                    loading={loading}
                />
            )}
            <div className="pt-4 flex flex-col justify-between">
                <div className="font-semibold text-gray-500">{category}</div>
                {useHeading ? <h3 className="text-lg">{title}</h3> : <div className="card-title">{title}</div>}
                {/* <div className="card-title">{title}</div> */}
                <p className="text-gray-500">{summary}</p>
            </div>
        </div>
    );
};

export default BlogCard;
