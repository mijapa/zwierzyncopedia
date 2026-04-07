import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const BASE_PATH = import.meta.env.BASE_URL;
const NORMALIZED_BASE_PATH = BASE_PATH.endsWith('/') ? BASE_PATH : `${BASE_PATH}/`;

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('RSS generation requires the Astro `site` option.');
  }

  const docs = await getCollection('docs');
  const items = docs
    .filter((entry) => entry.id !== 'index' && !entry.id.endsWith('/index'))
    .sort((left, right) => left.id.localeCompare(right.id, 'pl'))
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      link: `${NORMALIZED_BASE_PATH}${entry.id}/`,
    }));

  return rss({
    title: 'Zwierzyńcopedia',
    description:
      'Kanał RSS z nowymi i zaktualizowanymi artykułami Zwierzyńcopedii.',
    site: context.site,
    items,
    customData: '<language>pl-PL</language>',
  });
}