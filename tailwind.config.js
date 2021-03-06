module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        title: "5rem",
        subtitle: "3rem",
        lgText: "2rem",
      },
      colors: {
        myPurple: "#414BB2",
        myOrange: "#E09900",
        myGreen: "#7DC5BA",
        myLightGreen: "#8FD14F",
        paleLogo: "#9DCCEE",
        darkLogo: "#2C398F",
        border: "#D1D1D1",
        myLightBlue: "#2D9BF0",
        myRedAlert: "#E83866",
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus',"group-hover"],
      width: ["responsive", "hover", "focus","group-hover"],
      height: ["responsive", "hover", "focus","group-hover"],
      visibility: ["responsive", "hover", "focus","group-hover"],
    },
  },
  plugins: [],
};
