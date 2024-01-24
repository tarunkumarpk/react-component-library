import Modal from "@/components/modal";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    content: <p>hi hello</p>,
    isOpen: true,
    onClose: () => {
      console.log("click");
    },
    closeButton: true,
  },
};
