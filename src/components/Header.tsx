'use client';

import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from '@/components/UI/Link';
import { usePathname } from "next/navigation";
import ModalComp from "./UI/Modal";
import RegistrationFormComp from "./forms/RegistrationForm";
import LogInFormComp from "./forms/LogInForm";

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
    <Navbar isBordered isBlurred style={{ height: layoutConfig.headerHeight }}>
      <NavbarBrand>
        <p color='secondary'>{siteConfig.title}
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ModalComp
            modalBtnText="Register"
            modalHeader="Sign In"
            btnVariant='bordered'>
            {<RegistrationFormComp />}
          </ModalComp>
        </NavbarItem>
        <NavbarItem>
          <ModalComp
            modalBtnText="Log in"
            modalHeader="Log In"
            btnVariant='solid'>
            {<LogInFormComp />}
          </ModalComp>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


