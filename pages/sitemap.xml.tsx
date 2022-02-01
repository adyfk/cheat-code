import {getMdxData} from '@utils/get-mdx-content';
import {getDate} from '@utils/get-date';
import type {GetServerSideProps} from 'next';

export const getServerSideProps: GetServerSideProps = async ({res}) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://cheat-code.onrender.com',
    test: 'https://cheat-code.onrender.com',
  }[process.env.NODE_ENV];

  const posts = await getMdxData('datas');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        ${posts.map(({slug, data}:any) => {
    return `
            <url>
                <loc>${baseUrl+'/'+slug}</loc>
                <lastmod>${getDate(data.updateAt)}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.9</priority>
            </url>
            `;
  })
      .join('')}
    </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: { },
  };
};


const Sitemap = () => {
  return <div></div>;
};

export default Sitemap;
