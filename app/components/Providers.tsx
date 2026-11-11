"use client";

import type { ReactNode } from "react";
import { AlbumProvider } from "@/lib/album";
import { LangProvider } from "@/lib/i18n";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <AlbumProvider>{children}</AlbumProvider>
    </LangProvider>
  );
}
