import FilterBox from "../filterBox/FilterBox";
import Container from "../shared/Container";

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center h-[75vh] w-full relative"
      style={{
        backgroundImage: `url(${"https://wallpapercave.com/dwp2x/wp2707510.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Container>
        <div className="flex flex-col items-center relative z-10 text-center px-4">
         
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
            Choose Your <span className="text-primary">Dream Car</span> Price in Bangladesh
          </h1>

          {/* ফিল্টার বক্স */}
          <div className="w-full max-w-4xl">
            <FilterBox />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
