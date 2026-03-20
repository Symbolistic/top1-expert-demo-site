import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const databaseId = process.env.NOTION_DATABASE_ID;

export async function getPublishedPosts() {
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        return [];
    }

    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Published',
            checkbox: { equals: true },
        },
        sorts: [
            {
                property: 'Date',
                direction: 'descending',
            },
        ],
    });

    return response.results.map((page) => ({
        id: page.id,
        title: page.properties.Title.title[0]?.plain_text || 'Untitled',
        slug: page.properties.Slug.rich_text[0]?.plain_text || '',
        date: page.properties.Date.date?.start || null,
    }));
}

export async function getPostMarkdown(pageId) {
    if (!process.env.NOTION_API_KEY) {
        return '';
    }

    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const { parent } = n2m.toMarkdownString(mdBlocks);
    return parent;
}
