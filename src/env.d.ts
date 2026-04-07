declare module '@microflash/remark-figure-caption' {
  import type { Root } from 'mdast';
  import type { Plugin } from 'unified';

  const remarkFigureCaption: Plugin<[], Root>;
  export default remarkFigureCaption;
}
