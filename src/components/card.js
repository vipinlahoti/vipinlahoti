import Link from "next/link";
import { Flex } from "@/components/flex";
import { Text } from "@/components/text";

export function Card() {
  return (
    <Flex direction="column" gap={4} className="w-1/3">
      <div className="bg-secondary/25 p-6 rounded-lg w-full h-48"></div>
      <Flex direction="column" gap={1} className="px-6 py-2">
        <Text as="h6">
          <Link href="/">
            It is a long established fact that a reader will be distracted by
            the readable
          </Link>
        </Text>
        <Text className="text-secondary-foreground">Oct, 2025</Text>
      </Flex>
    </Flex>
  );
}
