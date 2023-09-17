// Import Next Image
import Image from "next/image";

// Import Image
import Img1 from "../../public/img/adoption/img1.png";

const Adoption = () => {
  return (
    <section
      id="about"
      className="flex min-h-[760px] py-8 bg-center bg-no-repeat bg-cover bg-adoption"
    >
      <div className="container flex flex-col items-center justify-center mx-auto gap-x-16 lg:flex-row">
        {/* Image */}
        <div className="flex-1 mb-6 lg:mb-0">
          <Image
            src={Img1}
            alt="Background Adoption"
            width={542}
            height={560}
          />
        </div>

        {/* Text */}
        <div className="flex-1 max-w-md text-center lg:max-w-none lg:text-left text-cream">
          <h2 className="mb-6 h2">Making pet parenting easy for everyone</h2>

          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nam
            error. Est, vero veniam quis in amet saepe error illo molestias,
            sed, distinctio id rerum quasi debitis vitae consequuntur minima.
          </p>

          <ul className="flex flex-col gap-y-4 mb-[38px] lg:list-disc lg:pl-4">
            <li>Adoption</li>
            <li>Frozen Raw</li>
            <li>Next Day Delivery</li>
          </ul>

          <button className="mx-auto transition-all duration-200 lg:mx-0 btn btn-primary">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
