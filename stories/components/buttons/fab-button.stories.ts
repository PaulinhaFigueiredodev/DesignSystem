import type { Meta, StoryObj } from '@storybook/web-components';

import '../../../components/button/fab-button/fab-button';

const meta: Meta = {
  title: 'Components/Buttons/Fab Button',
  component: 'fab-button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido no FAB',
    },
  },
};

export default meta;

type Story = StoryObj<{
  label: string;
}>;

export const Default: Story = {
  args: {
    label: 'Salvar',
  },
  render: ({ label }) => `
    <fab-button label="${label}"></fab-button>
  `,
};
