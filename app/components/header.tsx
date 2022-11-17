import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";


export const AppHeader = () => {
  // Hooks
  const [closed, setClosed] = useState(true);

  // Handlers
  const onClose = () => {
    setClosed(true);
  };

  const onToggle = () => {
    setClosed(!closed);
  };

  return (
    <header
      className={classNames(
        "header hidden overflow-hidden print:hidden md:block",
        { closed }
      )}
    >
        <nav className="flex h-full flex-col font-font-monospace justify-between md:flex-row mx-12">
          <NavLink
            className="header-link"
            onClick={onClose}
            prefetch="intent"
            to="/"
          >
            About
          </NavLink>
          <NavLink
            className="header-link"
            onClick={onClose}
            prefetch="intent"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            className="header-link"
            onClick={onClose}
            prefetch="intent"
            to="/resume"
          >
            Resume
          </NavLink>
        </nav>
    </header>
  );
};