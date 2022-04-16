import React from "react";

const Tab = React.forwardRef(({ ...props }, ref) => {
  console.log(props);
  return (
    <button
      {...props}
      className={`${props.className} ${
        props.selected ? "rn___tab___selected" : ""
      }`}
      ref={ref}
    >
      {props.children}
    </button>
  );
});
export default Tab;
