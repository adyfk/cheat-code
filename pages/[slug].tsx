import {getMdxContent} from '@utils/get-mdx-content';
import Blog from '@components/Blog';
import Head from '@components/Head';
import {getDate} from '@utils/get-date';

export default function BlogPost({source, frontMatter, slug}:any) {
  return (
    <>
      <Head
        slug={slug}
        author={frontMatter.author}
        title={frontMatter.title}
        desc={`${frontMatter.title} cheatsheet resume to guide: usage, examples, links, snippets, shorthand, best practice, and more.`}
        category={frontMatter.category}
        authorLink={frontMatter.authorLink}
        createdAt={getDate(frontMatter.createdAt)}
        updateAt={getDate(frontMatter.updateAt)}
      />
      <Blog source={source} frontMatter={frontMatter}/>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getMdxContent();
  const paths = posts.map(({slug}) => ({
    params: {
      slug: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params: {slug}}:any) {
  const posts = await getMdxContent();
  const [post] = posts.filter((post) => post.slug === slug);

  if (!post) {
    console.warn(`No content found for slug ${slug}`);
  }

  return {
    props: {
      source: post.mdx,
      frontMatter: post.data,
      slug,
    },
  };
}
