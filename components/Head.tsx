import NextHead from 'next/head';

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
  desc = process.env.NEXT_PUBLLC_DESC,
  slug = '',
  category = '',
  authorLink = 'https://github.com/adyfk',
  updateAt = new Date().toISOString(),
  createdAt = new Date().toISOString(),
}) => {
  const headline = `Cheat Code ${!!title ? `- ${title}`: ''}`;
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
