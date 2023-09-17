// Import Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// Import Next Image
import Image from "next/image";

// Import Image
import DogImg from "../../public/img/newsletter/dog.png";

const Newsletter = () => {
  return (
    <section>
      <div className="flex flex-1 flex-col lg:flex-row h-[800px] lg:h-[324px]">
        {/* Input Div */}
        <div className="flex flex-col items-center justify-center flex-1 h-full px-8 bg-center bg-no-repeat bg-cover lg:px-0 bg-newsletterOrange">
          <div>
            <h2 className="mb-12 h2">
              Subscribe & Get Pet <br /> Updatenews
            </h2>

            {/* Input */}
            <div className="relative flex">
              <input
                type="text"
                placeholder="Mail"
                className="absolute w-full pr-12 text-white bg-transparent border-b-2 outline-none placeholder:text-white"
              />
              <HiOutlineArrowNarrowRight className="absolute top-0 right-0 text-3xl text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Image Div */}
        <div className="flex items-end justify-center flex-1 h-full bg-center bg-no-repeat bg-cover bg-newsletterYellow">
          <Image src={DogImg} alt="Dog Image" width={270} height={270} />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
