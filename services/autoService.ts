import { ServerData } from "@/interfaces/server";

export const AutoService = {
  async getBrands() {
    const response = fetch(
      "https://developers.ria.com/auto/categories/1/marks?api_key=hPakOudm8AaUyt5aMie8MKqY0xtcIuDWowepg3pa",
      {
        cache: "force-cache",
      }
    )
      .then((res) => res.json())
      .then((res) =>
        res.map((brand: ServerData) => {
          return {
            id: brand.value,
            value: brand.name,
          };
        })
      );
    return response;
  },
  async getModels(brandId: number) {
    const response = fetch(
      `https://developers.ria.com/auto/categories/1/marks/${brandId}/models?api_key=hPakOudm8AaUyt5aMie8MKqY0xtcIuDWowepg3pa`
    )
      .then((res) => res.json())
      .then((res) =>
        res.map((model: ServerData) => {
          return {
            id: model.value,
            value: model.name,
          };
        })
      );
    return response;
  },
};
