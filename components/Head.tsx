import NextHead from 'next/head';

const Head: React.FC<{
  author?: string;
  title?: string;
  desc?: string;
  slug?: string;
  category?: string;
  authorLink?: string
}> = ({
  author = 'Adi Fatkhurozi',
  title,
  desc='CheatCode will save you from having to remember everything you learn',
  slug = '',
  category = '',
  authorLink = 'https://github.com/adyfk',
}) => {
  const headline = `Cheat Code ${!!title ? `- ${title}`: ''}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  return (
    <NextHead>
      <title>{headline}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'NewsArticle',
          'name': headline,
          'author': {
            '@type': 'Person',
            'name': author,
            'url': authorLink,
          },
          'images': [],
          'headline': headline,
          'description': desc,
        })}}
      />
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
    </NextHead>
  );
};

export default Head;
