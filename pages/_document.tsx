/* eslint-disable react/no-unescaped-entities */
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel='shortcut icon' href='/favicon.ico' />

          <meta name="google-site-verification" content="pqURzWqJv4aLGt93AqrLuOZ4R0ZxbwlJymFj1mnpkSo" />
          <link rel='manifest' href='/manifest.json' />

          <meta name='application-name' content='Cheat Code' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Cheat Code' />
          <meta name='description' content={process.env.DESC} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />

          <link rel='icon' type='image/png' sizes='32x32' href='icon-32x32.png' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content={`${process.env.BASEURL}`} />
          <meta name='twitter:title' content='Cheat Code' />
          <meta name='twitter:description' content={process.env.DESC} />
          <meta name='twitter:image' content={`${process.env.BASEURL}/icon-192x192.png`} />
          <meta name='twitter:creator' content='@Adyfkz' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Cheat Code' />
          <meta property='og:description' content={process.env.DESC} />
          <meta property='og:site_name' content='Cheat Code' />
          <meta property='og:url' content={`${process.env.BASEURL}`} />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6527215730285341"
            crossOrigin="anonymous"></script>
        </Head>
        <body className='bg-slate-50'>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
