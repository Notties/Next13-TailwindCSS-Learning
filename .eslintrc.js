module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/no-unescaped-entities": 0,
    "eslintreact/no-danger": 0,
    "react/tsx-max-props-per-line": 0,
    "react/tsx-first-prop-new-line": 0,
    "no-console": 0,
    "tsx-a11y/label-has-associated-control": 0,
    "no-nested-ternary": 0,
    "consistent-return": 0,
    "no-alert": 0,
    "react/tsx-no-constructed-context-values": 0,
    "import/extensions": 0,
    "react/prop-types": 0,
    "linebreak-style": 0,
    "react/state-in-constructor": 0,
    "import/prefer-default-export": 0,
    "react/react-in-tsx-scope": "off",
    "react/tsx-props-no-spreading": "off",
    "tsx-a11y/no-noninteractive-element-interactions": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "max-len": [2, 1050],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"],
      },
    ],
    "object-curly-newline": 0,
    "react/tsx-filename-extension": 0,
    "react/tsx-one-expression-per-line": 0,
    "tsx-a11y/click-events-have-key-events": 0,
    "tsx-a11y/alt-text": 0,
    "tsx-a11y/no-autofocus": 0,
    "tsx-a11y/no-static-element-interactions": 0,
    "react/no-array-index-key": 0,
    "tsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
  },
};
