/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1200px": "1200px",
        "420px": "420px",
        "300px": "300px",
      },
      padding: {
        "125px": "125px",
      },
    },
  },
  corePlugins: {
    preflight: false, // 添加这一行
  },
  plugins: [],
};
