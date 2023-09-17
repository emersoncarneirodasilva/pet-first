// Import useState
import { useState } from "react";

// Import Next Image
import Image from "next/image";

// Import Image
import Badge from "../../public/img/pets/badge.svg";

const dataPets = [
  { id: 1, category: "cat", name: "kyba", image: "/img/pets/1.png" },
  { id: 2, category: "bird", name: "rotty", image: "/img/pets/2.png" },
  { id: 3, category: "fox", name: "fexxie", image: "/img/pets/3.png" },
  { id: 4, category: "cat", name: "kirra", image: "/img/pets/4.png" },
  { id: 5, category: "hamster", name: "dinno", image: "/img/pets/5.png" },
  { id: 6, category: "parrot", name: "paco", image: "/img/pets/6.png" },
  { id: 7, category: "parrot", name: "pavo", image: "/img/pets/7.png" },
  { id: 8, category: "cat", name: "ynna", image: "/img/pets/8.png" },
  { id: 9, category: "lion", name: "hera", image: "/img/pets/9.png" },
  { id: 10, category: "bird", name: "dimmy", image: "/img/pets/10.png" },
  { id: 11, category: "dog", name: "jasper", image: "/img/pets/11.png" },
  { id: 12, category: "hamster", name: "syu", image: "/img/pets/12.png" },
];

const Pets = () => {
  const [petDetail, setPetDetail] = useState(dataPets[0]);
  const [petIndex, setPetIndex] = useState(0);

  const getPetDetails = (id) => {
    const pet = dataPets.find((pet) => pet.id === id);
    setPetDetail(pet);
  };

  return (
    <section className="py-6 overflow-hidden bg-center bg-pets">
      <div className="flex flex-col lg:flex-row">
        {/* Badge */}
        <div className="hidden xl:flex xl:w-[30%] xl:pl-[160px]">
          <Image src={Badge} alt="Badge Image" width={230} height={227} />
        </div>

        {/* Pets */}
        <div className="flex flex-col flex-1 lg:flex-row">
          {/* Pet Detail */}
          <div className="flex flex-col justify-center items-end lg:w-[30%] pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white">
              {/* Category */}
              <div className="capitalize text-[32px]">{petDetail.category}</div>

              {/* Name */}
              <div className="uppercase text-[17px] mb-1">
                ({petDetail.name})
              </div>

              {/* Image */}
              <div className="mx-auto border-4 border-white rounded-full lg:mx-0 h-[150px] w-[150px]">
                <Image
                  src={petDetail.image}
                  alt="Pet Image"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>

          {/* Pet List */}
          <div className="relative flex flex-1 items-center lg:w-[60%]">
            <div className="flex flex-wrap justify-center gap-4 lg:justify-end lg:-mr-6">
              {dataPets.map((pet, index) => (
                <div
                  className="relative cursor-pointer"
                  key={pet.id}
                  onClick={() => {
                    getPetDetails(pet.id);
                    setPetIndex(index);
                  }}
                >
                  {/* Overlay */}
                  <div
                    className={`${
                      petIndex === index
                        ? "border-2 border-white"
                        : "bg-black/40"
                    } absolute w-full h-full rounded-full`}
                  ></div>

                  <Image
                    src={pet.image}
                    alt="Pet Image"
                    width={95}
                    height={95}
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
