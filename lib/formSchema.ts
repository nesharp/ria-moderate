import * as z from 'zod'
export const formSchema = z.object({
    gearbox: z.string().min(1, { message: 'Оберіть коробку передач' }),
    drive: z.string().min(1, { message: 'Оберіть привід' }),
    isDamaged: z.boolean(),
    isAbroad: z.boolean(),
    price: z.string().min(2, { message: 'Введіть ціну' }),
    currency: z.string().min(1, { message: 'Оберіть валюту' }),
    brand: z.string().min(1, { message: 'Оберіть марку' }),
    model: z.string().min(1, { message: 'Оберіть модель' }),
    year: z.string().min(1, { message: 'Введіть рік' }),
    run: z.string().min(1, { message: 'Введіть пробіг' }),
    engineType: z.string().min(1, { message: 'Оберіть тип двигуна' }),
    engineCP: z.string().min(1, { message: 'Введіть потужність двигуна' }),
    colour: z.string().min(1, { message: 'Введіть колір' }),
    city: z.string().min(1, { message: 'Введіть місто' }),
    isTradable: z.boolean(),
    description: z
        .string()
        .min(20, { message: 'Введіть опис(не менше ніж 20 символів)' }),
})
