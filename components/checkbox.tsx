"use client";

import { useState } from "react";

interface CheckboxProps {
  required?: boolean;
  text: string;
  isError?: boolean;
}
export const Checkbox = ({
  required = false,
  text,
  isError = false,
}: CheckboxProps) => {
  return (
    <div className="flex pt-2">
      <div className="lg:w-48"></div>
      <div>
        <div className="flex">
          <input type="checkbox" className="ml-2 h-5 w-5 cursor-pointer" />
          <p className="ml-2 font-normal">{text}</p>
        </div>
        {isError && (
          <p className="text-red-500 text-xs text-left ml-3 ">
            Некоректні данні
          </p>
        )}
      </div>
    </div>
  );
};
