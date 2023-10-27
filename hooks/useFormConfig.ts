import { IExtendedOptions } from '@/interfaces/fields'
import { formSchema } from '@/lib/formSchema'
import {
    cities,
    colors,
    currencies,
    drives,
    engineTypes,
    gearboxes,
    yearsOfIssue,
} from '@/lib/values'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export const useFormConfig = (brands: IExtendedOptions[]) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gearbox: gearboxes[0].value,
            drive: drives[0].value,
            isDamaged: false,
            isAbroad: false,
            price: '0',
            currency: currencies[0].value,
            brand: brands[0].value,
            year: yearsOfIssue[yearsOfIssue.length - 1].value,
            run: '0',
            engineType: engineTypes[0].value,
            engineCP: '0',
            colour: colors[0].value,
            city: cities[0].value,
            isTradable: false,
            description: '',
        },
    })
    return form
}
