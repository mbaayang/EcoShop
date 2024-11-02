import { useForm } from "react-hook-form"

export default function Contact() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  return (
    <div className="flex place-content-center justify-center bg-green-50 py-8 mt-1">
    <form onSubmit={handleSubmit()} className="w-3/5 bg-white px-8 py-4 rounded-lg">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-base/7 font-semibold text-green-700">
            N'hesitez pas à nous écrire
          </h1>
          <p className="mt-1 text-sm/6 text-gray-600">
            Formulaire de contact
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Prénom
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm/6"
                  {...register("first-name", { required: true })}
                />
                {errors["first-name"] && <span className="text-red-500 text-xs">Ce champ est requis</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm/6"
                  {...register("last-name", { required: true })}
                />
                {errors["last-name"] && <span className="text-red-500 text-xs">Ce champ est requis</span>}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm/6"
                  {...register("email", { 
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                  })}
                />
                {errors.email?.type === "required" && <span className="text-red-500 text-xs">Ce champ est requis</span>}
                {errors.email?.type === "pattern" && <span className="text-red-500 text-xs">Adresse email invalide</span>}
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Votre message
              </label>
              <div className="mt-2">
                <textarea
                id="message"
                name="message"
                type="text"
                className="block h-32 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm/6"
                {...register("message", { required: true })}
                />
                {errors["message"] && <span className="text-red-500 text-xs">Ce champ est requis</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-green-500 px-12 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
        >
          Envoyer
        </button>
      </div>
    </form>
    </div>
  );
}
