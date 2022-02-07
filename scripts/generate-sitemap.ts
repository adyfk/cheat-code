import {getDate} from '@utils/get-date';
import {writeFileSync, rmSync} from 'fs';
import prettier from 'prettier';

const formatted = (sitemap:string) => prettier.format(sitemap, {parser: 'html'});
export async function generate(posts: any) {
  const nowDate = new Date();
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  const postListSitemap = posts.map(({slug, data}:any) => {
    return `
            <url>
                <loc>${baseUrl+'/'+slug}</loc>
                <lastmod>${getDate(data.updateAt)}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.80</priority>
            </url>
            `;
  }).join('');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
        ${postListSitemap}
    </urlset>`;
  try {
    rmSync('public/sitemap.xml', {recursive: true, force: true});
  } catch (error) {}
  try {
    rmSync(`public/sitemap-${nowDate.getMonth()-1}.xml`, {recursive: true, force: true});
  } catch (error) {}
  try {
    rmSync(`public/sitemap-${nowDate.getMonth()}.xml`, {recursive: true, force: true});
  } catch (error) {}

  try {
    const formateedSitemap: any = formatted(sitemap);
    writeFileSync(`public/sitemap.xml`, formateedSitemap, 'utf8');
    writeFileSync(`public/sitemap-${nowDate.getMonth()}.xml`, formateedSitemap, 'utf8');
    console.log('success generating sitemap');
  } catch (error) {
    console.error('error generating sitemap');
  }
}
