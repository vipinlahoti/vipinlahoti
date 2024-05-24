import { Box } from "@/components/box";
import { Text } from "@/components/text";
import { SocialLinks } from "@/components/social-links";

/**
 * Hero component for displaying a hero section with a title, description, and optional overline.
 * @param {string} title - The main title of the hero section.
 * @param {string} description - The description text of the hero section.
 * @returns {JSX.Element} The rendered Hero component.
 */
export const Hero = ({ title, description }) => (
  // Container box for the hero section
  <Box as="section" size={4} direction="column" isContainer>
    <Text as="h1" className="mb-8">
      Hey! <br /> I’m Vipin
    </Text>
    <Text variant="lead" className="max-w-4xl">
      — frontend developer specializing in React.js, passionate about creating
      engaging and user-friendly web interfaces.
    </Text>
    <Text className="my-8">
      11 years of hands-on experience.
      <br />
      Based in Hyderabad, IND.
    </Text>
    <SocialLinks />
  </Box>
);
