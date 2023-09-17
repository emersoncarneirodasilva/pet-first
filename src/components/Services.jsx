// Import Components
import ServiceSlider from "./ServiceSlider";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-[862px] py-8 bg-center bg-no-repeat bg-cover bg-services"
    >
      <div className="container mx-auto h-[862px]">
        <h2 className="mb-12 h2">Our Services</h2>
        <ServiceSlider />
      </div>
    </section>
  );
};

export default Services;
