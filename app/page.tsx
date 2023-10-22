import { Form } from "@/components/form";
import { ServerData } from "@/interfaces/server";
import { AutoService } from "@/services/autoService";
import axios from "axios";
import next, { Metadata } from "next";
export const metadata: Metadata = {
  title: "Додавання оголошення",
  description: "Додавання оголошення",
};
export default async function Home() {
  const brands = await AutoService.getBrands();
  return (
    <main className="flex flex-col justify-center text-center py-2 font-bold">
      <h2 className="mb-4">Додавання оголошення</h2>
      <Form brand={brands} />
    </main>
  );
}
