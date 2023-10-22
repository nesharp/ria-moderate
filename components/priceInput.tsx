"use client";
import { Input } from "./input";
import { Select } from "@/components/select";

export const PriceInput = ({
  isError,
}: {
  isError: {
    price: boolean;
    currency: boolean;
  };
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-start  w-full gap-2 mt-2">
      <Input
        type="text"
        className=""
        required
        onChange={(e) => {
          e.target.value = e.target.value.replace(/[^0-9\.]/g, "");
        }}
        description="Оберіть ціну:"
        isError={isError.price}
      />

      <Select
        options={[
          {
            id: 1,
            value: "грн",
          },
          {
            id: 2,
            value: "дол",
          },
        ]}
        required
        description=""
        className="w-42"
        isError={isError.currency}
      />
    </div>
  );
};
