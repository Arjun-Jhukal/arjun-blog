import { Blog } from '@/interface';
import { performRequest } from '@/services/baseQuery';
import { getAllCategory } from '@/services/getAllCategory';
import { getAllBlogs } from '@/services/getBlogs';
import { getAllBlogsByCategory } from '@/services/getBlogsByCategory';
import type { MetadataRoute } from 'next'

const BASE_URL = "https://blog.arjunjhukal.com.np"

const fetchCategories = async () => {
    const QUERY = getAllCategory();
    const result = (await performRequest({ query: QUERY })) as {
        allCategories: { id: string; slug: string; name: string }[];
    };
    return result.allCategories || [];
};

const fetchBlogs = async () => {
    const QUERY = getAllBlogs(100);
    const data = (await performRequest({
        query: QUERY,
        variables: { slug: "/" },
    })) as {
        allPosts: Blog[];
    };
    return data.allPosts || [];
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const categories = await fetchCategories();
    const blog = await fetchBlogs();

    let urls: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', },
        { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', },
    ];

    for (const category of categories) {
        urls.push({ url: `${BASE_URL}/${category.id}`, lastModified: new Date(), changeFrequency: 'monthly', });
    }
    for (const post of blog) {
        urls.push({ url: `${BASE_URL}/${post.category[0].slug}/${post.slug}`, lastModified: new Date(), changeFrequency: 'monthly', });
    }
    return urls;
}