import Banner from "../../components/banner/Banner";
import BodyType from "../../components/bodyType/BodyType";
import CarListing from "../../components/carListings/CarListings";
import ExclusiveSection from "../../components/exclusiveSection/ExclusiveSection";
import Newsletter from "../../components/newsLetter/NewsLetter";
import TopBrand from "../../components/topBrand/TopBrand";

const Home = () => {
  return (
    <div>
      <Banner />
      <CarListing />
      <BodyType />
      <TopBrand />
      <ExclusiveSection />
      <Newsletter />
    </div>
  );
};

export default Home;
