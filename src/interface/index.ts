
export interface Image {
	url: string;
	alt: string;
}

export interface Author {
	name: string;
	authorDesignation?: string;
	authorProfile?: Image;
	authorMessage?: string;
}

export interface Category {
	id: string;
	name: string;
	slug: string;
}

export interface Blog {
	__typename?: string;
	title: string;
	slug: string;
	featuredImage: Image;
	writtenBy: Author;
	category: Category[];
	brief: string;
	publishedAt?: string;
}

export interface BlogContentRecord {
	__typename: string;
	blogContent: string;
}

export interface SingleImageBlockRecord {
	__typename: string;
	image: {
		alt: string;
		url: string;
	};
}

export interface QuoteRecordType {
	__typename: string;
	quoteBy: string;
	quoteText: string;
}
export interface IframeRecordType {
	__typename: string;
	iframe: string;
}
export interface GalleryProps {
	__typename: string;
	galleryImage: {
		alt: string;
		url: string;
	}[]
}
export interface FaqProps {
	__typename: string;
	faqTitle: string;
	questionAnswer: {
		answer: string;
		question: string
	}[]

}
export interface PageBannerProps {
	__typename: string;
	pageBannerBrief: string;
	pageBannerImage: {
		video?: {
			thumbnailUrl: string;
			mp4Url: string;
		}
		alt: string;
		url: string
	};
	pageBannerSubTitle: string;
	pageBannerTitle: string;
}

export interface NPLTableRowProps {
	nplTeam: {
		id: string;
		teamName: string;
		teamLogo: {
			url: string;
			alt: string;
		}
	};
	logo: string;
	matchPlayed: number;
	matchWon: number;
	matchLost: number;
	matchDraw: number | null;
	netRunRate: number;
	totalPoints: number;
	recentForm: string;
}
export interface NPLPointsTableProps {
	__typename: string;
	nplPointsTableTitle: string;
	nplPoints: NPLTableRowProps[]
}


export interface SEOProps {
	description: string;
	image: Image;
	title: string;
	twitterCard: string;
}

export type BlogDetailT =
	| BlogContentRecord
	| SingleImageBlockRecord
	| IframeRecordType
	| QuoteRecordType
	| GalleryProps
	| FaqProps
	| PageBannerProps
	| NPLPointsTableProps;

export type BlogDetailContentRecord = BlogDetailT[];

export interface BlogDetailContent extends Blog {
	content: BlogDetailContentRecord;
	publishedAt: string;
	seo: SEOProps;
	relatedPost: Blog[]
}
