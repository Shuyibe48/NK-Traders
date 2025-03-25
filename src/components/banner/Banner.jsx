import FilterBox from "../filterBox/FilterBox";
import Container from "../shared/Container";

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center h-[75vh] md:h-screen w-full relative"
      style={{
        backgroundImage: `url(${"https://t3.ftcdn.net/jpg/06/09/87/48/360_F_609874803_boIlmkyVD3R2Ui0qE8AiIcdfDBPzvez7.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center relative z-10 text-center px-4">
         
          <h1 className="text-white font-bold text-3xl lg:text-4xl mb-6">
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
