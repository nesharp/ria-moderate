'use client'
import classNames from 'classnames'
import { Check } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import * as SelectType from 'react-select'
import dynamic from 'next/dynamic'
import { IOptions } from '@/interfaces/fields'
// import Select from 'react-select'
const Select = dynamic(() => import('react-select'), {
    ssr: false,
})
interface SelectProps {
    options: { value: string; label: string }[]
    className?: string
    description: string
    isSearchable?: boolean
    value?: string
    onChange?: (val: any) => void
    isDisabled?: boolean
}
export const CustomSelect = ({
    options,
    className,
    description,
    isSearchable = false,
    value,
    onChange,
    isDisabled = false,
}: SelectProps) => {
    return (
        <div
            className={classNames(
                className,
                'flex justify-start items-center gap-2 cursor-pointer'
            )}
        >
            <div className="w-full ">
                <p className="text-left font-normal text-sm ml-1">
                    {description}
                </p>
                <Select
                    isDisabled={isDisabled}
                    options={options}
                    id=""
                    className="font-normal min-w-full"
                    // defaultValue={options[0]}
                    isSearchable={isSearchable}
                    onChange={(val: any) => {
                        onChange && onChange(val.value)
                    }}
                    value={{ value: value, label: value }}
                />
            </div>
        </div>
    )
}
