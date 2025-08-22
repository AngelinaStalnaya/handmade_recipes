import { Link, PressEvent } from "@heroui/react"

interface LinkCompProps {
    href?: string,
    children: string,
    disabled?: boolean,
    size?: 'sm' | 'md' | 'lg',
    color?: 'foreground' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success',
    external?: boolean,
    block?: boolean,
    onPress: (e: PressEvent) => void,
}

const LinkComp = ({
    href,
    children,
    disabled,
    external,
    block,
    size,
    color,
    onPress,

}: LinkCompProps) => {
    return (
        <Link
            onPress={onPress}
            href={href ? href : '#'}
            isDisabled={disabled}
            isExternal={external}
            isBlock={block}
            color={color ? color : 'secondary'}
            size={size ? size : 'md'}
        >
            {children}
        </Link>
    )
}

export default LinkComp