import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <Box
      as="header"
      gap={6}
      justify="between"
      align="center"
      className="h-24"
      isContainer
    >
      <Logo />
      <Flex gap={6} align="center">
        <ModeToggle />
      </Flex>
    </Box>
  );
}
