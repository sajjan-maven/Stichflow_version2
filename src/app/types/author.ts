export interface AuthorResponse {
  data: Author[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}


export interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  aboutAuthor: string | null;
  role: string;
  avatar: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      small?: ImageFormat;
      medium?: ImageFormat;
      thumbnail?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: unknown | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  slugs: Slug[];
  socialMediaList: SocialMedia[];
  metaData: MetaData;
}

export interface ImageFormat {
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

export interface Slug {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
}

export interface SocialMedia {
  id: number;
  mediaLink: string | null;
  mediaList: string | null;
}

export interface ImageData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  // formats: ImageFormats;
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

export interface MetaData {
  id: number;
  metaTitle: string;
  metaDescription: string;
  googleVerification: string;
  url: string;
  shareImage: ImageData;
} 