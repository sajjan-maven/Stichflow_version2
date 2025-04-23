export interface Paragraph {
    id: number;
    Paragraph: string;
}

export interface ListOfContent {
    id: number;
    listHeading: string;
    paragraphList: Paragraph[];
}

export interface ContentSection {
    id: number;
    contentHeading: string;
    contentDate: string;
    contentDetail: string;
    listOfContent: ListOfContent[];
}

export interface HeroHeading {
    id: number;
    heroHeading: string;
}

export interface TermsOrPrivacyData {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    heroHeading: string;
    contentSection: string;
}
