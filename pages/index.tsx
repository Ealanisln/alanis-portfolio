import type { NextPage } from "next";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { themeChange } from 'theme-change';
import { useEffect } from "react";

const Home: NextPage = () => {
  
  return (
    <>
      <Hero />
      <Footer />   
    </>
  );
}

export default Home;