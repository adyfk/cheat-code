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
          <meta name="google-site-verification" content="zSk4iHh0QPtXIc-K-LSb7qYEARSI95PfJRhwQ-enM7g" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
          </style>
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
