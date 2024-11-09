import React from "react";
import { Carousel } from "flowbite-react";
import slide1 from "../assets/banner-2.png";
import slide2 from "../assets/organic-hair-care.jpg";
import slide3 from "../assets/skin-hair-care-with-plant.jpg";
import sale from "../assets/icons8-sale-100.png";

export default function MySlider() {
  return (
    <div className="my-1 h-[32rem] relative ">
      <Carousel pauseOnHover>
        {/* Slide 1 */}
        <div className="relative h-full">
          <img src={slide1} alt="..." className="object-cover w-full h-full" />
          <div className="w-3/4 lg:w-1/2 h-1/2 absolute space-y-8 inset-0 flex flex-col justify-center items-center place-self-center bg-green-700 bg-opacity-50">
            <div className="text-center mx-4 space-y-6">
              <h1 className="text-white text-xl lg:text-3xl font-bold">
                Bienvenue à notre boutique
              </h1>
              <p className="text-white text-center"> 
                Explorez une sélection exclusive de produits cosmétiques
                écologiques, soigneusement choisis pour respecter votre corps et
                l'environnement. Laissez-vous inspirer par la beauté au naturel.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-full">
          <img src={slide2} alt="..." className="object-cover w-full h-full" />
          <div className="w-1/2 h-1/3 lg:w-1/3 lg:h-1/2 ml-12 lg:ml-20 absolute inset-0 flex-col self-center content-center bg-green-700 bg-opacity-50 space-y-6">
            <h1 className="text-white text-xl lg:text-3xl font-bold lg:ml-6 ml-3">
              Huiles essentiels et végétales 100% bio
            </h1>
            <button className="bg-white w-28 lg:w-48 text-green-700 p-2 lg:ml-6 ml-3 hover:bg-green-900 hover:text-white">
              Découvrir
            </button>
          </div>
          <div className="absolute inset-0 flex justify-end mr-52">
            <img src={sale} alt="..." className="w-40 h-40 animate-bounce" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-full">
          <img
            src={slide3}
            className="object-cover w-full h-full"
          />
          <div className="w-3/4 h-1/2 lg:w-1/2 lg:h-1/3 absolute inset-0 flex justify-center items-center place-self-center bg-green-50 bg-opacity-50">
            <div className="text-center mx-4">
              <h1 className="text-green-700 text-xl lg:text-3xl font-bold mb-4">
                Routine Skin Care complet à base de plantes naturelles
              </h1>
              <button className="bg-white w-48 text-green-700 p-2 mx-2 hover:bg-green-900 hover:text-white">
                Achetez maintenant !
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
