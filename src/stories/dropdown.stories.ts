import Dropdown from "@/components/dropdown";
import { StoryObj } from "@storybook/react";

const meta = {
    title: "Dropdown",
    component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: ["option1", "option2"],
    }
};