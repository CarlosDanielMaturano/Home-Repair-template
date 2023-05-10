module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                oswald:   ["Oswald", "sans-serif"],
                raleway:  ["Raleway","sans-serif"],
                pt:       ["PT Sans", "sans-serif"]
            },
            colors: {
                yellow: '#f1c50e',
                red: "#e5244f",
                gray: "#b3b3b3",
                light_gray: "#808080",
                dark_gray: "#454545",
                cement_gray: "#e5e5e5",
                black: "#111111",
                secondary_black: "#1a1a1a",
            },
            backgroundImage: {
                gfb:    "url('./../assets/gfb.jpg')",
                bfmin: "url('./../assets/bfmin.jpg')",
                fffmin: "url('./../assets/fffmin.jpg')",
            }
        },
    },
    plugins: [],
}
