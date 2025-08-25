'use client';

import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from '@/components/UI/Link';
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      
      return (
        <NavbarItem key={item.href}>
          <Link
            color={isActive ? 'success' : 'foreground'}
            href={item.href}
            size='lg'
            >
            {item.label}
          </Link>
        </NavbarItem>
      )
    })
  }

  return (
    <Navbar isBordered isBlurred style={{height: layoutConfig.headerHeight}}>
      <NavbarBrand>
        <p color='secondary'>{siteConfig.title}
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/profile/registration" block>Регистрация</Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="/profile/signIn" block>
            Войти
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


