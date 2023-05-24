import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
/**
 *
 * @returns
 */
const NavBar = () => {
  // Lay out items horizontally
  return (
    <HStack justify="space-between">
      /* add logo */
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
