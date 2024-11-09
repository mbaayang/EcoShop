export default function CategorySidebar() {
  return (
    <div className="px-6 py-2 bg-white shadow">
    <h2 className="text-2xl font-bold text-green-700 my-4">Catégories</h2>
      <nav className="space-y-1" aria-label="Sidebar">
        <a
          href="#"
          className="bg-green-50 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
          aria-current="page"
        >
          <span className="text-lg truncate"> Soins de visage </span>

          <span className="bg-orange-400 text-white ml-auto inline-block py-0.5 px-2 text-xs rounded-full">
            {" "}
            5{" "}
          </span>
        </a>

        <a
          href="#"
          className="text-gray-600 hover:bg-green-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
        >
          <span className="text-lg truncate"> Huiles essentielles </span>

          <span className="bg-orange-400 text-white group-hover:bg-green-600 ml-auto inline-block py-0.5 px-2 text-xs rounded-full">
            {" "}
            19{" "}
          </span>
        </a>

        <a
          href="#"
          className="text-gray-600 hover:bg-green-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
        >
          <span className="text-lg truncate"> Hygiène </span>

          <span className="bg-orange-400 text-white group-hover:bg-green-600 ml-auto inline-block py-0.5 px-2 text-xs rounded-full">
            {" "}
            20+{" "}
          </span>
        </a>
      </nav>
    </div>
  );
}
