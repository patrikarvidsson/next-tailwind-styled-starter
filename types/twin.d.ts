import "twin.macro";
import { css as cssProperty, CSSProp } from "styled-components";

declare module "twin.macro" {
  const css: typeof cssProperty;
  const styled: typeof styledImport;
  const theme: any;
}

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    tw?: string;
    css?: CSSProp;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      tw?: string;
      css?: CSSProp;
    }
  }
}
