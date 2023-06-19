// webpack.config.js
export default module.exports = {
  //see this 👇
  // trigger HMR - Hot module reload on dev env, not production
  // similar to fast refresh or hot reloader
  devServer: {
    hot: true,
  },
};
