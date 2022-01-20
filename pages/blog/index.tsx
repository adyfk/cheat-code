import {getMdxContent} from '@utils/get-mdx-content';

const BlogPage: React.FC<any> = ({allMdx}) => {
  //   const [filteredBlogs, setFilteredBlogs] = useState(allMdx);

  //   const handleFilter = (data) => {
  //     setFilteredBlogs(data);
  //   };

  return (
    <div>
      Test my content Ndolo
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getMdxContent('data');
  const allMdx = posts.map((post) => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      allMdx,
    },
  };
}

export default BlogPage;
