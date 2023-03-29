import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      style={buttonStyle}
      {...props}
      disabled={!IS_BROWSER || props.disabled}
    />
  );
}

const buttonStyle = `
  background-color: #0022ff78;
`;
