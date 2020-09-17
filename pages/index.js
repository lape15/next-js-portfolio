import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../components/layout";
const HomeIndex = dynamic(() => import("../components/sections/Welcome"), {
  loading: () => <h1>Loading...</h1>,
});
import About from "../components/sections/about/About";
import AOS from "aos";
import Projects from "../components/sections/projects/Projects";
import Loader from "../components/loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    const interval = setTimeout(handleLoading, 42000);
    return () => {
      clearInterval(interval);
    };
  });
  if (loading) {
    return <Loader loading={loading} />;
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeIndex AOS={AOS} />
      <About AOS={AOS} />

      <Projects AOS={AOS} />
    </Layout>
  );
};
export default Home;
