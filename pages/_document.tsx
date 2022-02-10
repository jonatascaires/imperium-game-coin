import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Odibee+Sans"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Passion+One"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument