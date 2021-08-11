module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                customYellow: "#FFDB26",
            },
            fontFamily: {
                titilumWeb: ["Titillium Web", "sans-serif"],
            },
            fontSize: {
                "10xl": ["180px"],
            },
            letterSpacing: {
                widest: ".5em",
            },
            animation: {
                fade: "fadeIn ease 3s",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            transitionDuration: {
                2000: "2000ms",
                1500: "1500ms",
            },
            boxShadow: {
                buttonShadow: "5px 5px 10px rgba(0, 0, 0, 0.4)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
