'use client';

import React, { useState } from "react";
import { EyeFilledIcon } from "@/assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/assets/EyeSlashFilleIcon";
import { Input } from "@heroui/react"


interface InputCompProps {
    value?: string,
    onChange?: (value: InputEvent) => void,
    label?: string,
    type?: string,
    name: string,
    id?: string,
    defaulValue?: string,
    className?: string,
    aria_label?: string,
    placeholder?: string,
    defaultValue?: string,
    required?: boolean,
    clearable?: boolean,
    validationBehavior?: 'aria' | 'native' | undefined,
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
    value,
    onChange,
    label,
    type,
    name,
    id,
    placeholder,
    defaultValue,
    required,
    size,
    color,
    variant,
    labelPlacement,
    className,
    aria_label,
    validationBehavior,
    clearable,
    startContent,
    endContent,
    description,
    errorMessage,
    isInvalid,
}: InputCompProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(`${value}`);

    const toggleVisibility = () => setIsVisible(!isVisible);

    if (type === 'password') {
        return (<Input
            onValueChange={() => onChange}
            name={name}
            value={value}
            label={label}
            aria-label={aria_label}
            className={className}
            radius='full'
            id={id}
            validationBehavior={validationBehavior}
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
        />)
    }
    return (<Input
        onValueChange={setInputValue}
        validationBehavior={validationBehavior}
        value={inputValue}
        name={name}
        id={id}
        label={label}
        defaultValue={defaultValue}
        aria-label={aria_label}
        className={className}
        radius='full'
        type={type ? type : 'text'}
        placeholder={placeholder}
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
    />)
}

export default InputComp