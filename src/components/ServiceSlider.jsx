// Import Next Image
import Image from "next/image";

// Import Swiper Styles
import "swiper/css/navigation";
import "swiper/css";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Required Modules
import { Navigation } from "swiper";

const dataServices = [
  {
    name: "pharmacy",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem commodi maxime tempore maiores nam necessitatibus vel, neque architecto deserunt quam et veniam quae quidem cumque quasi consequuntur praesentium perferendis quos.",
    image: "/img/services/service-icon1.svg",
    btnText: "Explore",
  },
  {
    name: "breed-specific haircuts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nesciunt laudantium, dolorum error dolor veniam possimus tenetur officiis quos explicabo provident iusto saepe tempore minus aut, laboriosam accusamus quae ex?",
    image: "/img/services/service-icon2.svg",
    btnText: "Explore",
  },
  {
    name: "Cloths",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi itaque nobis facilis et, sunt corporis quos veniam! Aliquid temporibus eaque et totam consequuntur ullam quis nisi iste blanditiis placeat.",
    image: "/img/services/service-icon3.svg",
    btnText: "Explore",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="serviceSlider min-h-[680px]"
    >
      {dataServices.map((service) => (
        <>
          <SwiperSlide
            key={service.name}
            className="min-h-[560px] px-8 py-16 border border-primary/20 rounded-[66px] bg-cream"
          >
            <Image
              src={service.image}
              alt={service.name}
              width={100}
              height={100}
              className="mb-9"
            />
            <div className="capitalize text-[26px] font-medium mb-4">
              {service.name}
            </div>
            <div className="text-[20px] mb-8">{service.description}</div>
            <button className="transition-all duration-300 btn btn-primary hover:scale-[1.015]">
              {service.btnText}
            </button>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
