// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const githubPagesBase = process.env.GITHUB_ACTIONS === 'true'
  && githubRepository
  && githubRepository !== `${githubOwner}.github.io`
  ? `/${githubRepository}`
  : undefined;

export default defineConfig({
  output: 'static',
  base: process.env.ASTRO_BASE ?? githubPagesBase,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
