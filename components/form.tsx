"use client";
import {
  drives,
  engineTypes,
  geaboxes,
  paintConditions,
  technicalConditions,
} from "@/lib/values";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { PriceInput } from "./priceInput";
import { Select } from "./select";
import { Textarea } from "./textarea";
import { Input } from "./input";
import { useEffect, useState } from "react";
import { Data, ServerData } from "@/interfaces/server";
import { AutoService } from "@/services/autoService";

export const Form = ({ brand }: { brand: Data[] }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<Data[] | null>(null);
  useEffect(() => {
    if (selectedBrand !== "") {
      const id = brand.find((item) => item.value === selectedBrand)?.id;
      if (!id) return setModels(null);
      AutoService.getModels(id).then((res) => setModels(res));
    }
  }, [selectedBrand]);
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form
      action="
      "
      className="w-10/12 mx-auto"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <div>
        <Select options={geaboxes} required description="Оберіть коробку:" />
        <Select options={drives} required description="Оберіть тип приводу:" />
        <Checkbox required text="Участь в дтп" />
        <Checkbox required text="Під пригон" />
        <PriceInput />
        <Select
          options={brand}
          required
          description="Оберіть марку:"
          setSelectedBrand={setSelectedBrand}
        />
        <Select
          options={models || []}
          required
          description="Оберіть модель:"
          disabled={!models}
        />
        <Input type="number" className="" required description="Оберіть рік:" />
        <Input
          type="number"
          className=""
          required
          description="Вкажіть пробіг:"
        />
        <Select
          options={engineTypes}
          required
          description="Оберіть тип двигуна:"
        />
        <Input type="text" description="Оберіть колір:" required />
        <Input type="text" description="Оберіть місто:" required />
        <Checkbox required text="Можливий обмін" />
        <Textarea />
        <Button>Розмістити оголошення</Button>
      </div>
    </form>
  );
};
