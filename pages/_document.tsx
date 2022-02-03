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
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name="theme-color" content="#FEFEFE"/>
          <link rel="apple-touch-icon" href={`${process.env.BASEURL}/icon-192x192.png`} />

          <link rel='icon' type='image/png' sizes='32x32' href='icon-32x32.png' />
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
