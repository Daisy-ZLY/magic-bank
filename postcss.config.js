module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 32, //The root element font size,2倍屏为32，1倍屏为16
      propList: ["*"],
      minPixelValue: 12
    }
  }
};
