'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { FormControl, FormField, FormItem } from './ui/form'
import { Button } from './ui/button'
import { CustomSelect } from './select'
import { drives, gearboxes } from '@/lib/values'
import { formSchema } from '@/lib/formSchema'
import { Checkbox } from './checkbox'
import { onSubmit } from '@/handlers/formHandlers'
import { Input } from './input'

export const Form = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gearbox: gearboxes[0].value,
            drive: drives[0].value,
            isDamaged: false,
            isAbroad: false,
            price: '0',
        },
    })

    return (
        <FormProvider {...form}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(form.getValues())
                }}
            >
                <div className="w-10/12 mx-auto lg:w-6/12">
                    {/* geabox */}
                    <div>
                        <FormField
                            control={form.control}
                            name="gearbox"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormControl>
                                        <CustomSelect
                                            options={gearboxes}
                                            description="Оберіть коробку: "
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* drive */}
                    <div>
                        <FormField
                            control={form.control}
                            name="drive"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormControl>
                                        <CustomSelect
                                            options={drives}
                                            description="Оберіть привід: "
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* isDamaged */}
                    <div>
                        <FormField
                            control={form.control}
                            name="isDamaged"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormControl>
                                        <Checkbox
                                            text="Участь в дтп"
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* isAbroad */}
                    <div>
                        <FormField
                            control={form.control}
                            name="isAbroad"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormControl>
                                        <Checkbox
                                            text="Під пригон"
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* price */}
                    <div className="flex mt-2">
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            description="Оберіть ціну:"
                                            className="w-8/12"
                                            value={field.value.toString()}
                                            onChange={(val) => {
                                                return field.onChange(
                                                    parseInt(
                                                        val || '0'
                                                    ).toString()
                                                )
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <div>
                            <Button className="mt-5 bg-green-500 hover:bg-transparent border-green-500 border-solid border-0 hover:border hover:text-green-500 text-white">
                                Додати оголошення
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
