import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    chromatic: { viewports: [500] },
  },
  decorators: [],
};

export default preview;
