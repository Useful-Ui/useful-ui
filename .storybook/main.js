/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ["../src/components/**/*.stories.js"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-onboarding",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    staticDirs: ["../public"],
};
export default config;
