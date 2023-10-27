'use client'

import { useState } from 'react'
interface Props {
    value: string
    placeholder?: string
    onChange: (value: string) => void
}
export const Textarea = ({ value, onChange, placeholder }: Props) => {
    return (
        <div className="flex mt-2 items-center">
            <textarea
                onChange={(e) => {
                    onChange(e.target.value)
                }}
                value={value}
                placeholder={placeholder || 'Опис українською'}
                className="border border-solid rounded-sm border-gray-300 w-full p-2 outline-none"
            />
        </div>
    )
}
