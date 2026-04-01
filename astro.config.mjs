// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkFigureCaption from '@microflash/remark-figure-caption';

// https://astro.build/config
export default defineConfig({
  site: 'https://mijapa.github.io',
  base: '/zwierzyncopedia',
  markdown: {
    remarkPlugins: [remarkFigureCaption],
  },
  integrations: [
    starlight({
      title: 'Zwierzyńcopedia',
      description:
        'Cyfrowe repozytorium dziedzictwa Zwierzyńca – miasta-ogrodu na Roztoczu. Encyklopedia historii, architektury, przyrody i ludzi.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Polski',
          lang: 'pl',
        },
      },
      logo: {
        src: './src/assets/images/logo-stowarzyszenia.svg',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/zwierzyncopedia/favicon.svg',
            type: 'image/svg+xml',
          },
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/mijapa/zwierzyncopedia/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/mijapa/zwierzyncopedia',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      credits: false,
      sidebar: [
        {
          label: 'Dziedzictwo',
          items: [
            {
              label: 'Przegląd',
              slug: 'dziedzictwo',
            },
            {
              label: 'Układ urbanistyczny',
              autogenerate: { directory: 'dziedzictwo/uklad-urbanistyczny' },
            },
            {
              label: 'Architektura',
              autogenerate: { directory: 'dziedzictwo/architektura' },
            },
            {
              label: 'Dziedzictwo utracone',
              autogenerate: { directory: 'dziedzictwo/utracone' },
            },
          ],
        },
        {
          label: 'Przyroda',
          autogenerate: { directory: 'przyroda' },
        },
        {
          label: 'Ludzie',
          autogenerate: { directory: 'ludzie' },
        },
        {
          label: 'Biblioteka',
          autogenerate: { directory: 'biblioteka' },
        },
        {
          label: 'O projekcie',
          autogenerate: { directory: 'o-projekcie' },
        },
      ],
    }),
  ],
});
