import { EyeFilledIcon } from "@/assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/assets/EyeSlashFilleIcon";
import { Input } from "@heroui/react"
import React, { useState } from "react";

interface InputCompProps {
    label?: string,
    type?: string,
    className?: string,
    aria_label?: string,
    placeholder?: string,
    defaultValue?: string,
    required?: boolean,
    clearable?: boolean,
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success',
    variant?: 'flat' | 'bordered',
    startContent?: React.ReactNode,
    endContent?: React.ReactNode,
    description?: string,
    errorMessage?: string,
    isInvalid?: boolean,
    labelPlacement?: 'inside' | 'outside' | 'outside-left' | 'outside-top',
}

const InputComp = ({
    label,
    type,
    placeholder,
    defaultValue,
    required,
    size,
    color,
    variant,
    labelPlacement,
    className,
    aria_label,
    clearable,
    startContent,
    endContent,
    description,
    errorMessage,
    isInvalid,

}: InputCompProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            {type === 'password'
                ?
                <Input
                    onValueChange={setInputValue}
                    value={inputValue}
                    label={label}
                    aria-label={aria_label}
                    className={className}
                    radius='full'
                    type={isVisible ? 'text' : 'password'}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    isRequired={required}
                    isClearable={clearable}
                    size={size ? size : 'md'}
                    color={color ? color : 'secondary'}
                    variant={variant ? variant : 'flat'}
                    errorMessage={errorMessage}
                    isInvalid={isInvalid}
                    description={description}
                    labelPlacement={labelPlacement ? labelPlacement : 'outside-left'}
                    endContent={
                        <button
                            aria-label="toggle password visibility"
                            className="focus:outline-solid outline-transparent"
                            type="button"
                            onClick={toggleVisibility}
                        >
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>}
                />
                :
                <Input
                    onValueChange={setInputValue}
                    value={inputValue}
                    label={label}
                    aria-label={aria_label}
                    className={className}
                    radius='full'
                    type={type ? type : 'text'}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    isRequired={required}
                    isClearable={clearable}
                    size={size ? size : 'md'}
                    color={color ? color : 'secondary'}
                    variant={variant ? variant : 'flat'}
                    errorMessage={errorMessage}
                    isInvalid={isInvalid}
                    description={description}
                    startContent={startContent}
                    endContent={endContent}
                    labelPlacement={labelPlacement ? labelPlacement : 'outside-left'}
                />}

        </>
    )
}

export default InputComp