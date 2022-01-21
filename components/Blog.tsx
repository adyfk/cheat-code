import {MDXRemote} from 'next-mdx-remote';
import BlockNote from './BlockNote';
import Code from './Code';
import Header from './Header';

const components = {
  code: Code,
  note: BlockNote,
  pre: ({children}:any) => <>{children}</>,
  h2: ({children, ...rest}:any) => {
    return (<h2 className='text-sky-900 text-2xl basis-full'>{children}</h2>);
  },
  h3: ({children, ...rest}:any) => {
    return (<h3 className='text-sky-600 text-xl basis-full my-2'>{children}</h3>);
  },
  p: ({children}: any) => {
    return (<p className='basis-full'>{children}</p>);
  },
  section: ({children}:any) => <div className=''>
    {children}
  </div>,
  ul: ({children}: any) => <ul className='basis-full'>{children}</ul>,
  li: ({children}: any) => (
    <li className='px-2 py-1 bg-blue-50 text-sm font-thin'>
      {children}
    </li>
  ),
};

const Blog: React.FC<any> = ({frontMatter, source}) => {
  return (
    <>
      <Header />
      <main className='p-5'>
        <h2 className='inline-block text-4xl mr-3 text-sky-900 mb-5'>
          {frontMatter.title}
        </h2>
        <span className='text-3xl font-thin'>
         short-documentation
        </span>
        <div>
          <a className='text-sm text-sky-900 mr-5' href={frontMatter.authorLink}>
              Author {` `}
            <span className='font-bold'>{frontMatter.author}</span>
          </a>
          <span className='text-sm text-sky-900 mr-5'>
              Category {` `}
            <span className='font-bold'>{frontMatter.category}</span>
          </span>
          {!!frontMatter.used.length && (
            <span className='text-sm text-sky-900'>
              Used {` `}
              <span className='font-bold'>{frontMatter.used.join(', ')}</span>
            </span>
          )}
          <div className='text-md font-light mt-2 mb-5'>
            {frontMatter.description}
          </div>
        </div>
        <div className='flex flex-wrap flex-col'>
          <MDXRemote {...source} components={components} />
        </div>
      </main>
    </>
  );
};

export default Blog;
