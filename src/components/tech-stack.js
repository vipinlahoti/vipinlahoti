import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Text } from "@/components/text";

export const TechStack = () => {
  const className =
    "text-2xl font-extrabold leading-tight text-secondary-foreground/55";

  return (
    <Box size={1} className="bg-secondary rounded-lg" isContainer>
      <Flex gap={6} justify="center" align="center" isContainer>
        <Text className={className}>Javascript</Text>
        <Text className={className}>TypeScript</Text>
        <Text className={className}>React</Text>
        <Text className={className}>Next.js</Text>
        <Text className={className}>Remix.run</Text>
        <Text className={className}>Tailwind CSS</Text>
        <Text className={className}>Prisma</Text>
        <Text className={className}>GraphQL</Text>
      </Flex>
    </Box>
  );
};
