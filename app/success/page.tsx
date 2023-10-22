import { Check } from "lucide-react";

export default function Success() {
  return (
    <div className="flex  flex-col justify-center ">
      <Check className="w-96 h-96 text-green-500 text-center mx-auto rounded-full border-4 border-solid border-green-500 my-10" />
      <h2 className="text-gray-800 text-4xl text-center">THANK YOU!</h2>
    </div>
  );
}
