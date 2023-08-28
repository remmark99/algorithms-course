module.exports = {
    extends: ["airbnb", "airbnb-typescript", "prettier"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    root: true,
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                endOfLine: "auto",
            },
        ],
        // Since this is the only easy way of io on node
        "no-console": "off",
    },
};
