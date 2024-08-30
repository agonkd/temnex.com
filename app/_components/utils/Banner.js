import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Banner = ({
  title = "Banner",
  subtitle = "Banner subtitle",
  background = "bg-blue-500",
  backgroundImage = "",
  styles = "",
  titleStyles = "",
  subtitleStyles = "",
  children,
  ...props
}) => {
  const mergedStyles = twMerge(
    "w-full px-6 sm:px-12 md:px-24 md:py-16 py-8 flex items-center text-white bg-cover bg-center rounded-xl relative overflow-hidden",
    background,
    styles
  );

  return (
    <div
      className={mergedStyles}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 space-y-2">
        <p className={`h5 nasalization ${titleStyles}`}>{title}</p>
        <p className={`text-sm sm:text-base font-light ${subtitleStyles}`}>
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  background: PropTypes.string,
  backgroundImage: PropTypes.string,
  styles: PropTypes.string,
  titleStyles: PropTypes.string,
  subtitleStyles: PropTypes.string,
  children: PropTypes.node,
};

export default Banner;
