import { Form } from "@/components/form2";
import { AutoService } from "@/services/autoService";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Додавання оголошення",
  description: "Додавання оголошення",
};
export default async function Home() {
  // const brands = await AutoService.getBrands();
  return (
    <main className="flex flex-col justify-center text-center py-2 font-bold">
      <h2 className="mb-4">Додавання оголошення</h2>
      <Form />
    </main>
  );
}
