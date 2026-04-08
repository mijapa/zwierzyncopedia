import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { APIRoute, GetStaticPaths } from 'astro';

const imageEntries = import.meta.glob('../../../assets/images/**/*.{avif,gif,jpeg,jpg,png,svg,webp}', {
  eager: true,
});

const MIME_TYPES: Record<string, string> = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

export const getStaticPaths: GetStaticPaths = async () =>
  Object.keys(imageEntries).map((filePath) => {
    const relativeFilePath = filePath.replace('../../../assets/images/', '');

    return {
      params: {
        path: relativeFilePath,
      },
      props: {
        filePath: relativeFilePath,
      },
    };
  });

export const GET: APIRoute = async ({ props }) => {
  const relativeFilePath = props.filePath as string;
  const sourceRoot = path.resolve(process.cwd(), 'src/assets/images');
  const sourceFilePath = path.resolve(sourceRoot, relativeFilePath);

  if (!sourceFilePath.startsWith(sourceRoot)) {
    return new Response('Not found', { status: 404 });
  }

  const fileBuffer = await readFile(sourceFilePath);
  const extension = path.extname(sourceFilePath).toLowerCase();

  return new Response(fileBuffer, {
    headers: {
      'Content-Type': MIME_TYPES[extension] ?? 'application/octet-stream',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
