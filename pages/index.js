import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../components/layout";
const HomeIndex = dynamic(() => import("../components/sections/Welcome"), {
  loading: () => <h1>Loading...</h1>,
});
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
