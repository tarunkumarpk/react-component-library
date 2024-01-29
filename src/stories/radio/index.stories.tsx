import Radio from "@/components/radio";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Radio",
  component: Radio,
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
export const RedColorRadio: Story = {
  args: {
    name: "name",
    value: "value",
    color: "red",
    checked: true,
  },
};
