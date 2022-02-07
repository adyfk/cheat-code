import {getDate} from '@utils/get-date';
import {writeFileSync, rmSync} from 'fs';

export async function generate(posts: any) {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        ${posts.map(({slug, data}:any) => {
    return `
            <url>
                <loc>${baseUrl+'/'+slug}</loc>
                <lastmod>${getDate(data.updateAt)}</lastmod>
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
