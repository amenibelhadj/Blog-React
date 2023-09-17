import React from "react";

const sizeClasses = {
  txtMontserratBold16: "font-bold font-montserrat",
  txtMontserratRomanLight16Bluegray900: "font-light font-montserrat",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratBold16WhiteA700: "font-bold font-montserrat",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtMontserratRomanBold40: "font-bold font-montserrat",
  txtMontserratBold18: "font-bold font-montserrat",
  txtGilroyBold40: "font-bold font-gilroy",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanLight16: "font-light font-montserrat",
  txtMontserratRomanLight18: "font-light font-montserrat",
  txtMontserratBold40: "font-bold font-montserrat",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
