import Checkbox from "@/components/checkbox";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "checkbox",
  component: Checkbox,
  args: {
    onChange: () => console.log("clicked"),
    checked: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "name",
    value: "value",
  },
};
export const RedColorCheckBox: Story = {
  args: {
    name: "name",
    value: "value",
    color: "red",
    checked: true,
  },
};
