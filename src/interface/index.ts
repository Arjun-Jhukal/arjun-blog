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

export type BlogDetailT = BlogContentRecord | SingleImageBlockRecord;

export type BlogDetailContentRecord = BlogDetailT[];

export interface BlogDetailContent extends Blog {
  content: BlogDetailContentRecord;
  publishedAt: string;
}
