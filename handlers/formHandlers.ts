import { formSchema } from '@/lib/formSchema'
import { Dispatch, SetStateAction } from 'react'
import * as z from 'zod'
export const onSubmit = (
    values: z.infer<typeof formSchema>,
    setErrors: Dispatch<SetStateAction<IErrors>>
) => {
    const errors = formSchema.safeParse(values)
    if (!errors.success) {
        const changedErrors = errors.error.issues.map((issue) => {
            return { [issue.path[0]]: issue.message }
        })
        const err = Object.assign({}, ...changedErrors)
        return setErrors(err)
    } else {
        setErrors({})
    }
    return console.log(values)
}
