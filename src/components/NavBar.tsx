import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
	return (
		<HStack justifyContent="space-between" padding={5}>
			<Text fontWeight={500}>URL Expander</Text>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
