// import components
import Pets from "../components/Pets";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Adoption from "../components/Adoption";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Pet First</title>
      </Head>
      <div className="max-w-[1440px] mx-auto overflow-hidden">
        <Hero />
        <Pets />
        <Services />
        <Adoption />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Home;