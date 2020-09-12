import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../components/layout";
const HomeIndex = dynamic(() => import("../components/sections/Welcome"), {
  loading: () => <h1>Loading...</h1>,
});
import About from "../components/sections/about/About";
import AOS from "aos";
import Projects from "../components/sections/projects/Projects";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeIndex AOS={AOS} />
      <About AOS={AOS} />
      <Projects />
    </Layout>
  );
};
export default Home;
