'use client';

import { Avatar, AvatarIcon, User } from "@heroui/react";

type UserCompProps = {
    avatarSrc?: string,
    description: string,
    name: string
}

export default function UserComp({ avatarSrc, description, name }: UserCompProps) {
    return (
        <User
            avatarProps={{
                src: avatarSrc,
                size: 'md',
                radius: 'full',
                showFallback: true,
                fallback: <Avatar
                    classNames={{
                        base: 'bg-secondary',
                        icon: "text-white/80",
                    }}
                    icon={<AvatarIcon />}
                />
            }}
            description={description}
            name={name}
        />
    );
}
