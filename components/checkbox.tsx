"use client";

import { useState } from "react";

interface CheckboxProps {
  required?: boolean;
  text: string;
}
export const Checkbox = ({ required = false, text }: CheckboxProps) => {
  return (
    <div className="flex pt-2">
      <div className="lg:w-48"></div>
      {/* {required && <span className="text-red-500">*</span>} */}
      <input type="checkbox" className="ml-2 h-5 w-5 cursor-pointer" />
      <p className="ml-2 font-normal">{text}</p>
    </div>
  );
};
