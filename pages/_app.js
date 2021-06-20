import Head from "next/head"
import GlobalStyle from "styles/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>コンタクトレンズ管理 | 斉藤眼科</title>
        <meta name="description" content="コンタクトレンズ管理 | 斉藤眼科" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
