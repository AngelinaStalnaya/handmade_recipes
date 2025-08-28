'use client';

import { Avatar, AvatarIcon, User } from "@heroui/react";

type UserCompProps = {
    description: string,
    name: string,
    gender: 'male' | 'female',
    avatarSrc?: string, 
}

export default function UserComp({ description, name,avatarSrc, gender }: UserCompProps) {
    return (
        <User
            avatarProps={{
                src: avatarSrc,
                size: 'md',
                radius: 'full',
                showFallback: true,
                fallback: <Avatar
                    classNames={{
                        base: `${gender === 'female' ? 'bg-secondary' : 'bg-green-700'}`,
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
