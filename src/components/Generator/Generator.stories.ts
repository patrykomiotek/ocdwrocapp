import type { Meta, StoryObj } from '@storybook/react-vite';
import { Generator } from './Generator';

const meta = {
  title: 'Components/Button',
  component: Generator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Generator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Generator: Story = {};
