import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0D83EF",
            },
            backgroundImage: {
                background: "linear-gradient(180deg, rgba(13, 131, 239, 0.26) -50%, rgba(0, 131, 253, 0) 50%)",
                gradient: "linear-gradient(129deg, #0D83EF 0%, #0D83EF 100%)",
            },
            keyframes: {
                spin: {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "spin-slow": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "spin-slower": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "spin-slowest": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
            },
            animation: {
                spin: "spin 1s linear infinite",
                "spin-slow": "spin 4s linear infinite",
                "spin-slower": "spin 6s linear infinite",
                "spin-slowest": "spin 8s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
