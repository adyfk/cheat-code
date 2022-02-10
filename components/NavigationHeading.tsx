
import {useEffect, useState} from 'react';
import {ArrowSmLeftIcon, ArrowSmRightIcon} from '@heroicons/react/solid';

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
    }, 1000);
  }, []);

  const toogleNav = ( ) => setOpenNav((prev)=>!prev);

  return (
    <div className={`fixed bottom-5 right-0 select-none`} >
      <div className='relative'>
        <div className=' transition-all cursor-pointer w-10 bg-sky-600 hover:bg-amber-400 absolute left-[-10px] top-1/2 translate-y-[-50%] translate-x-[-100%] text-white rounded-full'>
          {openNav ?
            <ArrowSmRightIcon onClick={toogleNav} />:
            <ArrowSmLeftIcon onClick={toogleNav} />
          }
        </div>
        <div className={`${openNav ? '': 'mr-[-280px] opacity-0'} transition-all w-[280px]  rounded-md p-4 bg-sky-600`}>
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

export default NavigationHeading;
