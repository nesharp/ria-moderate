'use strict'
import classNames from 'classnames'
import { Check, Replace } from 'lucide-react'
import { useState } from 'react'

interface InputProps {
    type: 'text' | 'number'
    className?: string
    description?: string
    onChange?: (e: any) => void
    value?: string
}
export const Input = ({
    type,
    className,
    description,

    onChange,
    value,
}: InputProps) => {
    return (
        <div className={(classNames('flex mt-2'), className)}>
            <div className="flex justify-start items-center">
                <div className="w-full">
                    <p className="text-left  font-normal text-sm ml-1">
                        {description}
                    </p>
                    <input
                        type="text"
                        pattern={type === 'number' ? '[A-Za-z]{3}' : undefined}
                        value={value && value}
                        onChange={(e) => {
                            onChange && onChange(e.target.value)
                            if (type === 'number') {
                                e.target.value = e.target.value.replace(
                                    /[^0-9\.]/g,
                                    ''
                                )
                            }
                        }}
                        className=" border-gray-400 rounded-sm px-2 border-solid border-2 outline-none font-normal h-10 w-full"
                    />
                </div>
            </div>
        </div>
    )
}
