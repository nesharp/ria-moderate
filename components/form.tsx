"use client";
import { drives, engineTypes, gearboxes } from "@/lib/values";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { PriceInput } from "./priceInput";
import { Select } from "./select";
import { Textarea } from "./textarea";
import { Input } from "./input";
import { useEffect, useState } from "react";
import { Data } from "@/interfaces/server";
import { AutoService } from "@/services/autoService";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader } from "./Loader/loader";

export const Form = ({ brand }: { brand: Data[] }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<Data[] | null>(null);
  useEffect(() => {
    if (selectedBrand !== "") {
      const id = brand.find((item) => item.value === selectedBrand)?.id;
      if (!id) return setModels(null);
      AutoService.getModels(id).then((res) => setModels(res));
    }
  }, [selectedBrand]);
  const defaultErrors = {
    gearbox: false,
    drive: false,
    isDamaged: false,
    isAbroad: false,
    price: false,
    currency: false,
    brand: false,
    model: false,
    year: false,
    run: false,
    engineType: false,
    engineCP: false,
    colour: false,
    city: false,
    isTradable: false,
    description: false,
  };
  const [errors, setErrors] = useState(defaultErrors);

  const submitHandler = (e: any) => {
    e.preventDefault();
    const data = {
      gearbox: e.target[0].value !== "Оберіть" ? e.target[0].value : null,
      drive: e.target[1].value !== "Оберіть" ? e.target[1].value : null,
      isDamaged: e.target[2].checked,
      isAbroad: e.target[3].checked,
      price: e.target[4].value !== "" ? parseFloat(e.target[4].value) : null,
      currency: e.target[5].value !== "Оберіть" ? e.target[5].value : null,
      brand: e.target[6].value !== "Оберіть" ? e.target[6].value : null,
      model: e.target[7].value !== "Оберіть" ? e.target[7].value : null,
      year: e.target[8].value !== "" ? parseInt(e.target[8].value) : null,
      run: e.target[9].value !== "" ? parseInt(e.target[9].value) : null,
      engineType: e.target[10].value !== "Оберіть" ? e.target[10].value : null,
      engineCP:
        e.target[11].value !== "" ? parseFloat(e.target[11].value) : null,
      colour: e.target[12].value !== "" ? e.target[12].value : null,
      city: e.target[13].value !== "" ? e.target[13].value : null,
      isTradable: e.target[14].checked,
      description: e.target[15].value !== "" ? e.target[15].value : null,
    };
    setIsLoading(true);
    axios({
      method: "post",
      url: "/api/auto",
      data: data,
    }).then((res) => {
      if (res.data.status === 1) {
        router.push("success");
      } else {
        setErrors(defaultErrors);
        setErrors(res.data.errors);
      }
      setIsLoading(false);
    });
  };

  return (
    <div>
      {isLoading && <Loader />}
      <form
        action="
      "
        className="w-10/12 mx-auto"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div>
          <Select
            options={gearboxes}
            required
            isError={errors.gearbox}
            description="Оберіть коробку:"
          />
          <Select
            options={drives}
            required
            isError={errors.drive}
            description="Оберіть тип приводу:"
          />
          <Checkbox required isError={errors.isDamaged} text="Участь в дтп" />
          <Checkbox required isError={errors.isAbroad} text="Під пригон" />
          <PriceInput
            isError={{ price: errors.price, currency: errors.currency }}
          />
          <Select
            options={brand}
            required
            description="Оберіть марку:"
            setSelectedBrand={setSelectedBrand}
            isError={errors.brand}
          />
          <Select
            options={models || []}
            required
            description="Оберіть модель:"
            disabled={!models}
            isError={errors.model}
          />
          <Input
            type="number"
            required
            description="Оберіть рік:"
            isError={errors.year}
          />
          <Input
            type="number"
            isError={errors.run}
            required
            description="Вкажіть пробіг:"
          />
          <Select
            options={engineTypes}
            required
            description="Оберіть тип двигуна:"
            isError={errors.engineType}
          />
          <Input
            type="text"
            className=""
            required
            description="Оберіть об'єм двигуна:"
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9\.]/g, "");
            }}
            isError={errors.engineCP}
          />
          <Input
            type="text"
            description="Оберіть колір:"
            required
            isError={errors.colour}
          />
          <Input
            type="text"
            description="Оберіть місто:"
            required
            isError={errors.city}
          />
          <Checkbox
            required
            text="Можливий обмін"
            isError={errors.isTradable}
          />
          <Textarea />
          <Button>Розмістити оголошення</Button>
        </div>
      </form>
    </div>
  );
};
