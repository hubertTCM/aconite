module.exports = {
  babelrc: false,
  env: {
    development: {
      presets: [
        ["@babel/env", { useBuiltIns: "usage", corejs: 3 }],
        "@babel/react",
        ["@babel/typescript", { isTSX: true, allExtensions: true }],
      ],
      plugins: [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "react-refresh/babel",
      ],
    },
  },
};
