import type { NextPage } from "next";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useSessionStorage } from "usehooks-ts";

const Home: NextPage = () => {
  const [, setOpen] = useSessionStorage("drawer", false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <Hero />
      <Footer />   
    </>
  );
}

export default Home;