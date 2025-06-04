import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Heading';

const meta = {
  title: 'UI/Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Lorem ipsum sit dolor',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Lorem ipsum sit dolor',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Lorem ipsum sit dolor',
  },
};
