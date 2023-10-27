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
        <div className={(classNames('flex mt-2 w-full'), className)}>
            <div className="flex justify-start items-center w-full">
                <div className="w-full">
                    <p className="text-left  font-normal text-sm ml-1">
                        {description}
                    </p>
                    <input
                        type="text"
                        value={value && value}
                        onChange={(e) => {
                            if (type === 'number') {
                                e.target.value = e.target.value.replace(
                                    /[^0-9\.]/g,
                                    ''
                                )
                            }
                            onChange && onChange(e.target.value)
                        }}
                        className=" border-gray-300 rounded-sm px-2 border-solid border outline-none font-normal h-10 w-full"
                    />
                </div>
            </div>
        </div>
    )
}
