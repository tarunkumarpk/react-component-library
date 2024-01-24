import CardContent from "../../components/card/cardContent";
import type { StoryObj } from "@storybook/react";

const meta = {
  Content: "CardContent",
  component: CardContent,
  argTypes: {
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CardContentStory: Story = {
  args: {
    children: "Content",
  },
};