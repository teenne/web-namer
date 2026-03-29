import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  // Sort by date descending
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    // TODO: Replace with your blog's title and description
    title: 'Brand Blog',
    description: 'News, updates, and insights from our team.',
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
