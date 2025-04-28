const API_BASE_URL = 'https://wce-admin-922329790485.us-central1.run.app/api';
export const POSTS_PER_PAGE = 18;

export type Post = {
    data: {
        title: string;
        description: string;
        image: string;
        categories: string[];
        pubDate: string;
    };
    slug: string;
};

export const getTotalPosts = async () => {
    const response = await fetch(`${API_BASE_URL}/get-all-blogs?page=1&per_page=1&content=false`);
    const data = await response.json();
    return data.meta.total || 0;
};

export const getPaginatedPosts = async (page: number, postsPerPage: number) => {
    const response = await fetch(`${API_BASE_URL}/get-all-blogs?page=${page}&per_page=${postsPerPage}&content=false`);
    const data = await response.json();

    return Array.isArray(data.data)
        ? data.data.map((post: any) => ({
            slug: post.slug,
            data: {
                title: post.title,
                description: post.description,
                image: post.image,
                pubDate: new Date(post.pubDate),
                draft: post.status !== "published",
                date: post.pubDate,
                categories: JSON.parse(post.categories || '[]'),
            }

        }))
        : [];
};

export const getAllPosts = async (content = false) => {
    const response = await fetch(`${API_BASE_URL}/get-all-blogs?page=1&per_page=500&content=${content}`);
    const data = await response.json();
    return Array.isArray(data.data)
        ? data.data.map((post: any) => ({
            slug: post.slug,
            data: {
                title: post.title,
                description: post.description,
                image: post.image,
                categories: JSON.parse(post.categories || '[]'),
                pubDate: new Date(post.pubDate),
                draft: post.status !== "published",
                content: post.content,
            }
        }))
        : [];
};

export const getPostBySlug = async (posts: any, slug: any) => {
    const post = posts.find((post: Post) => post.slug === slug);

    if (!post) {
        return null;
    }

    return {
        content: post.data.content || '',
        canonical: post.data.canonical_url || null,
        pubDate: post.data.pubDate,
    };
};