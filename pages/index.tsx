import Head from '@components/Head';
import Header from '@components/Header';
import {getMdxData} from '@utils/get-mdx-content';
import type {NextPage} from 'next';
import Link from 'next/link';

const Home: NextPage<any> = ({contents}) => {
  return (
    <>
      <Head />
      <Header />
      <main className='p-5 flex justify-center'>
        <div className='container flex items-center flex-col'>
          <h2 className='text-5xl font-light text-neutral-700'>Hello Cheater</h2>
          <h3 className='my-5'>This content for you</h3>
          <div className='flex w-full px-20 mt-5'>
            {Object.entries(contents).map(([category, content]:any, index)=>{
              return (
                <div className='basis-1/2' key={index}>
                  <h2 className='text-xl text-sky-700'>{category}</h2>
                  <ul className='list-disc pl-5 pt-2'>
                    {content.map(({slug, data}:any)=>{
                      return (
                        <li key={slug}>
                          <Link href={slug}>
                            <a className='hover:text-sky-900'>
                              {data.title}
                            </a>
                          </Link>
                          {data.version && (
                            <a href={data.versionLink} className='cursor-pointer text-yellow-500 ml-5 hover:underline'>
                              [{data.version}]
                            </a>
                          )}
                          {data.language &&(
                            <span className='text-sm text-green-300 ml-2'>({data.language})</span>
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
