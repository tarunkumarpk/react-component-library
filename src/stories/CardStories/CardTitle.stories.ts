import CardTitle from "../../components/card/cardTitle";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "CardTitle",
  component: CardTitle,
  argTypes: {
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CardTitleStory: Story = {
  args: {
    children: "Title",
  },
};