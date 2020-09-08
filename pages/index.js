import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HomeIndex from "../components/sections/Welcome";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeIndex />
    </Layout>
  );
};
export default Home;
