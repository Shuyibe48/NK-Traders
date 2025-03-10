import Banner from "../../components/banner/Banner";
import BodyType from "../../components/bodyType/BodyType";
import CarListing from "../../components/carListings/CarListings";
import ExclusiveSection from "../../components/exclusiveSection/ExclusiveSection";
import Newsletter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TopBrand from "../../components/topBrand/TopBrand";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CarListing/>
      <BodyType />
      <TopBrand/>
      <ExclusiveSection/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
