import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"; //font
import { MdPhoneIphone } from "react-icons/md"; //material design
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; //bootstrap

import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { color } from "framer-motion";

interface Props {
  platforms: Platform[]; //this platforms prop is an array of Platform objs (import from useGames.ts)
}
const PlatformIconList = ({ platforms }: Props) => {
  // in this iconMap, we want to map the slug of each platform to an icon component
  const iconMap: { [key: string]: IconType } = {
    //this key is called an index signature, represents the prop in this obj
    //name: PlayStation
    //slug: playStation //acts as a key (the part on the left of the colon)
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nitendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    // this number is a multiple of theme.space value (4px by default)
    <HStack margin={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
