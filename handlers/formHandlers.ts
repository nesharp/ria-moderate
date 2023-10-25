import { formSchema } from '@/lib/formSchema'
import * as z from 'zod'
export const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
}
