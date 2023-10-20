import { InputComponent } from './../../app/input/input.component';
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Basic Components/InputComponent',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [],
    }),
  ],
  args: {},
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
  },
};