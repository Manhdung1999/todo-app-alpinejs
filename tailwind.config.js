module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js}","*.html"],
  theme: {
    extend: {},
    screens: {
      'mobile': '320px',
      'tablet' : '620px',
      'desktop': '769px',
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'purple': '#3f3cbb',
    //   'midnight': '#121063',
    //   'metal': '#565584',
    //   'tahiti': '#3ab7bf',
    //   'silver': '#ecebff',
    //   'bubble-gum': '#ff77e9',
    //   'bermuda': '#78dcca',
    //   'violet' :  '#8f4df8'
    // },
  },
  plugins: [],
}
