import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react"; // quando passa uma declaração de componente no caso Icon
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  // extends permitindo passar estilizações adicionais ao link
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref> 
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="22"></Icon>
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
