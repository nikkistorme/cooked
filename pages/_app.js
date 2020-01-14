import Page from '../components/Page.js';

function MyApp({ Component, pageProps }) {
  return(
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;