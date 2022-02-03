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
          <meta name="google-site-verification" content="pqURzWqJv4aLGt93AqrLuOZ4R0ZxbwlJymFj1mnpkSo" />
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
