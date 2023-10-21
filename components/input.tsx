"use strict";
import { Leaf } from "lucide";
import { CheckCheck } from "lucide-react";
import { useState } from "react";

interface InputProps {
  type: "text" | "number";
  className?: string;
  required?: boolean;
  description?: string;
}
export const Input = ({
  type,
  className,
  description,
  required = false,
}: InputProps) => {
  const [isFullfiled, setIsFullfiled] = useState(false);
  return (
    <div className="flex mt-2">
      <div className="lg:w-[180px] hidden lg:block text-left">{description}</div>
      <div className="flex justify-start items-center">
        {required && (
          <span className={isFullfiled ? "text-green-500" : "text-red-500"}>
            *
          </span>
        )}
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
      </div>
    </div>
  );
};
