import {MDXRemote} from 'next-mdx-remote';
import BlockNote from './BlockNote';
import Code from './Code';
import Header from './Header';
import Link from './Link';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import DangerNote from './DangerNote';
import {useEffect, useState} from 'react';
import Desc from './DescNote';
import Text from './Text';
import {ArrowSmLeftIcon, ArrowSmRightIcon} from '@heroicons/react/solid';

const components = {
  text: Text,
  desc: Desc,
  link: Link,
  code: Code,
  note: BlockNote,
  danger: DangerNote,
  table: ({children}: any) => <table className="divide-y divide-gray-200">{children}</table>,
  tr: ({children}: any) => <tr>{children}</tr>,
  th: ({children}: any) => <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>,
  td: ({children}: any) => <td className="px-5 py-2 whitespace-nowrap text-sky-700">{children}</td>,
  thead: ({children}: any) => <thead className="bg-slate-200">{children}</thead>,
  tbody: ({children}: any) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>,
  pre: ({children}:any) => <>{children}</>,
  ul: ({children}: any) => <ul className='basis-full'>{children}</ul>,
  img: ({alt, height, width, src}:any) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <LazyLoadImage
          onClick={()=>setOpen(true)}
          alt={alt}
          height={height}
          src={src}
          className='cursor-pointer'
          width={width}
        />
        {open && (
          <div
            onClick={()=>setOpen(false)}
            className='flex p-10 justify-center items-center fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-80'>
            <LazyLoadImage
              alt={alt}
              height={'100%'}
              src={src}
              width={'100%'}
            />
          </div>
        )}
      </>
    );
  },
  h2: ({children}:any) => {
    return (<h2 className='text-sky-900 text-2xl basis-full mt-5' id={children}>{children}</h2>);
  },
  h3: ({children}:any) => {
    return (<h3 className='text-sky-600 text-xl basis-full my-2'>{children}</h3>);
  },
  p: ({children}: any) => {
    return (<p className='basis-full text-slate-500'>{children}</p>);
  },
  section: ({children}:any) => (<div className=''>
    {children}
  </div>),
  li: ({children}: any) => (
    <li className='px-2 py-1 bg-blue-50 text-sm'>
      {children}
    </li>
  ),
};

const Blog: React.FC<any> = ({frontMatter, source}) => {
  return (
    <>
      <NavigationHeading />
      <Header />
      <main className='p-5'>
        <h2 className='inline-block text-4xl mr-3 text-sky-900 mb-5'>
          {frontMatter.title}
        </h2>
        <span className='text-xl md:text-3xl lg:text-3xl font-thin'>
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

function NavigationHeading() {
  const [openNav, setOpenNav] = useState(false);
  const [navs, setNavs] = useState([]);
  useEffect(()=>{
    setTimeout(()=>{
      const tempNavs: any = [];
      const nodes = document.querySelectorAll('h2');
      nodes.forEach((node)=>{
        if (!node.id) return;
        tempNavs.push(node);
      });
      setNavs(tempNavs);
      setOpenNav(true);
    }, 1000);
  }, []);

  const toogleNav = ( ) => setOpenNav((prev)=>!prev);

  return (
    <div className={`fixed bottom-1/2 translate-y-[50%] right-0 select-none`} >
      <div className='relative'>
        <div className=' transition-all cursor-pointer w-10 bg-sky-600 hover:bg-amber-400 absolute left-[-10px] top-1/2 translate-y-[-50%] translate-x-[-100%] text-white rounded-full'>
          {openNav ?
            <ArrowSmRightIcon onClick={toogleNav} />:
            <ArrowSmLeftIcon onClick={toogleNav} />
          }
        </div>
        <div className={`${openNav ? '': 'mr-[-280px]'} transition-all w-[280px]  rounded-md p-4 bg-sky-600`}>
          <div className='mb-2'>
            <h2 className='mb-2 text-white font-bold text-xl'>Navigate Topic</h2>
          </div>
          <ul className='list-disc pl-4 text-white font-semibold flex flex-col gap-1'>
            {navs.map((nav:any)=>{
              const text = nav.innerText;
              return (
                <li key={text} className='text-ellipsis'>
                  <a
                    className='hover:text-amber-300'

                    href={`#${text}`}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;
