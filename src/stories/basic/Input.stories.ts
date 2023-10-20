import { InputComponent } from './../../app/input/input.component';
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Basic Components/InputComponent',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [FormsModule, ReactiveFormsModule],
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
    value: '', 
    disabled: false,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
        <form>
          <app-input-test [value]="value" [disabled]="disabled"></app-input-test>
          <!-- Adding an error message display in the story -->
          <div *ngIf="!value && value !== null">
            <small class="error-text">This field is required.</small>
          </div>
        </form>
      `,
  }),
};