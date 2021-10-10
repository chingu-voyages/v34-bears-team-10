import Head from "next/head";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Zemodo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default DefaultLayout;
