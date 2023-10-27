import { IExtendedOptions, IOptions } from '@/interfaces/fields'
import { formSchema } from '@/lib/formSchema'
import { AutoService } from '@/services/autoService'
import { Dispatch, SetStateAction, useEffect } from 'react'
import * as z from 'zod'
export const useModelComplete = (
    brands: IExtendedOptions[],
    models: IOptions[],
    setModels: Dispatch<SetStateAction<IOptions[]>>,
    form: any
) => {
    useEffect(() => {
        const brand = brands.find((item) => item.value === form.watch('brand'))
        if (!brand) {
            AutoService.getModels(brands[0].id).then((res) => setModels(res))
        } else {
            AutoService.getModels(brand.id).then((res) => setModels(res))
        }
    }, [form.watch('brand')])

    useEffect(() => {
        if (models.length > 0) {
            form.setValue('model', models[0].value)
        }
    }, [models])
}
