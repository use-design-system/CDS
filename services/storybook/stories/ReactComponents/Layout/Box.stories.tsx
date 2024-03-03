import "@lsj/react-components-layout/style.css";
import { Box as _Box } from "@lsj/react-components-layout";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BlockStory = {
  args: {
    as: "button",
    padding: "20",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
