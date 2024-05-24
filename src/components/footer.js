import { Box } from "@/components/box";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer>
      <Box direction="column" size={4} gap={6} isContainer>
        <Logo />
        <SocialLinks />
      </Box>
    </footer>
  );
}
