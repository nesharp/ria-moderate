'use client'

import { useState } from 'react'

interface CheckboxProps {
    text: string
    value?: boolean
    onChange?: (val: boolean) => void
}
export const Checkbox = ({ text, value, onChange }: CheckboxProps) => {
    return (
        <div className="flex pt-2">
            <div>
                <div className="flex">
                    <input
                        type="checkbox"
                        className=" h-5 w-5 cursor-pointer"
                        checked={value}
                        onChange={(e) => {
                            onChange && onChange(e.target.checked)
                        }}
                    />
                    <p className="ml-2 font-normal">{text}</p>
                </div>
            </div>
        </div>
    )
}
