import {promises as fs} from 'fs';
import path from 'path';
import {serialize} from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import glob from 'fast-glob';
import remarkGfm from 'remark-gfm';
import sectionize from './sectionize';

export async function getMdxContent() {
  const contentGlob = `**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  const content = await Promise.all(
      files.map(async (filepath) => {
        const slug = filepath
            .replace('public', '')
            .replace('md', '')
            .replace(/^\/+/, '')
            .replace(new RegExp(path.extname(filepath) + '$'), '');

        const mdxSource = await fs.readFile(filepath);
        const {content, data} = matter(mdxSource);
        const mdx = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [
              sectionize,
              remarkGfm,
            ],
            commonmark: true,
          },
        });
        return {
          filepath,
          slug,
          data,
          mdx,
        };
      }),
  );
  return content;
}

export async function getMdxData() {
  const contentGlob = `**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  const content = await Promise.all(
      files.map(async (filepath) => {
        const slug = filepath
            .replace('public', '')
            .replace('md', '')
            .replace(/^\/+/, '')
            .replace(new RegExp(path.extname(filepath) + '$'), '');

        const mdxSource = await fs.readFile(filepath);
        const {data} = matter(mdxSource);
        return {
          slug,
          data,
        };
      }),
  );
  return content;
}
