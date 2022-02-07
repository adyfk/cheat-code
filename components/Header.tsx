import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between p-5">
      <div className='text-sm font-semibold cursor-pointer text-sky-700 hover:text-sky-500'>
        <Link href='/'>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </Link>
      </div>
      <Link href='/' >
        <a className='text-sm font-semibold cursor-pointer text-sky-700 hover:text-sky-500'>
          CHEATSHEET
        </a>
      </Link>
      <div>
        <a href="https://github.com/adyfk/cheat-code" className='text-sm font-semibold cursor-pointer text-sky-700 hover:text-sky-500'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
