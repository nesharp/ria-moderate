"use client";

import { useState } from "react";

export const Textarea = () => {
  const [isFullfiled, setIsFullfiled] = useState<boolean>(false);
  return (
    <div className="flex mt-2">
      <div className="lg:w-52"></div>
      {
        <span className={isFullfiled ? "text-green-500" : "text-red-500"}>
          *
        </span>
      }
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
