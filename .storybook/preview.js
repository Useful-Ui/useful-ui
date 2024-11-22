//  import('@storybook/react').Preview
import "../src/index.css";
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};
//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
// export const parameters = {
//     actions: { argTypesRegex: "^on[A-Z].*" },
// };
export default preview;

