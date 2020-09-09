import { useEffect } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HomeIndex from "../components/sections/Welcome";
import About from "../components/sections/about/About";
import AOS from "aos";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeIndex AOS={AOS} />
      <About AOS={AOS} />
    </Layout>
  );
};
export default Home;
