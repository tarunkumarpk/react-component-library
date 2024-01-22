import TextField from "@/components/textField";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "TextField",
  component: TextField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    label: "First Name",
    placeholder: "First Name",
    type: "text",
    required: true,
  },
};

export const EmailValid: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
    value:"tar@g.com",
    type: "email",
    required: true,
  },
};
export const EmailInvalid: Story = {
  args: {
    ...EmailValid.args,
    value:"tar",
  },
};

export const InputPassword: Story = {
  args: {
    label: "Password",
    placeholder: "Password",
    type: "password",
    required: true,
  },
};
