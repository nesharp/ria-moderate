import { IErrors } from '@/interfaces/form-interface'
import { formSchema } from '@/lib/formSchema'
import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Dispatch, SetStateAction } from 'react'
import * as z from 'zod'
export const onSubmit = (
    values: z.infer<typeof formSchema>,
    setErrors: Dispatch<SetStateAction<IErrors>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    router: AppRouterInstance
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
    setIsLoading(true)

    axios
        .post('/api/auto', values)
        .then((res) => res.data)
        .then((res) => {
            setIsLoading(false)
            if (res === 'OK') {
                setErrors({})
                router.push('/success')
            } else {
                console.log(res)
                setErrors(res)
            }
        })
}
