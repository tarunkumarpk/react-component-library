import CardAction from "../../components/card/cardAction";
import type { StoryObj } from "@storybook/react";

const meta = {
  Action: "CardAction",
  component: CardAction,
  argTypes: {
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CardActionStory: Story = {
  args: {
    children: "Action",
  },
};