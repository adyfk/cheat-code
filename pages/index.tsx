import Head from '@components/Head';
import Header from '@components/Header';
import {getMdxData} from '@utils/get-mdx-content';
import type {NextPage} from 'next';
import Link from 'next/link';
import {PauseIcon} from '@heroicons/react/solid';

const Home: NextPage<any> = ({contents}) => {
  return (
    <>
      <Head />
      <Header />
      <main className='p-5 flex justify-center'>
        <div className='container flex items-center flex-col'>
          <h2 className='text-5xl font-light text-neutral-700'>Hello Lazy</h2>
          <h3 className='my-5'>This will save you from having to remember everything you learn</h3>
          <div className='flex gap-10 flex-wrap w-full lg:px-20 md:px-10 sm:px-5 mt-5'>
            {Object.entries(contents).map(([category, content]:any, index)=>{
              return (
                <div className='basis-full lg:basis-[47%]' key={index}>
                  <h2 className='text-xl text-sky-700'>{category}</h2>
                  <ul className='list-disc pl-5 pt-2'>
                    {content.map(({slug, data}:any)=>{
                      return (
                        <li key={slug} className='mb-1'>
                          <Link href={slug}>
                            <a className='hover:text-sky-900'>
                              {data.title}
                            </a>
                          </Link>
                          {data.progress && (<PauseIcon className='text-orange-500 inline ml-2' width={20}/>)}
                          {data.version && (
                            <a href={data.versionLink} className='cursor-pointer text-yellow-500 ml-5 hover:underline'>
                              [{data.version}]
                            </a>
                          )}
                          {data.language &&(
                            <span className='text-sm text-green-600 ml-2'>({data.language})</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getMdxData('datas');

  const contents = posts.reduce((acc: any, item, index)=>{
    const category = item.data.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(item);
    return acc;
  }, {});

  return {
    props: {
      contents,
    },
  };
}


export default Home;
