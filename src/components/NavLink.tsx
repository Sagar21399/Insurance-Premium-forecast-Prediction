import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const navItems = [
  // { name: "Platform", path: "/platform" },
  // { name: "Models", path: "/models" },
  // { name: "Docs", path: "/docs" },
  // { name: "Pricing", path: "/pricing" },
  // { name: "Adaptive Learning", path: "/adaptive-learning" },
];

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
