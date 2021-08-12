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
            height: {
                event: "38rem",
            },
            animation: {
                fade: "fadeIn ease 3s",
                fadeFast: "fadeIn ease 0.5s",
                fadeMid: "fadeIn ease 1.5s",
                fadeRight: "fadeInRight ease-in 0.5s",
                fadeTop: "fadeInTop ease-in 0.5s",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                fadeInRight: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-200px, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0, 0)",
                    },
                },
                fadeInTop: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(0, -100px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0, 0)",
                    },
                },
            },
            transitionDuration: {
                2000: "2000ms",
                1500: "1500ms",
            },
            boxShadow: {
                buttonShadow: "5px 5px 10px rgba(0, 0, 0, 0.4)",
                cardShadow: "5px 5px 20px rgba(0, 0, 0, 0.15)",
            },
            screens: {
                lg: "1100px",
            },
        },
    },
    variants: {
        extend: {
            animation: ["motion-safe"],
        },
    },
    plugins: [],
};
