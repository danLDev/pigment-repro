import { Meta, StoryObj } from '@storybook/react';
import { DummyComponent, DummyComponentProps } from './dummy-component';

const meta: Meta = {
  title: 'DummyComponent',
  component: DummyComponent,
  argTypes: {},
  decorators: [],
};
export default meta;

type Story = StoryObj<typeof DummyComponent>;

const defaultArgs: DummyComponentProps = {};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
