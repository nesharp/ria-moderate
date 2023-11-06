import { ServerData } from '@/interfaces/server'
const riaApi = process.env.RIA_API

export const AutoService = {
    async getBrands() {
        const response = fetch(
            `https://developers.ria.com/auto/categories/1/marks?api_key=${riaApi}`,
            {
                cache: 'force-cache',
            }
        )
            .then((res) => res.json())
            .then((res) =>
                res.map((brand: ServerData) => {
                    return {
                        id: brand.value,
                        label: brand.name,
                        value: brand.name,
                    }
                })
            )
        return response
    },
    async getModels(brandId: number) {
        console.log(riaApi)
        const response = fetch(
            `https://developers.ria.com/auto/categories/1/marks/${brandId}/models?api_key=${riaApi}`
        )
            .then((res) => res.json())
            .then((res) =>
                res.map((model: ServerData) => {
                    return {
                        label: model.name,
                        value: model.name,
                    }
                })
            )
            .then((res) => {
                console.log(res)
                return res
            })
            .catch((err) => console.log(err))

        return response
    },
}
