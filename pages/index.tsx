import type { NextPage } from "next";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { themeChange } from 'theme-change';
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  
  return (
    <>
      <Hero />
      <Footer />   
    </>
  );
}

export default Home;