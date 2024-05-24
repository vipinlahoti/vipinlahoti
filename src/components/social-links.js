import { Flex } from "@/components/flex";
import { Button } from "@/components/button";
import { siteConfig } from "@/lib/globals";

export const SocialLinks = () => (
  <Flex gap={6} align="center" className="hidden md:flex">
    {siteConfig.publicNavItems.map((item) => (
      <Button
        key={item.href}
        href={item.href}
        variant="link"
        className="text-secondary-foreground"
      >
        {item.label}
      </Button>
    ))}
  </Flex>
);
