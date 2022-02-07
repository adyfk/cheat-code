import NextHead from 'next/head';
import Script from 'next/script';

const Head: React.FC<{
  author?: string;
  title?: string;
  desc?: string;
  slug?: string;
  category?: string;
  authorLink?: string;
  createdAt?: string;
  updateAt?: string;
}> = ({
  author = 'Adi Fatkhurozi',
  title,
  desc = process.env.NEXT_PUBLIC_DESC,
  slug = '',
  category = '',
  authorLink = 'https://github.com/adyfk',
  updateAt = new Date().toISOString(),
  createdAt = new Date().toISOString(),
}) => {
  const headline = `Cheatsheet Code ${!!title ? `- ${title}`: ''}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  return (
    <NextHead>
      <title>{headline}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel='canonical' href={baseUrl}></link>
      <meta content={category} property='article:section' />
      <link rel="preconnect" href="https://www.google.com" crossOrigin=""></link>
      <link rel="preconnect" href="https://fonts.google.com" crossOrigin=""></link>
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin=""></link>
      <link rel="preconnect" href="https://www.facebook.com" crossOrigin=""></link>
      <link rel="preconnect" href={baseUrl} crossOrigin=""></link>
      <link rel="dns-prefetch" href="https://www.google.com"></link>
      <link rel="dns-prefetch" href="https://www.google-analytics.com"></link>
      <meta content="" name="copyright"></meta>
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content={`${process.env.BASEURL}`} />
      <meta name='twitter:title' content='Cheatsheet Code' />
      <meta name='twitter:description' content={desc} />
      <meta name='twitter:image' content={`${process.env.BASEURL}/icon-192x192.png`} />
      <meta name='twitter:creator' content='@Adyfkz' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Cheatsheet Code' />
      <meta property='og:description' content={desc} />
      <meta property='og:site_name' content='Cheatsheet Code' />
      <meta property='og:url' content={`${process.env.BASEURL}`} />
      <Script
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6527215730285341"
        crossOrigin="anonymous"></Script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'NewsArticle',
          'name': headline,
          'author': [
            {
              '@type': 'Person',
              'name': author,
              'url': authorLink,
            },
          ],
          'images': [],
          'headline': headline,
          'description': desc,
          'dateModified': updateAt,
          'datePublished': createdAt,
        })}}
      />
      {!!category && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(
              {
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                'itemListElement': [{
                  '@type': 'ListItem',
                  'position': 1,
                  'item': {
                    '@id': `${baseUrl}/#${category}`,
                    'name': category,
                  },
                }, {
                  '@type': 'ListItem',
                  'position': 2,
                  'item': {
                    '@id': `${baseUrl}/${slug}`,
                    'name': headline,
                  },
                }],
              },
          )}}
        />
      )}
    </NextHead>
  );
};

export default Head;
