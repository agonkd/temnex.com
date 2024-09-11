"use client";

import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const sizeStyles = {
  small: "px-8 py-4", // Padding for smallest screens (mobile)
  medium: "px-8 py-4 md:px-12 md:py-6", // Padding for medium screens (tablets)
  large: "px-8 py-4 md:px-16 md:py-8 lg:px-20 lg:py-10", // Padding for large screens (desktops)
  largest: "px-8 py-4 md:px-20 md:py-12 lg:px-24 lg:py-14 xl:px-32 xl:py-16", // Padding for extra-large screens (large desktops)
};

const Section = ({
  children,
  id = "",
  size = "largest",
  className = "",
  ...props
}) => {
  const mergedClasses = twMerge(
    "relative w-full", // Default positioning class
    sizeStyles[size], // Apply size-based styles
    className // Allow overriding of size-based styles by placing this first
  );

  return (
    <section id={id} aria-label={id} className={mergedClasses} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large", "largest"]), // Corrected size options
  className: PropTypes.string,
};

Section.defaultProps = {
  id: "",
  size: "largest", // Corrected default size
  className: "",
};

export default Section;
