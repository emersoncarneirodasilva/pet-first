// Import Next Link
import Link from "next/link";

// Import Next Image
import Image from "next/image";

// Import Image
import pretitleImg from "../../public/img/hero/pretitle-img.svg";

// Import Component
import Header from "./Header";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cream lg:bg-hero lg:bg-cover lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]"
    >
      <Header />
      <div className="container flex justify-start items-center min-h-[400px] lg:h-[805px] mx-auto">
        <div className="text-center mx-auto lg:text-left lg:max-w-[650px] lg:mx-0">
          {/* Image */}
          <div className="hidden mb-6 ml-5 xl:flex">
            <Image
              src={pretitleImg}
              alt="Available states"
              width={"100%"}
              height={"auto"}
            />
          </div>

          <h1 className="text-5xl uppercase lg:text-8xl font-bold -tracking-[0.05em] mb-10">
            A pet first <br />
            <span className="font-normal text-orange">approach to</span> <br />
            wellness
          </h1>

          <button className="mx-auto transition-all duration-300 btn btn-orange lg:mx-0 hover:scale-[1.015]">
            <Link href="#services">Learn more</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
