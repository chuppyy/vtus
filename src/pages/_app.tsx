import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script async src="https://server.adhub.media/ads/vtus_livextop_com.c25305b6-34dc-4550-b884-8ffa32c592c0.display.js"></script>
        <script defer src="https://videoadstech.org/ads/vtus_livextop_com.2a756ebb-e25b-42cc-b117-51b4d89d983d.video.js"></script>

      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
