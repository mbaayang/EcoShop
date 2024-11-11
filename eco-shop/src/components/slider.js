import React from "react";
import { Carousel } from "flowbite-react";
import slide1 from "../assets/banner-2.png";
import slide2 from "../assets/organic-hair-care.jpg";
import slide3 from "../assets/skin-hair-care-with-plant.jpg";
import sale from "../assets/icons8-sale-100.png";

export default function MySlider() {
  return (
    <div className="my-1 h-[32rem] relative">
      <Carousel pauseOnHover>
        {/* Slide 1 */}
        <div className="relative h-full">
          <img src={slide1} alt="..." className="object-cover w-full h-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 lg:w-1/2 h-auto space-y-8 flex flex-col items-center bg-green-700 bg-opacity-50 p-4">
            <div className="text-center space-y-6">
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
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2/3 lg:w-1/3 h-auto flex flex-col bg-green-700 bg-opacity-50 p-4 ml-6 lg:ml-20 space-y-6">
            <h1 className="text-white text-xl lg:text-3xl font-bold ml-3 lg:ml-6">
              Huiles essentiels et végétales 100% bio
            </h1>
            <button className="bg-white w-28 lg:w-48 text-green-700 p-2 ml-3 lg:ml-6 hover:bg-green-900 hover:text-white">
              Découvrir
            </button>
          </div>
          <div className="absolute top-20 right-1 lg:top-1/4 lg:right-52 transform -translate-x-1/2 -translate-y-1/2">
            <img src={sale} alt="Sale Icon" className="w-32 h-32 animate-bounce" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-full">
          <img src={slide3} alt="..." className="object-cover w-full h-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 lg:w-1/2 h-auto flex flex-col items-center bg-green-50 bg-opacity-50 p-4 space-y-4">
            <div className="text-center">
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
