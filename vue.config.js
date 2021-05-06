module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/variables.sass";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/cli-version/" : "/",
};
