"use client";

import { useState } from "react";
import { Check } from "lucide-react";
export const Textarea = () => {
  const [isFullfiled, setIsFullfiled] = useState<boolean>(false);
  return (
    <div className="flex mt-2 items-center">
      <div className="lg:w-52"></div>
      {!isFullfiled ? (
        <span className={"text-red-500 h-5 w-5"}>*</span>
      ) : (
        <Check className="h-5 w-5 text-green-500 font-normal" />
      )}
      <textarea
        onChange={(e) => {
          setIsFullfiled(e.target.value !== "");
        }}
        placeholder="Опис українською"
        className="ml-2 border w-full p-2 outline-none"
      />
    </div>
  );
};
