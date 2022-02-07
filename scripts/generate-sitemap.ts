import {getDate} from '@utils/get-date';
import {writeFileSync, rmSync} from 'fs';

export async function generate(posts: any) {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <url>
            <loc>${baseUrl}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>1.00</priority>
        </url>
        ${posts.map(({slug, data}:any) => {
    return `
            <url>
                <loc>${baseUrl+'/'+slug}</loc>
                <lastmod>${getDate(data.updateAt)}</lastmod>
                <priority>0.80</priority>
            </url>
            `;
  })
      .join('')}
    </urlset>`;
  try {
    rmSync('public/sitemap.xml', {recursive: true, force: true});
  } catch (error) {
  }

  try {
    writeFileSync('public/sitemap.xml', sitemap);
    console.log('success generating sitemap');
  } catch (error) {
    console.error('error generating sitemap');
  }
}
