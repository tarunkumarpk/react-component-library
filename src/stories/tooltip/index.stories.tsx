import Tooltip from "@/components/tooltip";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  args: {
    children: <div>Hover Me</div>,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "tooltip",
  },
};
export const ArrowToolTip: Story = {
  args: {
    title: "tooltip",
    arrow: true,
  },
};
export const TopArrowToolTip: Story = {
  args: {
    title: "tooltip",
    placement: "top",
    arrow: true,
  },
};
export const BottomArrowToolTip: Story = {
  args: {
    title: "tooltip",
    placement: "bottom",
    arrow: true,
  },
};
export const LeftArrowToolTip: Story = {
  args: {
    title: "tooltip",
    placement: "left",
    arrow: true,
  },
};
export const RightArrowToolTip: Story = {
  args: {
    title: "tooltip",
    placement: "right",
    arrow: true,
    backGroundColor: "green",
  },
};
export const greenToolTip: Story = {
  args: {
    title: "tooltip",
    placement: "right",
    arrow: true,
    backGroundColor: "green",
  },
};
