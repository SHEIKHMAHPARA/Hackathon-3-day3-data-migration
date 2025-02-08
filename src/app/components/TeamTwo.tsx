import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 gap-2 h-screen p-4">
      {/* Left Side - Large Image */}
      <div className="relative h-full">
        <Image
          src="/Team1.png"
          alt="Fashion Model"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Right Side - Grid of Images */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
        <div className="relative h-full">
          <Image
            src="/Team2.png"
            alt="Eco Aware Coat"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="/Team3.png"
            alt="Denim Jacket"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="/Team4.png"
            alt="Black Hoodie"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="/Team5.png"
            alt="Blue Denim Jacket"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
