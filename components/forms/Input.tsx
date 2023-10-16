import Link from 'next/link';
import React, { ChangeEvent } from 'react'

interface Props {
    labelId: string
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    children: React.ReactNode;
    link?: {
        linkText: string;
        linkUrl: string;
    }
    required?: boolean;
}

function Input({ children, type, onChange, link, value, labelId, required = false }: Props) {
    return (
        <div>
            <div className="flex justify-between align-middle">

                <label htmlFor={labelId} className="block text-sm font-medium leading-6 text-gray-900">
                    {children}
                </label>
                {link && (
                    <div className="text-sm">
                        <Link className=' font-semibold text-[#f2b202] hover:text-[#fdbd0d] ' href={link.linkUrl}>
                            {link.linkText}
                        </Link>
                    </div>
                )}
            </div>
            <div className="mt-2">
                <input
                    id={labelId}
                    className="block w-full rounded-md border-0 py-1.5 sm:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#fdd35d] sm:text-sm sm:leading-6  transition duration-300"
                    name={labelId}
                    type={type}
                    onChange={onChange}
                    value={value}
                    required={required}
                />
            </div>
        </div>
    )
}

export default Input