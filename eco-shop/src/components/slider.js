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
          <div className="absolute space-y-8 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-3xl font-bold">
              Bienvenue à notre boutique
            </h1>
            <p className="text-white w-2/4 text-center"> 
              Explorez une sélection exclusive de produits cosmétiques
              écologiques, soigneusement choisis pour respecter votre corps et
              l'environnement. Laissez-vous inspirer par la beauté au naturel.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-full">
          <img src={slide2} alt="..." className="object-cover w-full h-full" />
          <div className="w-1/3 h-1/2 ml-20 absolute inset-0 flex-col self-center content-center bg-green-700 bg-opacity-50 space-y-6">
            <h1 className="text-white text-3xl font-bold mx-2">
              Huiles essentiels et végétales 100% bio
            </h1>
            <button className="bg-white w-48 text-green-700 p-2 mx-2 hover:bg-green-900 hover:text-white">
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
          <div className="w-1/2 h-1/3 absolute inset-0 flex justify-center items-center place-self-center bg-green-50 bg-opacity-50 rounded-xl">
            <div className="text-center mx-4">
              <h1 className="text-green-700 text-3xl font-bold mb-4">
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
