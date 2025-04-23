export interface INewsLetterSection {
    id: number;
    documentId: string;
    newsLetterHeading: string;
    subscribeText: string;
    newsLetterdescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    meta: Record<string, unknown>;
}
export interface BlogResponse {
    data: BlogData[];
    newsLetterData: {
        data: INewsLetterSection;
    };
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface BlogData {
    id: number;
    documentId: string;
    blogTitle: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    isPublish: boolean;
    heroSection: HeroSection;
    author: Author;
    metaData: MetaData;
    faqSection: FAQ[];
    newsLetterData: {
        data: INewsLetterSection;
    };
}

export interface HeroSection {
    id: number;
    postedDate: string;
    modifiedDate: string;
    heading: string;
    isBanner: boolean;
    isPopularArticle: boolean;
    category: string;
    postedSummary: string;
    urlSlug: string;
    bannerImage: ImageData;
    readTime: number;
}

export interface ImageData {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface ImageFormats {
    large?: ImageSize;
    small?: ImageSize;
    medium?: ImageSize;
    thumbnail?: ImageSize;
}

export interface ImageSize {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

export interface Author {
    id: number;
    documentId: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    aboutAuthor: string;
    role: string;
    linkedInURL: string;
    avatar: ImageData;
    slugs: Slug[];
    socialMediaList: SocialMedia[];
    company: Company[];
}

export interface SocialMedia {
    id: number;
    mediaLink: string | null;
    mediaList: string | null;
}

export interface Slug {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
}

export interface Company {
    id: number;
    ButtonText: string;
    ButtonLink: string;
}

export interface MetaData {
    id: number;
    metaTitle: string;
    metaDescription: string;
    googleVerification: string;
    url: string;
    shareImage: ImageData;
}

export interface FAQ {
    id: number;
    faqQuestion: string;
    faqAnswer: string;
}

export interface SocialMedia {
    mediaLink: string | null;
}
