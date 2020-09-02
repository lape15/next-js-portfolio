import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };
  useEffect(() => {
    handleLoading();
    const interval = setTimeout(() => {
      console.log("We are loading" + loading);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Akintan Lape, I am a fron-end devloper.You can contact me on twitter
        </p>
      </section>
    </Layout>
  );
};
export default Home;
