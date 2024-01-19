import Button from "../components/button";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlinedButton: Story = {
  args: {
    label: "Click me",
    variant: "outlined",
    style: {
      color: "green",
    },
  },
};

export const TextButton: Story = {
  args: {
    label: "Click me",
    variant: "text",
    color: "blue"
  },
};

export const ContainedButton: Story = {
  args: {
    type: "submit",
    label: "Click me",
    style: {
      backgroundColor: "green",
      color: "white",
    },
    variant: "contained",
    size: "large"
  },
};