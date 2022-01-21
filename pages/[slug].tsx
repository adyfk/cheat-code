import {getMdxContent} from '@utils/get-mdx-content';
import Blog from '@components/Blog';
import Head from '@components/Head';

export default function BlogPost({source, frontMatter}:any) {
  return (
    <>
      <Head title={frontMatter.title} desc={frontMatter.description}/>
      <Blog source={source} frontMatter={frontMatter}/>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getMdxContent('datas');
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
  const posts = await getMdxContent('datas');
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
