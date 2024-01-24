import Card, { CardAction, CardContent, CardTitle } from "../../components/card";
import type { StoryObj } from "@storybook/react";
import { Button } from "@/components";

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
  title: "Card",
  component: Card,
  argTypes: {
    backgroundColor: {
      options: colors,
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OulinedCard: Story = {
  args: {
    contentPosition: "center",
    children: <h1>Card</h1>,
    variant: "outlined",
  },
};

export const ContainedCard: Story = {
  args: {
    contentPosition: "center",
    children: "Card",
    variant: "contained",
  },
};

export const CardStory: Story = {
  render: () => (
    <Card>
      <>
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardAction><Button label={"Learn More"}></Button></CardAction>
      </>
    </Card>
  ),
};