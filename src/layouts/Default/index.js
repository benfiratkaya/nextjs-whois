import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DefaultLayout = (props) => {
  const { asPath, locales } = useRouter();
  return (
    <div className="app">
      <Head>
        <title>{props.title}</title>
        {locales.map((locale) =>
          locale === "en" ? (
            <link
              key={locale}
              rel="alternate"
              hrefLang="x-default"
              href={`https://www.licenset.com/`}
            />
          ) : (
            <link
              key={locale}
              rel="alternate"
              hrefLang={locale}
              href={`https://www.licenset.com/${locale}${asPath}`}
            />
          )
        )}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main role="main">{props.children}</main>

      <Footer />
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default DefaultLayout;
