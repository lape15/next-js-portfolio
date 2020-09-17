import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.css";
const HomeIndex = dynamic(() => import("../components/sections/Welcome"), {
  loading: () => <h1>Loading...</h1>,
});
import About from "../components/sections/about/About";
import AOS from "aos";
import Projects from "../components/sections/projects/Projects";
import Loader from "../components/loader/Loader";
import Footer from "../components/sections/footer/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    const interval = setTimeout(handleLoading, 1000);
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
      <div className={styles.mains}>
        <HomeIndex AOS={AOS} />
        <About AOS={AOS} />
        <Projects AOS={AOS} />
      </div>
      <Footer />
    </Layout>
  );
};
export default Home;
