import Button from "../components/button";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    label: "Click me",
    onClick: () => {},
    variant: "outlined",
  },
};

export const BlueBackground: Story = {
  args: {
    label: "Click me",
    onClick: () => {},
    style: {
      backgroundColor: "green",
      color: "white",
    },
    variant: "outlined",
    size: "large"
  },
};