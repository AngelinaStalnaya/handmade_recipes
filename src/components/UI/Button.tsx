import { Button, PressEvent } from "@heroui/react";
import spinner from '@/assets/spinner.svg'


interface ButtonCompProps {
    children: string | React.ReactNode,
    onPress: (e: PressEvent) => void,
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success',
    disabled?: boolean,
    loading?: boolean,
    className?: string,
    size?: 'sm' | 'md' | 'lg',
    variant?: 'solid' | 'bordered' | 'ghost' | 'shadow' | 'light',
    startContent?: React.ReactNode,
    endContent?: React.ReactNode,
    aria_label?: string,
    icon?: boolean,
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
    aria_label,
}: ButtonCompProps) => {
    return (
        <Button
            onPress={onPress}
            radius='full'
            color={color ? color : 'secondary'}
            size={size ? size : 'md'}
            variant={variant ? variant : 'ghost'}
            isDisabled={disabled}
            isLoading={loading}
            spinner={spinner}
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