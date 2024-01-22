import Button from "../components/button";
import type { StoryObj } from "@storybook/react";

const colors = [
  "aqua",
  "black",
  "blue",
  "gray",
  "green",
  "lime",
  "maroon",
  "purple",
  "red",
  "silver",
  "white",
  "yellow",
];

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    color: {
      options: colors,
      control: { type: "select" },
    },
    backgroundColor: {
      options: colors,
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "select" },
    },
  },
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
    color: "blue",
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
    size: "large",
  },
};
