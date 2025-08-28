'use client';

import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from '@/components/UI/Link';
import { usePathname } from "next/navigation";
import ModalComp from "./UI/Modal";
import RegistrationFormComp from "./forms/RegistrationForm";
import LogInFormComp from "./forms/LogInForm";
import UserComp from "./UI/User";
import ButtonComp from "./UI/Button";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [logged, setLogged] = useState<boolean>(true);

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

  useEffect(() => { }, [logged])

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
        {logged
          ?
          <>
            <NavbarItem>
              <ButtonComp
                variant="bordered"
                color='secondary'
                onPress={() => {setLogged(false); console.log('log out clicked')}}
              >
                Log out
              </ButtonComp>
            </NavbarItem>
            <NavbarItem>
              <ButtonComp variant="light" className='flex p-0 m-0 pr-2' onPress={() => console.log('profile clicked')}>
                <UserComp name='Angelina' description='Handmade master' gender='female' />
              </ButtonComp>
            </NavbarItem>
          </>
          :
        <>
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
          </>
        }



      </NavbarContent>
    </Navbar >
  );
}


