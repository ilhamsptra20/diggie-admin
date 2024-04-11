/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            padding: "1rem",
            center: true,
        },
        extend: {
            colors: {
                primary: "#081A51",
                secondary: "rgba(255,255,255,0.17)",
            },
        },
    },
    plugins: [],
}
