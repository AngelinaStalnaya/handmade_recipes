'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/materials', label: 'Материалы' },
    { href: '/projects', label: 'Проекты' }
  ]

  return (
    <Navbar>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href='/'>Handmade Recipes
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.href}>
              <Link 
              color="foreground" 
              href={item.href} 
              className={`px-3 py-1 border-white rounded-full border-1.5 text-md
              ${isActive ? "text-purple-700": "text-foreground"}
              hover:text-purple-700 hover:border-1.5
              hover:border-purple-700 hover:rounded-full
              ransition-color transition-border duration-200`}>
                {item.label}
              </Link>
            </NavbarItem>
          )
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Регистрация</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat">
            Войти
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


