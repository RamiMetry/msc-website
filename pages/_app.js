import "@/styles/globals.css";
import "@/styles/colors.css";
import "@/styles/fonts.css";
import "bootstrap/dist/css/bootstrap.css";

import MainNavbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
