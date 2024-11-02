import imgHygiene from '../assets/hygiène.jpg';
import imgSoins from '../assets/soin-visage.jpg';
import imgHuiles from '../assets/huile-essentielle.jpg'

const callouts = [
  {
    name: "Huiles essentielles",
    description: "Huiles 100% bio faites à partir de plantes naturelles",
    imageSrc: imgHuiles,
    imageAlt:
      "Huiles essentielles",
    href: "#",
  },
  {
    name: "Soin du Visage",
    description: "Soins hydratantes riches et naturelles pour nourrir la peau en profondeur",
    imageSrc: imgSoins,
    imageAlt:
      "Soin du Visage",
    href: "#",
  },
  {
    name: "Hygiène",
    description: "Produits fabriqués à partir d'ingrédients naturels",
    imageSrc: imgHygiene,
    imageAlt: "Hygiène",
    href: "#",
  },
];

export default function Category() {
  return (
    <div className="bg-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none lg:py-16">
          <h2 className="text-2xl font-bold text-green-900">Choisissez par catégories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
