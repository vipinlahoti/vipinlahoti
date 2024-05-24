"use client";

import * as React from "react";
import { Moon, Sun } from "@/components/icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" && (
        <Moon className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      {theme === "light" && (
        <Sun className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  );
}
