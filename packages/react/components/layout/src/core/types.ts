import { variables } from "@lsj/themes";
import { StyleSprinkles } from "./style.css";

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicAttributes, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElemntProps = AsProps & ElementProps;

export type ColorProps = {
  color: keyof typeof variables.colors.$scale & string;
  background: keyof typeof variables.colors.$scale & string;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps; // StyleSprinkles type 뽑아내기
