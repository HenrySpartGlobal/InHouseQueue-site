import Link from "next/link";
import type { AnchorHTMLAttributes, MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variantStyles;

  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  disabled?: boolean;
};

// styles
const baseStyles =
  "px-7 py-3 rounded-lg text-white hover:-translate-y-1 transition-all ease-out";

// variants
const variantStyles = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  dark: "bg-black",
  gray: "bg-background-accent",
};

export default function Button(props: ButtonProps) {
  // build the styles
  const buttonStyles = twMerge(
    baseStyles,
    variantStyles[props.variant || "primary"],
    props.className
  );

  // if the button has an href, render an anchor tag
  if (props.href) {
    // use a router link if the href is a relative path
    if (props.href.startsWith("/")) {
      return (
        <Link className={buttonStyles} href={props.href}>
          {props.children}
        </Link>
      );
    }

    // otherwise render an anchor tag
    return (
      <a className={buttonStyles} href={props.href} target={props.target}>
        {props.children}
      </a>
    );
  }

  // otherwise render a button
  return (
    <button
      className={buttonStyles}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
