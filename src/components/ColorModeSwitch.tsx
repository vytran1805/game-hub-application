import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

/**
 * This file contains switch component for toggling the color mode
 * @returns
 */
const ColorModeSwitch = () => {
  // call useColorMode() hook: this returns an obj with two properties
  // function toggleColorMode
  // string colorMode: the current mode ('dark' by default)
  const { toggleColorMode, colorMode } = useColorMode();
  //useColorModeValue hook to change style based on the color mode.
  //It takes 2 arguments: the value in light mode, and the value in dark mode.
  //   const toogleValue = useColorModeValue(
  //     "linear-gradient(180deg,#ffcc89,#d8860b)",
  //     "linear-gradient(180deg,#777,#3a3a3a)"
  //   );

  return (
    <HStack>
      {/* if colorMode is 'dark', we check the switch. We also handle onChange() */}
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="cyan"
      />
      {/* if the colorMode is dark, setText as "Dark mode", otherwise, "Light mode" */}
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark mode" : "Light mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
