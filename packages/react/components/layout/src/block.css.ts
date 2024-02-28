import { variables } from "@lsj/themes";
import { style } from "@vanilla-extract/css";

export const blockStyle = style({
  width: "100px",
  height: "100px",
  backgroundColor: variables.colors.$scale.blue[500],
});
