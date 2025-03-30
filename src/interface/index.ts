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
	__typename: string;
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

export interface SEOProps {
	description: string;
	image: Image;
	title: string;
	twitterCard: string;
}

export type BlogDetailT =
	| BlogContentRecord
	| SingleImageBlockRecord
	| QuoteRecordType;

export type BlogDetailContentRecord = BlogDetailT[];

export interface BlogDetailContent extends Blog {
	content: BlogDetailContentRecord;
	publishedAt: string;
	seo: SEOProps;
}
