const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            flowbite.content(),
  ],
  theme: {
    extend: {
      height: {
        '584': '32rem',
      }
    },
  },
  plugins: [flowbite.plugin()],
}

