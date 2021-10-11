import Head from "next/head";
import PropTypes from "prop-types";

const DefaultLayout = ({ children }) => (
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

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
