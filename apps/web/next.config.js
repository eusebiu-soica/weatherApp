module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native-svg": require.resolve("react-native-svg-web"),
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: [
    //     "style-loader",
    //     "css-loader",
    //   ],
    // });

    return config;
  },
};
