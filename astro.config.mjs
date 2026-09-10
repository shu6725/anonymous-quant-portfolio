// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const githubPagesBase = process.env.GITHUB_ACTIONS === 'true'
  && githubRepository
  && githubRepository !== `${githubOwner}.github.io`
  ? `/${githubRepository}`
  : undefined;
const deploymentBase = process.env.ASTRO_BASE ?? githubPagesBase;
const markdownAssetBase = (deploymentBase ?? '').replace(/\/$/, '');

function rewritePublicImagePaths() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'image' && node.url?.startsWith('/')) {
        node.url = markdownAssetBase + node.url;
      }
      node.children?.forEach(visit);
    };

    visit(tree);
  };
}

export default defineConfig({
  output: 'static',
  base: deploymentBase,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, rewritePublicImagePaths],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [mdx()],
});
