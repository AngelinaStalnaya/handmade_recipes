'use client';

import { Button, PressEvent } from "@heroui/react";
import { SpinnerIcon } from '@/assets/SpinnerIcon'


interface ButtonCompProps {
    children: string | React.ReactNode,
    onPress?: (e: PressEvent) => void,
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success',
    disabled?: boolean,
    loading?: boolean,
    className?: string,
    size?: 'sm' | 'md' | 'lg',
    variant?: 'solid' | 'bordered' | 'ghost' | 'shadow' | 'light' ,
    startContent?: React.ReactNode,
    endContent?: React.ReactNode,
    aria_label?: string,
    icon?: boolean,
    type?: 'button' | 'submit'| 'reset',
}

const ButtonComp = ({
    children,
    onPress,
    color,
    disabled,
    size,
    variant,
    loading,
    className,
    startContent,
    endContent,
    icon,
    type,
    aria_label,
}: ButtonCompProps) => {
    return (
        <Button
            onPress={onPress}
            radius='full'
            type={type}
            color={color ? color : 'secondary'}
            size={size ? size : 'md'}
            variant={variant ? variant : 'ghost'}
            isDisabled={disabled}
            isLoading={loading}
            spinner={<SpinnerIcon />}
            startContent={startContent}
            endContent={endContent}
            isIconOnly={icon}
            aria-label={aria_label}
            className={className}
        >
            {children}
        </Button>
    )
}

export default ButtonComp