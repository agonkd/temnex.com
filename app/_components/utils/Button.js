"use client";

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled = false,
  onClick,
  children,
  color = "blue-500", // Default color if not specified
  className = "",
  ...props
}) => {
  // Define base styles
  const baseStyles =
    "focus:outline-none rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2";

  // Define variant styles with dynamic color support
  const variantStyles = {
    primary: "bg-primary hover:bg-blend-normal text-white font-light",
    transparent: `border-2 box-content`,
    secondary: "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
  };

  // Define size styles
  const sizeStyles = {
    small: "px-6 py-2 text-sm",
    medium: "px-8 py-3 text-base",
    large: "w-full py-4 text-lg",
    full: "w-full py-4",
  };

  // Combine styles
  const buttonClassNames = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    {
      "cursor-not-allowed": disabled || isLoading,
      [`border-${color}`]: variant === "transparent",
      [`text-${color}`]: variant === "transparent",
      [`hover:bg-${color}`]: variant === "transparent",
    },
    className
  );

  // Handle click events
  const handleClick = (event) => {
    if (!isLoading && !disabled) {
      onClick && onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={buttonClassNames}
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...props}
      style={variant === "transparent" ? { borderColor: color, color } : {}}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg
            className="w-5 h-5 animate-spin text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path d="M4 12a8 8 0 01.588-2.976L4 12l4 4c-2.95-1.044-5.388-3.514-6.788-6.804C1.948 7.167 4 9.76 4 12z" />
          </svg>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "transparent"]),
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.string, // Color prop for transparent variant
  className: PropTypes.string,
};

export default Button;
