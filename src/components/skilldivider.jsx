import React from "react";
export function Skilldivider(props) {
  const {title} = props
  return (
    <div className=" font-medium bg-blue-400/20 p-4 shadow-xl rounded-xl col-span-full text-blue-200">
      {title}
    </div>
  );
}
