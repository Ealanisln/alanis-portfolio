import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DrawerLayout from "../components/DrawerLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DrawerLayout>
        <Component {...pageProps} />
      </DrawerLayout>
    </>
  );
}
