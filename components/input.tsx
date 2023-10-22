"use strict";
import { Check } from "lucide-react";
import { useState } from "react";

interface InputProps {
  type: "text" | "number";
  className?: string;
  required?: boolean;
  description?: string;
  isError?: boolean;
}
export const Input = ({
  type,
  className,
  description,
  required = false,
  isError = false,
}: InputProps) => {
  const [isFullfiled, setIsFullfiled] = useState(false);
  return (
    <div className="flex mt-2">
      <div className="lg:w-[180px] hidden lg:block text-left">
        {description}
      </div>
      <div className="flex justify-start items-center">
        {!isFullfiled && required ? (
          <span className={"text-red-500 w-4 h-4"}>*</span>
        ) : (
          <Check className="w-5 h-5 text-green-500" />
        )}
        <div>
          <p className="text-left lg:hidden font-normal text-sm ml-2">
            {description}
          </p>
          <input
            type={type}
            onChange={(e) => {
              if (type === "number") {
                if (e.target.value.length > 0) {
                  setIsFullfiled(true);
                }
                if (e.target.value.length === 0) {
                  setIsFullfiled(false);
                } else {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }
              } else {
                if (e.target.value.length > 0) {
                  setIsFullfiled(true);
                } else {
                  setIsFullfiled(false);
                }
              }
            }}
            className=" border-gray-400 rounded-sm px-2 border-solid border-2 outline-none ml-2 font-normal h-10"
          />
          {isError && (
            <p className="text-red-500 text-xs text-left ml-3 mt-1">
              Некоректні данні
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
