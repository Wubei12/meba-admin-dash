"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from '.';
import { Spinner } from '../common';
import { FiEye, FiEyeOff } from 'react-icons/fi';


interface Config {
    labelText: string;
    labelId: string;
    type: string;
    value: string;
    link?: {
        linkText: string;
        linkUrl: string;
    },
    required?: boolean;
}

interface Props {
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function Form({ config, btnText, isLoading, onSubmit, onChange }: Props) {
    const [showPassword, setShowPassword] = useState(false);


    const toggleShowPass = () => {
        setShowPassword(!showPassword)
    }


    return (

        <form className='space-y-6' onSubmit={onSubmit}>
            {config.map((input, index) => (

                <div key={index} className='relative'>


                    <Input
                        key={input.labelId}
                        labelId={input.labelId}
                        type={showPassword ? "text" : input.type}
                        onChange={onChange}
                        value={input.value}
                        link={input.link}
                        required={input.required}
                    >
                        {input.labelText}
                    </Input>
                    {input.type === 'password' && (
                        <div className='absolute cursor-pointer right-4 bottom-2 transition duration-300 active:scale-125' onClick={toggleShowPass}>

                            {
                                showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />
                            }
                        </div>
                    )}
                </div>
            ))}
            <div>
                <button
                    type="submit"
                    className="flex w-full shadow-xl justify-center rounded-md bg-[#fdcd49] items-center px-3 py-3 text-[16px] font-semibold leading-6 text-gray-700 hover:bg-[#fdd35d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-110 focus-visible:outline-[#fdd35d] transition duration-200"
                    disabled={isLoading}
                >
                    {
                        isLoading ? <Spinner sm /> : `${btnText}`
                    }
                </button>
            </div>

        </form>
    )
}

export default Form