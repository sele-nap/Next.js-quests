import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
