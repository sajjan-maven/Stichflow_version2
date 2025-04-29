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
            <div className="w-full pt-[55%] rounded-lg overflow-hidden relative">
                <Image
                    src={bannerImage}
                    alt={altText}
                    width={500}
                    height={300}
                    className="absolute top-0 left-0 h-full w-full object-cover mx-auto"
                    loading={loading}
                />
            </div>
            )}
            <div className="pt-4 flex flex-col justify-between">
                <div className="font-semibold text-[#f25c30]">{category}</div>
                {useHeading ? <h3 className="text-lg">{title}</h3> : <div className="card-title">{title}</div>}
                {/* <div className="card-title">{title}</div> */}
                <p className="text-gray-500">{summary}</p>
            </div>
        </div>
    );
};

export default BlogCard;
