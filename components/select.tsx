"use client";
import classNames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";

interface SelectProps {
  options: any;
  required?: boolean;
  className?: string;
  description: string;
  disabled?: boolean;
  isError?: boolean;
  setSelectedBrand?: Dispatch<SetStateAction<string>>;
}
export const Select = ({
  options,
  required = false,
  className,
  description,
  disabled = false,
  setSelectedBrand,
  isError = false,
}: SelectProps) => {
  const [isFullfiled, setIsFullfiled] = useState(false);
  return (
    <div
      className={classNames(
        className,
        "flex justify-start items-start gap-2 pt-2"
      )}
    >
      <p className=" whitespace-nowrap hidden lg:block lg:w-52 text-left">
        {description}
      </p>
      {required && (
        <span className={isFullfiled ? "text-green-500" : "text-red-500"}>
          *
        </span>
      )}
      <div className="w-full ">
        <select
          disabled={disabled}
          onChange={(e) => {
            if (e.target.value !== "Оберіть") {
              setIsFullfiled(true);
              setSelectedBrand && setSelectedBrand(e.target.value);
            } else {
              setIsFullfiled(false);
              setSelectedBrand && setSelectedBrand("");
            }
          }}
          className=" outline-none border border-solid border-gray-300 rounded-sm p-1 w-full font-normal py-2"
        >
          <option>Оберіть</option>
          {options.map((option: { value: string; id: number }) => (
            <option key={option.id} value={option.value} className="">
              {option.value}
            </option>
          ))}
        </select>
        {isError && <p className="text-red-500 text-xs text-left ml-2 mt-1">Некоректні данні</p>}
      </div>
    </div>
  );
};
