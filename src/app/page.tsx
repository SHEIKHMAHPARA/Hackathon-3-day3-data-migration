import Image from "next/image";
import HeroSection from "./components/Hero";
import ShopCards from "./components/Editor";
import { FeaturedProducts } from "./components/featured-products";
import ClassicProduct from "./components/hero-section";
import PictureBelow from "./components/PictureBelow";
import BelowProducts from "./components/BelowProducts";
import Footer from "./components/Footer";
import ProductCards from "./Product/page";




export default function Home() {
  return (
    <>
      
      <HeroSection/>
      <ShopCards/>
      <FeaturedProducts />
      <ClassicProduct/>
      <PictureBelow/>
      <BelowProducts/>
      <ProductCards/>
      <Footer/>
      

    </>
  );
}