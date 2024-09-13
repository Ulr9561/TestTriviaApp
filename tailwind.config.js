/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "/src/*.{ts,tsx}"],
    mode: "jit",
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {},
    },
    plugins: [],
};
