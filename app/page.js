import Navbar from "@/components/navbar";
import MainPage from "@/components/main-header";
import Products from "@/components/product";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <MainPage />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
