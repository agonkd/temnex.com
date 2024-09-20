"use client";

import React from "react";
import PropTypes from "prop-types";

const Button = ({
    type = "button",
    variant = "primary",
    size = "medium",
    isLoading = false,
    disabled = false,
    onClick,
    children,
    className = "",
    ...props
}) => {
    // Define base styles
    const baseStyles =
        "focus:outline-none rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2";

    // Define variant styles
    const variantStyles = {
        primary: "bg-primary text-white font-light",
        transparent:
            "border-2 box-content border-primary text-primary hover:bg-primary hover:text-white",
        secondary: "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
    };

    // Define size styles
    const sizeStyles = {
        small: "px-4 py-2",
        medium: "px-6 py-3",
        large: "px-8 py-4",
        full: "w-full py-3",
    };

    // Combine styles
    const buttonClassNames = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]
        } ${disabled ? "cursor-not-allowed" : ""} ${className}`;

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
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
