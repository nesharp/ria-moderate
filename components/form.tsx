'use client'
import { FormProvider } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { CustomSelect } from './select'
import {
    cities,
    colors,
    currencies,
    drives,
    engineTypes,
    gearboxes,
    yearsOfIssue,
} from '@/lib/values'
import { Checkbox } from './checkbox'
import { onSubmit } from '@/handlers/formHandlers'
import { Input } from './input'
import { IExtendedOptions, IOptions } from '@/interfaces/fields'
import { useEffect, useState } from 'react'
import { useFormConfig } from '@/hooks/useFormConfig'
import { useModelComplete } from '@/hooks/useModelComplete'
import { Loader } from './Loader/loader'
import * as z from 'zod'
import { Textarea } from './textarea'
import { FormError } from './error'
export const Form = ({ brands }: { brands: IExtendedOptions[] }) => {
    const [errors, setErrors] = useState<IErrors>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [models, setModels] = useState<IOptions[]>([])
    const form = useFormConfig(brands)
    useEffect(() => {
        setIsLoading(false)
    }, [])
    useEffect(() => {
        console.log(errors)
    }, [errors])
    useModelComplete(brands, models, setModels, form)
    return !isLoading ? (
        <FormProvider {...form}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(form.getValues(), setErrors)
                }}
            >
                <div className="w-10/12 mx-auto lg:w-6/12 animate-in transition-all">
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
                        <FormError message={errors.gearbox} />
                    </div>
                    {/* drive */}
                    <div className="mt-2">
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
                        <FormError message={errors.drive} />
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
                    <div className="md:flex gap-5 w-full mt-2">
                        <div className="md:w-2/3">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                description="Оберіть ціну:"
                                                className="w-full "
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
                            <FormError message={errors.price} />
                        </div>
                        <div className="md:w-1/5 min-w-1/5">
                            <FormField
                                control={form.control}
                                name="currency"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <CustomSelect
                                                options={currencies}
                                                description="Валюта:"
                                                value={field.value}
                                                className="w-full"
                                                onChange={(val) => {
                                                    return field.onChange(val)
                                                }}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormError message={errors.currency} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <FormField
                            control={form.control}
                            name="brand"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <CustomSelect
                                            options={brands}
                                            description="Оберіть бренд:"
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                            isSearchable
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.brand} />
                    </div>
                    <div className="mt-2">
                        <FormField
                            control={form.control}
                            name="model"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <CustomSelect
                                            options={models}
                                            description="Оберіть модель:"
                                            value={field.value}
                                            isDisabled={!models}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                            isSearchable
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.model} />
                    </div>
                    <div className="mt-3">
                        <FormField
                            control={form.control}
                            name="year"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <CustomSelect
                                            options={yearsOfIssue}
                                            description="Оберіть рік:"
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.year} />
                    </div>
                    <div className="mt-3">
                        <FormField
                            control={form.control}
                            name="run"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            value={field.value.toString()}
                                            onChange={(val) => {
                                                return field.onChange(
                                                    parseInt(
                                                        val || '0'
                                                    ).toString()
                                                )
                                            }}
                                            description="Вкажіть пробіг:"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.run} />
                    </div>
                    <div className="mt-3">
                        <FormField
                            control={form.control}
                            name="engineType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <CustomSelect
                                            options={engineTypes}
                                            description="Оберіть тип двигуна:"
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                            isSearchable
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.engineType} />
                    </div>
                    <div className="mt-3">
                        <FormField
                            control={form.control}
                            name="engineCP"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            description="Введіть обєм двигуна:"
                                            value={field.value.toString()}
                                            onChange={(val) => {
                                                const value = !val
                                                    ? '0'
                                                    : val.slice('')[0] === '0'
                                                    ? val.slice(1)
                                                    : val
                                                return field.onChange(value)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.engineCP} />
                    </div>
                    <div className="mt-3">
                        <FormField
                            control={form.control}
                            name="colour"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <CustomSelect
                                            options={colors}
                                            description="Оберіть колір:"
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.colour} />
                    </div>
                    <div className="mt-3">
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <CustomSelect
                                            options={cities}
                                            description="Оберіть своє місто:"
                                            value={field.value}
                                            isSearchable
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.city} />
                    </div>
                    <div className="mt-3">
                        <FormField
                            control={form.control}
                            name="isTradable"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Checkbox
                                            text="Можливий обмін"
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
                    <div>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            value={field.value}
                                            onChange={(val) => {
                                                return field.onChange(val)
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormError message={errors.description} />
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
    ) : (
        <Loader />
    )
}
