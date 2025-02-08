import ShopHeader from "../components/shop-header";
import ShopCategories from "../components/ShopCategory";
// import CategoriesGrid from "./shop/categories-grid";
import FilterRow from "../components/filter-row";
import ClientLogos from "../components/client-logos";
import Footer from "../components/Footer";
import ShopCard from "../components/ShopProduct";
import Breadcrumb from "../components/BreadCrumb";




export default function Home() {
    return (
      <>

      <ShopHeader/>
      <ShopCategories/>
      {/* <CategoriesGrid/>  */}
      <FilterRow/>
      <ClientLogos/>
      <Footer/>
      <ShopCard/>
      {/* <Breadcrumb/>  */}
      
      


      </>
  );
}